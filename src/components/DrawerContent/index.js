import React from 'react';
import {View} from 'react-native';
import MenuItem from '../MenuItem';
import styles from './styles';
import Logo from '../../assets/logo.svg';

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
      label: 'Alarmes',
      route: 'Alarmes',
      icon: 'alarm',
    },
    {
      label: 'Mapa da saúde',
      route: 'Mapa da saúde',
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
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
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
