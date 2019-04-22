import {Button, Text, View} from "react-native";
import React from 'react';

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

export default EditPlantScreen;