import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CycleCreator from '../pages/CycleCreator';
import CycleEditor from '../pages/CycleEditor';
import CycleViewer from '../pages/CycleViewer';

const { Screen, Navigator } = createNativeStackNavigator();




const CycleRoutes: React.FC<any> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Cycle/Create"
        component={CycleCreator}
        options={{
        }}
      />
      <Screen
        name="Cycle/Edit"
        component={CycleEditor}
        options={{
        }}
      />
      <Screen
        name="Cycle/View"
        component={CycleViewer}
        options={{
        }}
      />
    </Navigator>
  );
};

export default CycleRoutes;
