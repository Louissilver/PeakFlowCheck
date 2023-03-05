import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HeaderShape from '../../components/HeaderShape';
import {AppBar} from '../../components/AppBar';
import styles from './styles';

const CommonScreen = ({navigation, children}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <HeaderShape />
        <View style={styles.content}>{children}</View>
      </ScrollView>
      <AppBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default CommonScreen;
