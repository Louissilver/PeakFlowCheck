import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ResultCard = ({
  resultPercent,
  resultClass,
  calculatedPeakFlow,
  expectedPeakFlow,
}) => {
  backgroundColorCard = '';
  if (resultClass == 'Sinal amarelo') {
    backgroundColorCard = '#FFD700';
  } else if (resultClass == 'Sinal verde') {
    backgroundColorCard = '#00FF7F';
  } else {
    backgroundColorCard = '#FD6B6B';
  }

  return (
    <>
      <View
        style={[{...styles.container, backgroundColor: backgroundColorCard}]}>
        <Text style={styles.result}>{resultClass}</Text>
        <Text style={styles.result}>{resultPercent} %</Text>
      </View>
      <View style={styles.values}>
        <Text style={styles.pef}>Medido: {calculatedPeakFlow} L/min</Text>
        <Text style={styles.pef}>Esperado: {expectedPeakFlow} L/min</Text>
      </View>
    </>
  );
};

export {ResultCard};
