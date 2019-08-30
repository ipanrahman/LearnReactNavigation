import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import {Icon} from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppBottomNavigator = createBottomTabNavigator(
  {
    Home: createStackNavigator(
      {
        HomeScreen: HomeScreen,
      },
      {
        defaultNavigationOptions: {
          headerLeft: (
            <Icon
              name="camera-outline"
              type="material-community"
              containerStyle={{paddingLeft: 10}}
            />
          ),
          title: 'Instagram',
          headerRight: (
            <Icon
              name="send-o"
              type="font-awesome"
              containerStyle={{paddingRight: 10}}
            />
          ),
        },
      },
    ),
    Search: createStackNavigator({
      SearchScreen: SearchScreen,
    }),
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      lazy: false,
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'Home':
            return <Icon name="home-outline" type="material-community" />;
          case 'Search':
            return <Icon name="search" type="feather" />;
        }
      },
    }),
    tabBarOptions: {
      showLabel: false,
    },
  },
);

const AppStackNavigator = createStackNavigator(
  {
    AppBottomNavigator: {
      screen: AppBottomNavigator,
    },
  },
  {
    defaultNavigationOptions: {header: null},
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AppStackNavigator: {screen: AppStackNavigator},
  }),
);
