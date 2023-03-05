import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Paragraph = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export {Paragraph};
