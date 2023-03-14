import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';

const InstitutionsList = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.itemName}>
            <Text style={styles.itemTitle}>Nome da instituição:</Text>{' '}
            {item.nome}
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${item.telefone}`)}>
            <Text style={styles.itemPhone}>
              <Text style={styles.itemTitle}>Telefone:</Text> {item.telefone}
            </Text>
          </TouchableOpacity>
          <Text style={styles.itemAddress}>
            <Text style={styles.itemTitle}>Endereço:</Text> {item.endereco}
          </Text>
          <Text style={styles.itemTime}>
            <Text style={styles.itemTitle}>Horário de atendimento: </Text>
            {item.horario}
          </Text>
        </View>
      ))}
    </View>
  );
};

export {InstitutionsList};
