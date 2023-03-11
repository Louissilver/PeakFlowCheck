import React from 'react';
import {TextInput} from 'react-native-paper';
import {Text} from 'react-native';
import styles from './styles';

const DateInput = ({label, value, error, touched, onChangeText, onBlur}) => {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d+)$/, '$1');

  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={formattedValue}
        error={error && touched}
        style={styles.input}
        outlineStyle={{borderRadius: 50, borderColor: 'transparent'}}
        maxLength={10}
        keyboardType="numeric"
      />
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default DateInput;
