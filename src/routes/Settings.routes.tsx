import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppSettings from "../pages/AppSettings";

const { Screen, Navigator } = createNativeStackNavigator();


const SettingsRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="AppSettings"
        component={AppSettings}
        options={{
        }}
      />
    </Navigator>
  );
};

export default SettingsRoutes