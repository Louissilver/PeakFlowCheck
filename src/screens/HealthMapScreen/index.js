import React from 'react';
import {Title} from '../../components/Title';
import CommonScreen from '../../components/CommonScreen';
import {Image, StyleSheet, View} from 'react-native';
import mapa from '../../assets/mapa.png';
import {theme} from '../../styles/globalStyles';
import {InstitutionsList} from '../../components/InstitutionsList';

const HealthMapScreen = ({navigation}) => {
  const data = [
    {
      nome: 'Hospital Getúlio Vargas',
      telefone: '05134518200',
      endereco:
        'R. Pinheiro Machado, 331 - Dihel, Sapucaia do Sul - RS, 93210-180',
      horario: '08:30 às 18:00',
    },
    {
      nome: 'Clínica Barão de Cotegipe',
      telefone: '05134519866',
      endereco: 'R. Andorinhas, 551 - Silva, Sapucaia do Sul - RS, 93214-300',
      horario: '08:30 às 18:00',
    },
    {
      nome: 'Unidade de Pronto Atendimento',
      telefone: '05134513255',
      endereco:
        'R. Carvalho Facão, 222 - Centro, Sapucaia do Sul - RS, 93310-200',
      horario: '08:30 às 18:00',
    },
  ];

  return (
    <CommonScreen navigation={navigation}>
      <Title>Aqui estão instituições de saúde abertas agora</Title>
      <View style={styles.container}>
        <Image source={mapa} style={styles.mapa} />
        <Title>Mais informações</Title>
        <InstitutionsList data={data} />
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
