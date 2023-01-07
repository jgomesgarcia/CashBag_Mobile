

import React from 'react';
import {
  Text,
} from 'react-native';

import { Container } from './styles';
import Routes from '../../routes'

const App:React.FC = () => {
  return (
    <Container>
      <Routes />
    </Container>
  );
};


export default App;
