import {Button, Text, View} from "react-native";
import React from 'react';

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

export default RegisterScreen;