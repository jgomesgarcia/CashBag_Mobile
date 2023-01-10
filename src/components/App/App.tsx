import React from 'react';

import { Container } from './styles';
import Routes from '../../routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

const App: React.FC<any> = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
