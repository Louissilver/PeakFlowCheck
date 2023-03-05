import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {theme} from '../../styles/globalStyles';
import styles from './styles';

const Button = ({onPress, children, secondary = false}) => {
  return (
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
  );
};

export {Button};
