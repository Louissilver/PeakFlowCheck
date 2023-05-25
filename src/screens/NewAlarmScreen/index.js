import React, {useEffect} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import NewAlarmImage from '../../assets/undraw_time_management_re_tk5w.svg';
import CommonScreen from '../../components/CommonScreen';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from '../../components/Input';
import {inputs} from './inputs';
import {theme} from '../../styles/globalStyles';
import PushNotification from 'react-native-push-notification';

const LoginSchema = Yup.object().shape({
  hour: Yup.string().required('Campo obrigatório'),
  minute: Yup.string().required('Campo obrigatório'),
  recurrence: Yup.string().required('Campo obrigatório'),
});

PushNotification.configure({
  requestPermissions: Platform.OS === 'ios',
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
    notification.finish(PushNotification.FetchResult.NoData);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
});

const NewAlarmScreen = ({navigation}) => {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'PeakFlowChannelId',
      channelName: 'PeakFlowChannel',
    });
  };

  function setRepeatingNotification(alarm) {
    try {
      const date = new Date();
      date.setHours(parseInt(alarm.hour));
      date.setMinutes(parseInt(alarm.minute));
      date.setSeconds(0);
      date.setMilliseconds(0);
      if (alarm.recurrence === 'once') {
        PushNotification.localNotificationSchedule({
          title: 'Peak Flow Assist',
          message: 'Está na hora de realizar seu teste de PFE!',
          date: date,
          channelId: 'PeakFlowChannelId',
          playSound: true,
          vibrate: true,
          vibration: 300,
          priority: 'high',
          visibility: 'public',
          importance: 'high',
          soundName: 'default',
        });
        Alert.alert(
          'Sucesso!',
          `Seu alarme foi definido para ${date.toLocaleString()}.`,
        );
      } else if (alarm.recurrence === 'daily') {
        PushNotification.localNotificationSchedule({
          title: 'Peak Flow Assist',
          message: 'Está na hora de realizar seu teste de PFE!',
          date: date,
          channelId: 'PeakFlowChannelId',
          repeatType: 'day',
          repeatTime: 1,
          playSound: true,
          vibrate: true,
          vibration: 300,
          priority: 'high',
          visibility: 'public',
          importance: 'high',
          soundName: 'default',
        });
        Alert.alert(
          'Sucesso!',
          `Seu alarme foi definido para ${date.toLocaleTimeString()} diariamente.`,
        );
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível definir seu alarme.');
      console.log(e);
    }
  }

  return (
    <CommonScreen navigation={navigation}>
      <Title>Novo alarme</Title>
      <NewAlarmImage width={352} height={250} />
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            hour: '',
            minute: '',
            recurrence: 'once',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            setRepeatingNotification(values);
            navigation.goBack();
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.form}>
                <View style={styles.clockContainer}>
                  <Input
                    item={inputs[0].item}
                    label={inputs[0].label}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    options={inputs[0].options}
                  />
                  <View style={{marginHorizontal: 10}} />
                  <Input
                    item={inputs[1].item}
                    label={inputs[1].label}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    options={inputs[1].options}
                  />
                </View>
                <Input
                  item={inputs[2].item}
                  label={inputs[2].label}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                  options={inputs[2].options}
                />
              </View>

              <Button onPress={handleSubmit}>Salvar</Button>
              <Button secondary onPress={() => navigation.goBack()}>
                Cancelar
              </Button>
            </>
          )}
        </Formik>
      </View>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: '100%',
  },
  clockContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  info: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
});

export default NewAlarmScreen;
