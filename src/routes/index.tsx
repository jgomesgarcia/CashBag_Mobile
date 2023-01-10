import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainRoutes from './Main.routes';

export enum ERoutes{
  AppSettings = 'AppSettings',
  CycleRoutes = 'Cycle',
  HomeRoutes = 'Home',
  PayerRoutes = 'Payer',
  PerfilRoutes = 'Perfil',
  SignInRoutes = 'SignIn',
  SignUp = 'SignUp',
  TransactionRoutes = 'Transaction',

  CycleCreator = 'Cycle/Create',
  CycleDashboard = 'Cycle/Dashboard',
  CycleEditor = 'Cycle/Edit',
  CycleViewer = 'Cycle/View',
  TransactionCreator = 'Transaction/Create',
  TransactionDashboard = 'Transaction/Dashboard',
  TransactionEditor = 'Transaction/Edit',
  TransactionViewer = 'Transaction/View',
  PayerCreator = 'Payer/Create',
  PayerList = 'Payer/List',
  PayerEditor = 'Payer/Edit',
  PayerViewer = 'Payer/View',
  PerfilEditor = 'Perfil/Edit',
  PerfilPreferences = 'Perfil/Preferences',
  PerfilViewer = 'Perfil/View',
  }

const Routes: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default Routes;
