import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import colors from './styles/colors';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Routes />
    </Fragment>
  );
}

export default App;
