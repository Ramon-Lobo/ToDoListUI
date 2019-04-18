import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

import Routes from './routes';


const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Routes />
    </Fragment>
  );
}

export default App;
