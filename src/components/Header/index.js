import React from 'react';
import {StatusBar, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {theme} from '../../styles/globalStyles';
import Logo from '../../assets/logo.svg';

const Header = ({title, isHome = false}) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.bodyHeader}>
        <Logo width={180} height={100} style={styles.logo} />
      </View>
    </View>
  );
};

export default Header;
