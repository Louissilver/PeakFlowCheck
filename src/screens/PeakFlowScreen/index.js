import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const PeakFlowScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Medidor de Pico de Fluxo</Title>
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Gerar resultado</Button>
    </CommonScreen>
  );
};

export default PeakFlowScreen;
