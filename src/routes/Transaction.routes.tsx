import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TransactionCreator from '../pages/TransactionCreator';
import TransactionEditor from '../pages/TransactionEditor';
import TransactionViewer from '../pages/TransactionViewer';
import { ERoutes } from '.';

const { Screen, Navigator } = createNativeStackNavigator();

const TransactionRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={ERoutes.TransactionCreator}
        component={TransactionCreator}
        options={{
        }}
      />
      <Screen
        name={ERoutes.TransactionEditor}
        component={TransactionEditor}
        options={{
        }}
      />
      <Screen
        name={ERoutes.TransactionViewer}
        component={TransactionViewer}
        options={{
        }}
      />
    </Navigator>
  );
};

export default TransactionRoutes;
