import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PayerCreator from "../pages/PayerCreator";
import PayerViewer from "../pages/PayerViewer";
import PayerEditor from "../pages/PayerEditor";
import { ERoutes } from ".";

const { Screen, Navigator } = createNativeStackNavigator();


const PayerRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name={ERoutes.PayerCreator}
        component={PayerCreator}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PayerEditor}
        component={PayerEditor}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PayerViewer}
        component={PayerViewer}
        options={{
        }}
      />
    </Navigator>
  );
};

export default PayerRoutes