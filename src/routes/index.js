import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import AccountScreen from '../screens/AccountScreen';
import TermsOfUseScreen from '../screens/TermsOfUseScreen';
import ResultExportScreen from '../screens/ResultsExportScreen';
import ResultsScreen from '../screens/ResultsScreen';
import PeakFlowScreen from '../screens/PeakFlowScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';
import NewAlarmScreen from '../screens/NewAlarmScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import HealthMapScreen from '../screens/HealthMapScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AlarmsScreen from '../screens/AlarmsScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{width: '95%'}}>
      {/* <Drawer.Screen
        name="Início"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Sobre o aplicativo"
        component={AboutScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Dados da conta"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Alarmes"
        component={AlarmsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
      name="Mapa da saúde"
      component={HealthMapScreen}
      options={{headerShown: false}}
    /> */}
      <Drawer.Screen
        name="Cadastro"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Esqueci minha senha"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Novo alarme"
        component={NewAlarmScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Redefinição de senha"
        component={PasswordResetScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Teste de PFE"
        component={PeakFlowScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Lista de resultados"
        component={ResultsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Exportar resultados"
        component={ResultExportScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Termos de uso"
        component={TermsOfUseScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
