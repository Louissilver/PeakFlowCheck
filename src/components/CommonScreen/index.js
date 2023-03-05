import {useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AppBar from '../AppBar';
import Header from '../Header';
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
      <ScrollView style={styles.scroll}>
        {isLoggedFeature ? (
          <Header title={route.name} isHome={isHome} />
        ) : (
          <HeaderShape />
        )}
        <View style={styles.content}>{children}</View>
      </ScrollView>
      {isLoggedFeature && <AppBar navigation={navigation} />}
    </SafeAreaView>
  );
};

export default CommonScreen;
