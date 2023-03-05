import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import NewAlarmImage from '../../assets/undraw_time_management_re_tk5w.svg';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';

const NewAlarmScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <Title>Novo alarme</Title>
      <NewAlarmImage width={352} height={250} />
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Salvar</Button>
      <Button secondary>Cancelar</Button>
    </CommonScreen>
  );
};

export default NewAlarmScreen;
