import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <Title>Informações da conta</Title>
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

export default AccountScreen;
