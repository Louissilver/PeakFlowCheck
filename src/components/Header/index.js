import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Header = ({title, isHome = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.bodyHeader}>
        <Text style={styles.headerName}>Olá, Luís!</Text>
      </View>
    </View>
  );
};

export default Header;
