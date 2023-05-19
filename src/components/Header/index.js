import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {getUserInformation} from '../../services/userInformation';
import {auth} from '../../config/firebase';

const Header = ({title, isHome = false}) => {
  const [userData, setUserData] = useState({});
  const navigation = useNavigation();

  async function getUserData(uid) {
    const userInfo = await getUserInformation(uid);
    setUserData(userInfo);
  }

  useEffect(() => {
    const userState = auth.onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid);
      }
    });

    return () => userState();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.bodyHeader}>
        <Text style={styles.headerName}>
          Olá, {userData.completeName?.split(' ')[0]}!
        </Text>
      </View>
    </View>
  );
};

export default Header;
