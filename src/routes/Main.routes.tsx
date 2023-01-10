import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeRoutes from './Home.routes';
import PayerRoutes from './Payer.routes';
import PerfilRoutes from './Perfil.routes';
import CycleRoutes from './Cycle.routes';
import { ERoutes } from '.';
import SignInRoutes from './SignIn.routes';
import TransactionRoutes from './Transaction.routes';

const { Screen, Navigator } = createNativeStackNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={ERoutes.HomeRoutes}
        component={HomeRoutes}
        options={{
        }}
      />
      <Screen
        name={ERoutes.CycleRoutes}
        component={CycleRoutes}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PayerRoutes}
        component={PayerRoutes}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PerfilRoutes}
        component={PerfilRoutes}
        options={{
        }}
      />
      <Screen
        name={ERoutes.SignInRoutes}
        component={SignInRoutes}
        options={{
        }}
      />
      <Screen
        name={ERoutes.TransactionRoutes}
        component={TransactionRoutes}
        options={{
        }}
      />
    </Navigator>
  );
};

export default MainRoutes;
