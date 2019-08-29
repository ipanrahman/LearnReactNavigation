import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import {Icon} from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppBottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="home-outline" type="material-community" />,
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="search" type="feather" />,
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
});

const AppStackNavigator = createStackNavigator(
  {
    AppBottomNavigator: {screen: AppBottomNavigator},
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
);

const AppContainer = createAppContainer(AppStackNavigator);
