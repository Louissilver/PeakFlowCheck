import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {theme} from '../../styles/globalStyles';

const HeaderBar = ({title, isHome = false, isLoggedFeature = false}) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && !isHome && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={35} color={theme.secondary} />
          </TouchableOpacity>
        )}
        {(!navigation.canGoBack() || isHome) && <View style={{width: 35}} />}
        <Text style={styles.title}>{title}</Text>
        {isLoggedFeature && (
          <TouchableOpacity onPress={() => handleLogout()}>
            <Icon name="logout" size={35} color={theme.secondary} />
          </TouchableOpacity>
        )}
        {!isLoggedFeature && <View style={{width: 35}} />}
      </View>
    </View>
  );
};

export default HeaderBar;
