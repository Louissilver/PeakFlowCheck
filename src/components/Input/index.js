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
            value={values[item]}
            secureTextEntry={secureTextEntry}
            maxLength={50}
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
