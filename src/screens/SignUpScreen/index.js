import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import SplashscreenImage from '../../assets/undraw_medicine_b-1-ol.svg';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <SplashscreenImage width={352} height={250} />
      <Title>Cadastro</Title>
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

export default SignUpScreen;
