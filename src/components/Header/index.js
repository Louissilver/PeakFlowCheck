import React from 'react';
import {StatusBar, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {theme} from '../../styles/globalStyles';

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
      <View style={styles.headerContainer}>
        {!isHome && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={35} color={theme.secondary} />
          </TouchableOpacity>
        )}
        {isHome && <View style={{width: 35}} />}
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="logout" size={35} color={theme.secondary} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyHeader}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Luís Silveira</Text>
      </View>
    </View>
  );
};

export default Header;
