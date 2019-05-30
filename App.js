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
import FlowerSettingsScreen from "./src/components/FlowerSettingsScreen";
import { askForPermissioToReceiveNotifications, subscribeToTopic } from './push-notifications';
import firebase from 'react-native-firebase';


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
    FlowerSettings: FlowerSettingsScreen
  },
  {
    initialRouteName: 'FirstScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

    async componentDidMount() {
      this.checkPermission();
      this.createNotificationListeners();
    }

      //1
    async checkPermission() {
      const enabled = await firebase.messaging().hasPermission();
      if (enabled) {
          this.getToken();
      } else {
          this.requestPermission();
      }
    }

      //3
    async getToken() {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
          fcmToken = await firebase.messaging().getToken();
          if (fcmToken) {
              // user has a device token
              await AsyncStorage.setItem('fcmToken', fcmToken);
          }
      }
    }

      //2
    async requestPermission() {
      try {
          await firebase.messaging().requestPermission();
          // User has authorised
          this.getToken();
      } catch (error) {
          // User has rejected permissions
          console.log('permission rejected');
      }
    }

    componentWillUnmount() {
      this.notificationListener();
      this.notificationOpenedListener();
    }

    async createNotificationListeners() {
      /*
      * Triggered when a particular notification has been received in foreground
      * */
      this.notificationListener = firebase.notifications().onNotification((notification) => {
          const { title, body } = notification;
          this.showAlert(title, body);
      });

      /*
      * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
      * */
      this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
          const { title, body } = notificationOpen.notification;
          this.showAlert(title, body);
      });

      /*
      * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
      * */
      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
          const { title, body } = notificationOpen.notification;
          this.showAlert(title, body);
      }
      /*
      * Triggered for data only payload in foreground
      * */
      this.messageListener = firebase.messaging().onMessage((message) => {
        //process data message
        console.log(JSON.stringify(message));
      });
    }

    showAlert(title, body) {
      Alert.alert(
        title, body,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }


  render() {
    ()=>{askForPermissioToReceiveNotifications};
    ()=>{subscribeToTopic};
    return <AppContainer />;
  }
}
