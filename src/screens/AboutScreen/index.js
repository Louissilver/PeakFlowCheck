import React from 'react';
import {Title} from '../../components/Title';
import {Paragraph} from '../../components/Paragraph';
import AppTargetImage from '../../assets/undraw_target_re_fi8j.svg';
import AppPermissionsImage from '../../assets/undraw_subscriptions_re_k7jj.svg';
import AppFeaturesImage from '../../assets/undraw_diet_ghvw.svg';
import AppHowToTestImage from '../../assets/undraw_scientist_3ow3.svg';
import AppCallADoctorImage from '../../assets/undraw_doctor_kw-5-l.svg';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation}>
      <Title>Sobre o aplicativo</Title>
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <AppTargetImage width={352} height={250} />
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <AppPermissionsImage width={352} height={250} />
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <AppFeaturesImage width={352} height={250} />
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <AppHowToTestImage width={352} height={250} />
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
      <AppCallADoctorImage width={352} height={250} />
      <Paragraph textAlign={'justify'}>
        Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
        dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång är
        elgasbil det exodynat.{' '}
      </Paragraph>
    </CommonScreen>
  );
};

export default AboutScreen;
