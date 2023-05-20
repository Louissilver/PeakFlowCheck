import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ListItem = ({
  resultDateTime,
  resultClass,
  resultPercent,
  measuredPeakflow,
}) => {
  backgroundColorLine = '';
  if (resultClass == 'Sinal amarelo') {
    backgroundColorLine = '#FFD700';
  } else if (resultClass == 'Sinal verde') {
    backgroundColorLine = '#00FF7F';
  } else {
    backgroundColorLine = '#FD6B6B';
  }
  return (
    <View
      style={[{...styles.itemContainer, backgroundColor: backgroundColorLine}]}>
      <View style={styles.resultContainer}>
        <Text style={styles.date}>{resultDateTime}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultClass}>{resultClass}</Text>
        <Text style={styles.percent}>{resultPercent}</Text>
        <Text style={styles.peakflow}>{measuredPeakflow}</Text>
      </View>
    </View>
  );
};

const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.resultClass, {fontWeight: 'bold'}]}>
        Classificação
      </Text>
      <Text style={[styles.percent, {fontWeight: 'bold'}]}>Resultado (%)</Text>
      <Text style={[styles.peakflow, {fontWeight: 'bold'}]}>PFE (L/min)</Text>
    </View>
  );
};

const ListResult = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <ListItem
          resultDateTime={item.resultDateTime}
          resultClass={item.resultClass}
          resultPercent={item.resultPercent}
          measuredPeakflow={item.measuredPeakflow}
          key={index}
        />
      ))}
    </View>
  );
};

export {ListResult, ListHeader};
