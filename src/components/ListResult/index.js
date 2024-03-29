import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ListItem = ({
  resultDateTime,
  bronchodilator,
  resultClass,
  resultPercent,
  measuredPeakflow,
}) => {
  let classColor = '';
  if (resultClass === 'Sinal amarelo') {
    classColor = '#FFD700';
  } else if (resultClass === 'Sinal verde') {
    classColor = '#00FF7F';
  } else {
    classColor = '#FD6B6B';
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.date}>{resultDateTime}</Text>
        <Text style={styles.bronchodilator}>
          {bronchodilator ? 'Broncodilatador' : ''}
        </Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={[{...styles.resultClass}, {backgroundColor: classColor}]}>
          {resultClass}
        </Text>
        <Text style={styles.percent}>{resultPercent}%</Text>
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
      <Text style={[styles.percent, {fontWeight: 'bold'}]}>Resultado</Text>
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
          bronchodilator={item.useBronchodilator}
          key={index}
        />
      ))}
    </View>
  );
};

export {ListResult, ListHeader};
