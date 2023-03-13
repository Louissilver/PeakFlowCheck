import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import PasswordResetImage from '../../assets/undraw_my_password_re_ydq7.svg';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';

const PasswordResetScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <Title>Redefinição de senha</Title>
      <PasswordResetImage width={352} height={250} />
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Redefinir senha</Button>
    </CommonScreen>
  );
};

export default PasswordResetScreen;
