import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {theme} from '../../styles/globalStyles';
import styles from './styles';

const Button = ({onPress, children, secondary = false, disable = false}) => {
  return !disable ? (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: secondary ? theme.secondary : theme.main},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.textButton,
          {
            color: secondary
              ? theme.textContrastSecondary
              : theme.textContrastMain,
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  ) : (
    <View style={[styles.button, {backgroundColor: theme.grey}]}>
      <Text
        style={[
          styles.textButton,
          {
            color: secondary
              ? theme.textContrastSecondary
              : theme.textContrastMain,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export {Button};
