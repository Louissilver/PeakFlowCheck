import React, {useState, useEffect} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import CommonScreen from '../../components/CommonScreen';
import AudioRecord from 'react-native-audio-record';
import {PermissionsAndroid} from 'react-native';
import {Buffer} from 'buffer';
import {FFT} from 'dsp.js';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';

const PeakFlowScreen = ({navigation}) => {
  const [recording, setRecording] = useState(false);
  const [audioURI, setAudioURI] = useState(null);
  const [maxFrequency, setMaxFrequency] = useState(0);

  const sampleRate = 44100;
  const recordingDuration = 3000;

  useEffect(() => {
    let recordingTimer;
    if (recording) {
      recordingTimer = setTimeout(() => {
        stopRecording();
      }, recordingDuration);
    }
    return () => clearTimeout(recordingTimer);
  }, [recording]);

  let timer;
  const startRecording = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Permissão de gravação de áudio',
          message:
            'O aplicativo precisa de permissão para gravar áudio ' +
            'para que possa medir o pico de fluxo.',
          buttonNeutral: 'Pergunte-me depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        AudioRecord.init({
          sampleRate: sampleRate,
          channels: 1,
          bitsPerSample: 16,
          wavFile: 'audio.aac',
          audioSource: 6,
          bufferSize: 8192,
        });
        let audioBuffer = Buffer.from([]);
        AudioRecord.start();
        setRecording(true);
        timer = setTimeout(() => {
          stopRecording();
        }, recordingDuration);
      } else {
        console.log('Permission to access microphone denied');
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      const audioBuffer = await AudioRecord.stop();
      setAudioURI(audioBuffer);
      setRecording(false);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playAudio = () => {
    const sound = new Sound(audioURI, '', error => {
      if (error) {
        console.log('Erro ao carregar o arquivo de áudio', error);
      } else {
        sound.play(() => {
          sound.release();
        });
      }
    });
  };

  const generateResult = async () => {
    const readedAudio = await RNFS.readFile(audioURI, 'base64');
    const audioBuffer = Buffer.from(readedAudio, 'base64');
    const signal = audioBuffer;

    const fftSize = Math.pow(2, Math.ceil(Math.log2(signal.length)));
    const buffer = Buffer.alloc(fftSize, 0);
    signal.copy(buffer);

    const fft = new FFT(fftSize, sampleRate);
    fft.forward(buffer);

    let spectrum = fft.spectrum;
    spectrum = spectrum.slice(1);
    let maxValue = 0;
    let maxIndex = 0;
    for (let i = 1; i < spectrum.length; i++) {
      if (spectrum[i] > maxValue && i != 0) {
        maxValue = spectrum[i];
        maxIndex = i;
      }
    }

    console.log(maxIndex);
    console.log(maxValue);

    const frequency = ((maxIndex * sampleRate) / fftSize) * 2;

    setMaxFrequency(frequency);
    await discard();
  };

  const discard = async () => {
    try {
      await RNFS.unlink(audioURI);
      setAudioURI(null);
    } catch (err) {
      console.error('Erro ao excluir o arquivo de áudio', err);
    }
  };

  const renderRecordButton = () => {
    if (!audioURI) {
      return (
        <Button disable={recording} onPress={startRecording}>
          Iniciar gravação
        </Button>
      );
    }
  };

  const renderGenerateButton = () => {
    if (audioURI) {
      return <Button onPress={generateResult}>Gerar resultado</Button>;
    } else {
      return null;
    }
  };

  const renderDiscardButton = () => {
    if (audioURI) {
      return (
        <Button secondary onPress={discard}>
          Descartar áudio
        </Button>
      );
    } else {
      return null;
    }
  };

  const renderPlayButton = () => {
    if (audioURI) {
      return <Button onPress={playAudio}>Tocar áudio</Button>;
    } else {
      return null;
    }
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>Medidor de Pico de Fluxo</Title>
      {!audioURI && renderRecordButton()}
      <Paragraph>Frequência máxima: {maxFrequency.toFixed(2)} Hz</Paragraph>
      {renderGenerateButton()}
      {renderPlayButton()}
      {renderDiscardButton()}
    </CommonScreen>
  );
};

export default PeakFlowScreen;
