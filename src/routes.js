import React from 'react';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import Login from '~/pages/login';
import Home from '~/pages/home';
import Tasks from '~/pages/tasks';

// Custom Components
import HeaderAvatar from '~/components/HeaderAvatar';
import HeaderMenu from '~/components/HeaderMenu';

import Menu from '~/assets/svg/menu.svg';

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
  initialRouteName: 'Login',
  navigationOptions: () => ({
    title: 'Hello!',
    headerStyle: {
      backgroundColor: colors.primary,
      height: 70,
    },
    headerTitleStyle: {
      color: colors.white,
      fontSize: 24,
      flex: 1,
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
    },
    headerLeft: <HeaderMenu Icon={Menu} />,
    headerRight: <HeaderAvatar image="https://avatars1.githubusercontent.com/u/25140387?s=460&v=4" />,
  }),
});

const Routes = MainStack;
export default Routes;
