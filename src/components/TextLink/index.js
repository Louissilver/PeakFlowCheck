import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

const TextLink = ({onPress, text, link = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {TextLink};
