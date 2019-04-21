import {Button, Text, View} from "react-native";
import React from 'react';

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

export default LoginScreen;