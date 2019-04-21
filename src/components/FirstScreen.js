import React from 'react';
import {Text, TouchableNativeFeedback, View} from "react-native";

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

export default FirstScreen;