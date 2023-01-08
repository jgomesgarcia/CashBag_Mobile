import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Planning from '../pages/Planning';
import Perfil from "../pages/Perfil";

const { Screen, Navigator } = createNativeStackNavigator();


const PlanningRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Planning"
        component={Planning}
        options={{
        }}
      />
      <Screen
        name="Perfil2"
        component={Perfil}
        options={{
        }}
      />
    </Navigator>
  );
};

export default PlanningRoutes