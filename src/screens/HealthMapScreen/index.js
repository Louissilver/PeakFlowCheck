import React from 'react';
import {Title} from '../../components/Title';
import CommonScreen from '../../components/CommonScreen';
import {StyleSheet, View, Linking} from 'react-native';
import {theme} from '../../styles/globalStyles';
import {Button} from '../../components/Button';

const HealthMapScreen = ({navigation}) => {
  const handleOpenGoogleMaps = place => {
    const url = `https://www.google.com.br/maps/search/${place}`;

    Linking.openURL(url).catch(error =>
      console.log('Erro ao abrir o Google Maps:', error),
    );
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>Encontre instituições de saúde próximas e abertas agora</Title>
      <View style={styles.container}>
        <Button onPress={() => handleOpenGoogleMaps('hospital+aberto+agora')}>
          Hospitais
        </Button>

        <Button
          onPress={() =>
            handleOpenGoogleMaps('consultório+médico+aberto+agora')
          }>
          Consultório médico
        </Button>

        <Button onPress={() => handleOpenGoogleMaps('UPA+aberto+agora')}>
          UPAs
        </Button>
      </View>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: '100%',
  },
  mapa: {
    width: '100%',
    height: 300,
    borderRadius: 25,
  },
});

export default HealthMapScreen;
