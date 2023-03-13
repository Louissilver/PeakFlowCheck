import React from 'react';
import {Title} from '../../components/Title';
import {Paragraph} from '../../components/Paragraph';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const HealthMapScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Mapa da saúde</Title>
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
    </CommonScreen>
  );
};

export default HealthMapScreen;
