import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const Input = ({
  label,
  values,
  errors,
  touched,
  item,
  handleBlur,
  handleChange,
  secureTextEntry,
  options,
}) => {
  let formatterValue = '';

  if (item === 'dateOfBirth') {
    formattedValue = values['dateOfBirth']
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d+)$/, '$1');
  }

  if (options) {
    return (
      <>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View
            style={[
              styles.picker,
              {
                borderColor:
                  errors[item] && touched[item] ? 'red' : 'transparent',
                borderWidth: 1,
              },
            ]}>
            <Picker
              mode="dropdown"
              selectedValue={values[item]}
              onValueChange={handleChange(item)}
              onBlur={handleBlur(item)}>
              {options.map(({label, value}) => (
                <Picker.Item key={value} label={label} value={value} />
              ))}
            </Picker>
          </View>
          {errors[item] && touched[item] && (
            <Text style={styles.error}>{errors[item]}</Text>
          )}
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderColor:
                  errors[item] && touched[item] ? 'red' : 'transparent',
                borderWidth: 1,
              },
            ]}
            onChangeText={handleChange(item)}
            onBlur={handleBlur(item)}
            value={item !== 'dateOfBirth' ? values[item] : formattedValue}
            secureTextEntry={secureTextEntry}
            maxLength={item === 'dateOfBirth' ? 10 : 50}
            keyboardType={
              item === 'dateOfBirth' || item === 'height'
                ? 'numeric'
                : 'default'
            }
          />
          {errors[item] && touched[item] && (
            <Text style={styles.error}>{errors[item]}</Text>
          )}
        </View>
      </>
    );
  }
};

export {Input};
