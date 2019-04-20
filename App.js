import React from 'react';
import { Button, View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class FirstScreen extends React.Component {
  render() {
    return (

      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Login')}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>WITAMY</Text>
          <Text>touch anywhere</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LOGIN</Text>
        <Button
          title="log in"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <Button
          title="register"
          onPress={() => this.props.navigation.navigate('Register')}
        />

      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>REGISTER</Text>
        <Button
          title="register"
          onPress={() => this.props.navigation.navigate('Main')}
        />

      </View>
    );
  }
}

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MAIN</Text>
        <Button
          title="Add"
          onPress={() => this.props.navigation.navigate('AddPlant')}
        />
         <Button
          title="edit"
          onPress={() => this.props.navigation.navigate('EditPlant')}
        />


         <ScrollView>
            <Text style={{fontSize:200}}>Scroll me plz</Text>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Text style={{fontSize:200}}>SCROLL</Text>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Text style={{fontSize:200}}>Scrolling down</Text>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Text style={{fontSize:200}}>SCROLL</Text>
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
            <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          </ScrollView>


      </View>
    );
  }
}

class AddPlantScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ADD PLANT</Text>
        <Button
          title="back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}


class EditPlantScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>EDIT PLANT</Text>
        <Button
          title="back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}








const RootStack = createStackNavigator(
  {
    FirstScreen: FirstScreen,
    AddPlant: AddPlantScreen,
    EditPlant: EditPlantScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainScreen


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
