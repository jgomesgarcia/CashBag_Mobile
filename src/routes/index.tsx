import {NavigationContainer} from '@react-navigation/native';

import MainRoutes from './Main.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default Routes;
