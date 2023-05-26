import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {theme} from '../../styles/globalStyles';
import {Icon} from 'react-native-elements';
import PushNotification from 'react-native-push-notification';

const AlarmsScreen = ({navigation}) => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    loadAlarms();
  }, []);

  useEffect(() => {
    const resetResult = navigation.addListener('focus', () => {
      loadAlarms();
    });
    return resetResult;
  }, [navigation]);

  const loadAlarms = () => {
    PushNotification.getScheduledLocalNotifications(notifications => {
      setAlarms(notifications);
    });
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>
        Gerencia aqui seus lembretes para realização do teste de PFE
      </Title>
      <View style={styles.container}>
        {alarms.map(alarm => (
          <View style={styles.alarmContainer} key={alarm.id}>
            <View style={styles.alarmItem}>
              <Text style={styles.alarmTime}>
                {new Date(alarm.date).toLocaleTimeString()}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  PushNotification.cancelLocalNotification(alarm.id);
                  loadAlarms();
                }}
                style={[
                  styles.alarmTime,
                  {flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text style={{color: '#ff5555'}}>Remover</Text>
                <Icon name="delete" size={35} color={'#ff5555'} />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.alarmLabel,
                {color: alarm.isActive ? theme.black : theme.grey},
              ]}>
              {alarm.repeatInterval ? 'Diário' : 'Uma vez'}
            </Text>
          </View>
        ))}
      </View>
      <Button onPress={() => navigation.navigate('Novo lembrete')}>
        Novo lembrete
      </Button>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.background,
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  alarmContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
    paddingBottom: 5,
  },
  alarmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  alarmTime: {
    fontSize: 28,
  },
  alarmDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alarmLabel: {
    fontSize: 12,
    marginRight: 10,
  },
});

export default AlarmsScreen;
