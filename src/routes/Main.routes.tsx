import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home'
import Transaction from '../pages/Home'
import Payers from '../pages/Home'
import Perfil from '../pages/Home'

const { Screen, Navigator } = createBottomTabNavigator()

const MainRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Payers'
        component={Payers}
      />
      <Screen
        name='Transaction'
        component={Transaction}
      />
      <Screen
        name='Perfil'
        component={Perfil}
      />
    </Navigator>
  );
};

export default MainRoutes