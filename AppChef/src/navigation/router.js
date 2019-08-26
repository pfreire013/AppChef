import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

//Helper
import ROUTENAMES from './routeName';
import theme from '../theme';

//Screens
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cook from '../screens/Cook';
import Profile from '../screens/Profile';
import Recipe from '../screens/Recipe';
import Restaurant from '../screens/Restaurant';
import images from '../assets/images';
import CommonText from '../components/CommonText';
import SignUp from '../screens/SignUp';

const IconHome = styled.Image.attrs(props => ({
  source: images.tabBar.home,
}))`
  height: 24;
  width: 24;
  z-index: 10;
`;

const IconHomeActive = styled.Image.attrs(props => ({
  source: images.tabBar.home,
}))`
  height: 24;
  width: 24;
`;

//Fundo do Icone Destaque
const IconBg = styled.View`
  height: 50;
  width: 50;
  background: ${p => p.theme.colors.primary};
  border-radius: 25;
  z-index: 5;
  position: absolute;
  bottom: -15;
  align-items: center;
  justify-content: center;
`;

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
    [ROUTENAMES.SIGNUP]: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null,
        //mostrar o back
      }),
    },
  },
  {
    initialRouteName: ROUTENAMES.SIGNUP,
  },
  defaultNavigationOptions,
);

const LoggedAppRoutes = createBottomTabNavigator(
  {
    [ROUTENAMES.HOME]: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="bookmark" color={tintColor} size={24} />
        ),
      }),
    },
    [ROUTENAMES.RECIPE]: {
      screen: Recipe,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="heart" color={tintColor} size={24} />
        ),
      }),
    },
    [ROUTENAMES.COOK]: {
      screen: Cook,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <IconBg>
            <IconHome />
          </IconBg>
          //<Icon name="heart" color={tintColor} size={24} />
        ),
      }),
    },
    [ROUTENAMES.RESTAURANT]: {
      screen: Restaurant,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="lock" color={tintColor} size={24} />
        ),
      }),
    },
    [ROUTENAMES.PROFILE]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={24} />
        ),
      }),
    },
  },
  {
    //tabBarComponent: ,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#F0326E',
      inactiveTintColor: theme.colors.lightGray,
      style: {
        backgroundColor: '#FFFFFF',
        //position: relative,
      },
      tabStyle: {},
    },
  },
);

//{
//initialRouteName: ROUTENAMES.HOME,
//defaultNavigationOptions,
//},

const createRoutes = () =>
  createAppContainer(
    createSwitchNavigator(
      {
        [ROUTENAMES.LOGGED_APP]: LoggedAppRoutes,
        [ROUTENAMES.NON_LOGGED_APP]: NonLoggedAppRoutes,
      },
      {
        headerMode: 'none',
        initialRouteName: ROUTENAMES.NON_LOGGED_APP, //ROUTENAMES.NON_LOGGED_APP,
      },
    ),
  );

export default createRoutes;
