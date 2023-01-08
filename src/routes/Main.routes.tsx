import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlanningRoutes from './Planning.routes';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Payers from '../pages/Payers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonNew from '../components/ButtonNew';
import MenuNew from '../components/MenuNew';

const { Screen, Navigator, Group } = createBottomTabNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Navigator

      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: "white",
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ size, color }) => (
            <Icon name='home' size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Planning"
        component={PlanningRoutes}
        options={{
          title: "Planejamento",
          tabBarIcon: ({ size, color }) => (
            <Icon name='calendar-multiselect' size={size} color={color} />
          )
        }}
      />
      <Screen
        name="MenuNew"
        component={MenuNew}
        options={{
          tabBarLabel: '',
          presentation: 'tranparentModal',
          tabBarIcon: ({ size, focused }) => (
            <ButtonNew size={size} focused={focused} />
          )
        }}
      />
      <Screen
        name="Payers"
        component={Payers}
        options={{
          title: "Entidades",
          tabBarIcon: ({ size, color }) => (
            <Icon name='book' size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <Icon name='account' size={size} color={color} />
          )
        }}
      />
    </Navigator>
  );
};

export default MainRoutes;
