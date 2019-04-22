import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import FirstScreen from './src/components/FirstScreen'
import LoginScreen from './src/components/LoginScreen'
import RegisterScreen from './src/components/RegisterScreen'
import MainScreen from './src/components/MainScreen'
import AddPlantScreen from './src/components/AddPlantScreen'
import EditPlantScreen from './src/components/EditPlantScreen'
import OnboardingScreen from './src/components/OnboardingScreen'
import FlowerScreen from "./src/components/FlowerScreen";

const RootStack = createStackNavigator(
  {
    FirstScreen: FirstScreen,
    AddPlant: AddPlantScreen,
    EditPlant: EditPlantScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainScreen,
    Onboarding: OnboardingScreen,
      Flower: FlowerScreen,
  },
  {
    initialRouteName: 'FirstScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
