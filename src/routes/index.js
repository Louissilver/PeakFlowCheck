import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cadastro"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nova senha"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Redefinição de senha"
        component={PasswordResetScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Termos de uso"
        component={TermsOfUseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Logado"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ResultsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista de resultados"
        component={ResultsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Exportar resultados"
        component={ResultExportScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AlarmStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Meus lembretes"
        component={AlarmsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Novo lembrete"
        component={NewAlarmScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{width: '95%'}}>
      <Drawer.Screen
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
        name="Teste de PFE"
        component={PeakFlowScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Resultados"
        component={ResultsStackNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Lembretes"
        component={AlarmStackNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Instituições de saúde"
        component={HealthMapScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export {StackNavigation, DrawerNavigation};
