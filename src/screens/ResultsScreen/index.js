import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import ResultsEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';

const ResultsScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Resultados</Title>
      <ResultsEmptyChartImage width={352} height={250} />
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Ver mais</Button>
      <Button
        secondary
        onPress={() => navigation.navigate('Exportar resultados')}>
        Exportar lista
      </Button>
    </CommonScreen>
  );
};

export default ResultsScreen;
