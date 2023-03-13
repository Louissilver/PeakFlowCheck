import React, {useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {theme} from '../../styles/globalStyles';

const AlarmsScreen = ({navigation}) => {
  const [alarms, setAlarms] = useState([
    {id: 1, time: '07:30', label: 'Diário', isActive: true},
    {id: 2, time: '12:00', label: 'Uma vez', isActive: false},
    {id: 3, time: '16:30', label: 'Diário', isActive: true},
    {id: 4, time: '21:00', label: 'Diário', isActive: true},
  ]);
  const toggleAlarm = id => {
    setAlarms(
      alarms.map(alarm =>
        alarm.id === id ? {...alarm, isActive: !alarm.isActive} : alarm,
      ),
    );
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>Gerencia aqui seus alarmes para realização do teste de PFE</Title>
      <View style={styles.container}>
        {alarms.map(alarm => (
          <View style={styles.alarmContainer} key={alarm.id}>
            <TouchableOpacity
              style={styles.alarmItem}
              onPress={() => toggleAlarm(alarm.id)}>
              <Text
                style={[
                  styles.alarmTime,
                  {color: alarm.isActive ? theme.black : theme.grey},
                ]}>
                {alarm.time}
              </Text>
              <View style={styles.alarmDetails}>
                <Switch
                  value={alarm.isActive}
                  onValueChange={() => toggleAlarm(alarm.id)}
                  thumbColor={theme.white}
                  trackColor={theme.main}
                  style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                styles.alarmLabel,
                {color: alarm.isActive ? theme.black : theme.grey},
              ]}>
              {alarm.label}
            </Text>
          </View>
        ))}
      </View>
      <Button onPress={() => navigation.navigate('Novo alarme')}>
        Novo alarme
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
