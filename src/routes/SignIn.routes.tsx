import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PayerCreator from "../pages/PayerCreator";

const { Screen, Navigator } = createNativeStackNavigator();


const SignInRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Payer/Create"
        component={PayerCreator}
        options={{
        }}
      />
      <Screen
        name="Payer/View"
        component={PayerCreator}
        options={{
        }}
      />
    </Navigator>
  );
};

export default SignInRoutes