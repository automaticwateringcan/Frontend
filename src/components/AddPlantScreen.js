import {Button, Text, View} from "react-native";
import React from 'react';

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

export default AddPlantScreen