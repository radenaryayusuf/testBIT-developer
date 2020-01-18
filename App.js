import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import { TodoLanding, InputJobScreen } from './src/screens';
import { createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  TodoLanding: {
    screen: TodoLanding,
    navigationOptions: {
      headerShown: false,
    },
  },
  InputJobScreen: {
    screen: InputJobScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
},{
  headerMode: 'screen',
  initialRouteName: 'TodoLanding',
});

const AppNavigator = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
