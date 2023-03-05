import React, {useCallback, useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const MenuItem = ({routeName, icon, label, onPress, stack}) => {
  const navigationToScreen = useCallback(() => {
    if (onPress) {
      onPress();
    } else if (routeName) {
      stack.navigation.navigate(routeName);
    }
  }, [stack, routeName, onPress]);
  return (
    <TouchableOpacity
      style={styles.container}
      key={routeName}
      onPress={navigationToScreen}>
      <Icon style={styles.icon} name={icon} size={24} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
