import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import MenuNew from '../components/Modals/MenuNew';
import PayerList from '../pages/PayerList';
import PerfilViewer from '../pages/PerfilViewer';
import CycleDashboard from '../pages/CycleDashboard';

const { Screen, Navigator } = createBottomTabNavigator();

const HomeRoutes: React.FC<any> = () => {
  return (
    <Navigator

      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: 'white',
      }}
    >
      <Screen
        name="HomePage"
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Cycles"
        component={CycleDashboard}
        options={{
          title: 'Ciclos',
          tabBarIcon: ({ size, color }) => (
            <Icon name="calendar-multiselect" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="MenuNew"
        component={() => <></>}
        options={{
          tabBarLabel: '',
          tabBarButton: () => (
            <MenuNew />
          ),
        }}
      />
      <Screen
        name="Payers"
        component={PayerList}
        options={{
          title: 'Favorecidos',
          tabBarIcon: ({ size, color }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={PerfilViewer}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeRoutes;
