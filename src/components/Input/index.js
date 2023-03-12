import React from 'react';
import {TextInput, RadioButton} from 'react-native-paper';
import {Text, View} from 'react-native';
import styles from './styles';
import {theme} from '../../styles/globalStyles';

const Input = ({
  label,
  values,
  errors,
  touched,
  item,
  handleBlur,
  handleChange,
  secureTextEntry,
  radioOptions,
}) => {
  const formattedValue = values['date']
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d+)$/, '$1');

  if (radioOptions) {
    return (
      <RadioButton.Group
        onValueChange={handleChange(item)}
        value={values[item]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.radio}>
          {radioOptions.map(option => (
            <RadioButton.Item
              key={option.label}
              label={option.label}
              value={option.value}
              color={theme.primary}
            />
          ))}
        </View>
        {errors[item] && touched[item] && (
          <Text style={styles.error}>{errors[item]}</Text>
        )}
      </RadioButton.Group>
    );
  } else {
    return (
      <>
        <TextInput
          label={label}
          mode="outlined"
          onChangeText={handleChange(item)}
          onBlur={handleBlur(item)}
          value={item !== 'date' ? values[item] : formattedValue}
          error={errors[item] && touched[item]}
          style={styles.input}
          outlineStyle={styles.outline}
          secureTextEntry={secureTextEntry}
          maxLength={item === 'date' ? 10 : 50}
          keyboardType={
            item === 'date' || item === 'height' ? 'numeric' : 'default'
          }
        />
        {errors[item] && touched[item] && (
          <Text style={styles.error}>{errors[item]}</Text>
        )}
      </>
    );
  }
};

export {Input};
