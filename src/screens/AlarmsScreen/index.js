import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const AlarmsScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <Title>Alarmes</Title>
      <Button>Novo alarme</Button>
    </CommonScreen>
  );
};

export default AlarmsScreen;
