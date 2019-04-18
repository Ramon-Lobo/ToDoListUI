import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '~/pages/login';

const Stack = StackNavigator({
  Login: { screen: Login },
}, {
  initialRouteName: 'Login',
  navigationOptions: () => ({
    header: null,
  }),
});

const Routes = Stack;
export default Routes;
