import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';

const ResultsExportScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Exportar resultados</Title>
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Exportar</Button>
      <Button secondary>Cancelar</Button>
    </CommonScreen>
  );
};

export default ResultsExportScreen;
