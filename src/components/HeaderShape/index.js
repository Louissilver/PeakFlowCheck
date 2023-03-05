import React from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';

const HeaderShape = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.circle1} />
      <View style={styles.circle2} />
    </View>
  );
};

export default HeaderShape;
