import React from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import Login from '~/pages/login';
import Home from '~/pages/home';
import Tasks from '~/pages/tasks';

import { colors } from '~/styles';

const TabNav = TabNavigator({
  Home: { screen: Home },
  Tasks: { screen: Tasks },
}, {
  tabBarPosition: 'top',
  tabBarComponent: TabBarTop,
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colors.white,
      height: 12,
    },
    indicatorStyle: {
      backgroundColor: colors.secondary,
      height: 12,
    },
  },
});

const MainStack = StackNavigator({
  Login: { screen: Login },
  MainTab: { screen: TabNav },
}, {
  initialRouteName: 'MainTab',
  navigationOptions: () => ({
    title: 'Hello!',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
      fontSize: 24,
      flex: 1,
      textAlign: 'left',
    },
  }),
});

const Routes = MainStack;
export default Routes;
