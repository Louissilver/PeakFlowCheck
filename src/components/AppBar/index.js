import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../styles/globalStyles';
import styles from './styles';

const AppBar = ({navigation}) => {
  return (
    <View style={styles.navigation}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={40} color={theme.textContrastMain} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Teste de PFE');
        }}
        style={styles.centralButton}>
        <View>
          <Icon name="flask" size={40} color={theme.main} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Início')}
        style={styles.button}>
        <Icon name="home" size={40} color={theme.textContrastMain} />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
