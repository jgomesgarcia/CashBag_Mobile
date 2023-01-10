import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfilPreferences from '../pages/PerfilPreferences';
import { ERoutes } from '.';
import PerfilViewer from '../pages/PerfilViewer';
import PerfilEditor from '../pages/PerfilEditor';

const { Screen, Navigator } = createNativeStackNavigator();


const PerfilRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={ERoutes.PerfilPreferences}
        component={PerfilPreferences}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PerfilEditor}
        component={PerfilEditor}
        options={{
        }}
      />
      <Screen
        name={ERoutes.PerfilViewer}
        component={PerfilViewer}
        options={{
        }}
      />

    </Navigator>
  );
};

export default PerfilRoutes;
