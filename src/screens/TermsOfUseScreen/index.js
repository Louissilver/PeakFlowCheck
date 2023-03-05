import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import TermsOfUseImage from '../../assets/undraw_terms_re_6ak4.svg';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const TermsOfUseScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <TermsOfUseImage width={352} height={250} />
      <Title>Termos de uso</Title>
      <Paragraph>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <Button>Iniciar</Button>
    </CommonScreen>
  );
};

export default TermsOfUseScreen;
