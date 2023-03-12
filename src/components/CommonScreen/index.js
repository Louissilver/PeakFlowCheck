import {useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AppBar from '../AppBar';
import Header from '../Header';
import HeaderBar from '../HeaderBar';
import HeaderShape from '../HeaderShape';
import styles from './styles';

const CommonScreen = ({
  navigation,
  isHome = false,
  isLoggedFeature = true,
  children,
}) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.background}>
      <HeaderBar
        title={route.name}
        isHome={isHome}
        isLoggedFeature={isLoggedFeature}
      />
      <ScrollView style={styles.scroll}>
        {isLoggedFeature ? <Header /> : <HeaderShape />}
        <View style={styles.content}>{children}</View>
      </ScrollView>
      {isLoggedFeature && <AppBar navigation={navigation} />}
    </SafeAreaView>
  );
};

export default CommonScreen;
