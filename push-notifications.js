import firebase from 'react-native-firebase';

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();

      console.log('token:', token);

      return token;
    } catch (error) {
      console.error(error);
    }
  }

  export const subscribeToTopic =() => {
    firebase.messaging().subscribeToTopic("Refill")
}