import React from 'react';
import {View} from 'react-native';
import MenuItem from '../MenuItem';
import styles from './styles';
import Logo from '../../assets/logo.svg';
import {auth} from '../../config/firebase';

const DrawerContent = props => {
  const menuItems = [
    {
      label: 'Início',
      route: 'Início',
      icon: 'home',
    },
    {
      label: 'Dados da conta',
      route: 'Dados da conta',
      icon: 'account-circle',
    },
    {
      label: 'Lembretes',
      route: 'Lembretes',
      icon: 'alarm',
    },
    {
      label: 'Instituições de saúde',
      route: 'Instituições de saúde',
      icon: 'map-marker',
    },
    {
      label: 'Teste de PFE',
      route: 'Teste de PFE',
      icon: 'flask',
    },
    {
      label: 'Lista de resultados',
      route: 'Resultados',
      icon: 'format-list-bulleted',
    },
    {
      label: 'Sobre o aplicativo',
      route: 'Sobre o aplicativo',
      icon: 'information',
    },
  ];

  const handleLogout = () => {
    auth.signOut();
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bodyHeader}>
          <Logo width={190} height={100} />
        </View>
        {menuItems.map(item => (
          <MenuItem
            stack={props}
            key={item.route}
            icon={item.icon}
            routeName={item.route}
            label={item.label}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <MenuItem
          stack={props}
          onPress={() => handleLogout()}
          icon="power"
          label="Sair"
        />
      </View>
    </View>
  );
};

export default DrawerContent;
