import React, {useState, useEffect} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import AudioRecord from 'react-native-audio-record';
import {PermissionsAndroid} from 'react-native';
import {Buffer} from 'buffer';
import {FFT} from 'dsp.js';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import {ResultCard} from '../../components/ResultCard';
import {Paragraph} from '../../components/Paragraph';
import {calculatePEF} from '../../utils';
import {auth} from '../../config/firebase';
import {getUserInformation} from '../../services/userInformation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveTestResult } from '../../services/testResults';

const PeakFlowScreen = ({navigation}) => {
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [audioURI, setAudioURI] = useState(null);
  const [measuredPeakFlow, setMeasuredPeakFlow] = useState(null);
  const [result, setResult] = useState(null);
  const [userData, setUserData] = useState({
    dateOfBirth: '',
    height: '',
    gender: '',
  });

  const sampleRate = 44100;
  const recordingDuration = 3000;

  async function getUserData(uid) {
    const userInfo = await getUserInformation(uid);
    setUserData(userInfo);
  }

  async function execSaveTestResult(finalResult) {
    const result = await saveTestResult(finalResult);
    if (result == 'error') {
      return;
    }
  }

  useEffect(() => {
    const userState = auth.onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid);
      }
    });

    return () => userState();
  }, [result]);

  useEffect(() => {
    let recordingTimer;
    if (recording) {
      recordingTimer = setTimeout(() => {
        stopRecording();
      }, recordingDuration);
    }
    return () => {
      clearTimeout(recordingTimer);
    };
  }, [recording]);

  useEffect(() => {
    const resetResult = navigation.addListener('focus', () => {
      setResult(null);
    });
    return resetResult;
  }, [navigation]);

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
          wavFile: 'audio.wav',
          audioSource: 6,
          bufferSize: 8192,
        });
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
        setPlaying(true);
        sound.play(() => {
          sound.release();
          setPlaying(false);
        });
      }
    });
  };

  const generateResult = async () => {
    setGenerating(true);
    // Faz a leitura do arquivo de áudio e transforma em um buffer
    const readedAudio = await RNFS.readFile(audioURI, 'base64');
    const audioBuffer = Buffer.from(readedAudio, 'base64');
    const signal = audioBuffer;

    // Calcula o tamanho da FFT para que seja igual ao buffer e transforma os dois em um múltiplo de 2
    const fftSize = Math.pow(2, Math.ceil(Math.log2(signal.length)));
    const buffer = Buffer.alloc(fftSize, 0);
    signal.copy(buffer);

    // Gera a FFT
    const fft = new FFT(fftSize, sampleRate);
    fft.forward(buffer);

    // Busca o índice do maior espectro de frequência
    let spectrum = fft.spectrum;
    let maxValue = 0;
    let maxIndex = 0;

    spectrum = spectrum.slice(1);

    for (let i = 1; i < spectrum.length; i++) {
      if (spectrum[i] > maxValue && i != 0) {
        maxValue = spectrum[i];
        maxIndex = i;
      }
    }

    // Calcula a frequencia máxima com base no índice do maior espectro
    const frequency = ((maxIndex * sampleRate) / fftSize) * 2;

    // Calcula a frequência utilizando uma fórmula de reta
    let peakFlow = 0;
    if (frequency > 5) {
      peakFlow = 0.095 * frequency + 110;
    }
    setMeasuredPeakFlow(peakFlow.toFixed(2));

    // Calcula o resultado do PFE obtido X PFE esperado
    const calculatedResult = calculatePEF(userData, peakFlow);
    setResult(calculatedResult);
    await execSaveTestResult(calculatedResult);
    
    // Descarta o áudio gravado
    await discard();
    setGenerating(false);
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
    if (!audioURI && !result) {
      return (
        <>
          <Paragraph>
            Após pressionar o botão de gravação de áudio, você terá 3 segundos
            para soprar o apito. Certifique-se de estar cerca de 10 cm de
            distância do microfone do seu celular.
          </Paragraph>
          <Button disable={recording} onPress={startRecording}>
            Iniciar gravação
          </Button>
        </>
      );
    }
  };

  const renderPreResultScreen = () => {
    if (audioURI && !generating) {
      return (
        <>
          <Paragraph>
            Certifique-se de que a gravação captou o som gerado pelo apito
            pressionando o botão "Reproduzir áudio". Se estiver ok gere o
            resultado. Caso o áudio tenha algum problema, descarte o áudio e
            refaça o processo.
          </Paragraph>
          <Button disable={playing} onPress={playAudio}>
            Reproduzir áudio
          </Button>
          <Button disable={playing} onPress={generateResult}>
            Gerar resultado
          </Button>
          <Button secondary disable={playing} onPress={discard}>
            Descartar
          </Button>
        </>
      );
    } else {
      return null;
    }
  };

  const renderResults = () => {
    if (result) {
      const {resultPercent, resultClass, expectedPeakflow} = result;
      return (
        <>
          <ResultCard
            resultPercent={resultPercent}
            resultClass={resultClass}
            calculatedPeakFlow={measuredPeakFlow}
            expectedPeakFlow={expectedPeakflow}
          />
          <Button
            disable={recording}
            onPress={() => {
              setMeasuredPeakFlow(null);
              setResult(null);
            }}>
            Refazer teste
          </Button>
        </>
      );
    }
  };

  const renderGeneratingResults = () => {
    if (generating) {
      return (
        <>
          <Paragraph>Gerando resultados...</Paragraph>
        </>
      );
    }
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>Medidor de Pico de Fluxo</Title>
      {renderRecordButton()}
      {renderPreResultScreen()}
      {renderGeneratingResults()}
      {renderResults()}
    </CommonScreen>
  );
};

export default PeakFlowScreen;
