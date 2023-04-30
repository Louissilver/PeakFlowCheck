import React from 'react';
import {Title} from '../../components/Title';
import HomeEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import {useNavigation} from '@react-navigation/native';
import CommonScreen from '../../components/CommonScreen';
import {Paragraph} from '../../components/Paragraph';

const HomeScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation} isHome={true}>
      <Title>Início</Title>
      <Paragraph>
        Lembre-se que só é possível realizar o teste de PFE se você possuir o
        apito de vórtice! Sem ele você não será capaz de medir o Pico de Fluxo
        Expiratório
      </Paragraph>
      <HomeEmptyChartImage width={352} height={250} />
    </CommonScreen>
  );
};

export default HomeScreen;
