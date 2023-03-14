import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ListItem = ({data, classificacao, pfe}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemData}>{data}</Text>
      <Text style={styles.itemClassificacao}>{classificacao}</Text>
      <Text style={styles.itemPFE}>{pfe}</Text>
    </View>
  );
};

const ListResult = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemData, {fontWeight: 'bold'}]}>Data/Hora</Text>
        <Text style={[styles.itemClassificacao, {fontWeight: 'bold'}]}>
          Classificação
        </Text>
        <Text style={[styles.itemPFE, {fontWeight: 'bold'}]}>PFE (L/min)</Text>
      </View>
      {data.map((item, index) => (
        <ListItem
          key={index}
          data={item.data}
          classificacao={item.classificacao}
          pfe={item.pfe}
        />
      ))}
    </View>
  );
};

export {ListResult};
