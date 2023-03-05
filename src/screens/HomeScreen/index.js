import React from 'react';
import {Title} from '../../components/Title';
import HomeEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import {useNavigation} from '@react-navigation/native';
import CommonScreen from '../../components/CommonScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <Title>Início</Title>
      <HomeEmptyChartImage width={352} height={250} />
    </CommonScreen>
  );
};

export default HomeScreen;
