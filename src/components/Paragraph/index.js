import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Paragraph = ({children, textAlign = 'center'}) => {
  return <Text style={[styles.title, {textAlign: textAlign}]}>{children}</Text>;
};

export {Paragraph};
