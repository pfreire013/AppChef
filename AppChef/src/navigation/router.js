import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import styled from 'styled-components';

//Helper
import ROUTENAMES from './routeName';
import theme from '../theme';

//Screens
import Login from '../screens/Login';
import Home from '../screens/Home';

const defaultNavigationOptions = {
  tabBarOptions: {
    activeTintColor: theme.colors.darkGray,
    inactiveTintColor: theme.colors.lightGray,
    style: {
      borderTopWidth: 1,
      height: 50,
      paddingBottom: 17,
      paddingTop: 17,
    },
    tabBarSelectedItemStyle: {
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
    },
  },
};

const NonLoggedAppRoutes = createStackNavigator(
  {
    [ROUTENAMES.LOGIN]: {screen: Login},
  },
  defaultNavigationOptions,
);

const LoggedAppRoutes = createBottomTabNavigator(
  {
    [ROUTENAMES.HOME]: {screen: Home},
  },
  {
    initialRouteName: ROUTENAMES.HOME,
    defaultNavigationOptions,
  },
);

const createRoutes = () =>
  createAppContainer(
    createSwitchNavigator(
      {
        [ROUTENAMES.LOGGED_APP]: LoggedAppRoutes,
        [ROUTENAMES.NON_LOGGED_APP]: NonLoggedAppRoutes,
      },
      {
        initialRouteName: ROUTENAMES.NON_LOGGED_APP,
      },
    ),
  );

export default createRoutes;
