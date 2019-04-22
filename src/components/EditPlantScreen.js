import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Regular',
        color: 'rgba(149, 152, 154, 1)',
        marginBottom: 10
    },
    input:{
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(222, 222, 222, 1)',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: 320
    }
});


class EditPlantScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'EDIT PLANT',
        headerTitleStyle: {fontFamily: 'Poppins-Bold', fontSize: 20, color: 'rgba(255, 255, 255, 1)'},
        headerStyle: {
            backgroundColor: 'rgba(83, 113, 75, 1)'
        }
    });

    constructor(props) {
        super(props);
        this.state = { name: 'Flower name...', type: 'Type of flower...', place: 'Where is flower...'};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 15, backgroundColor: 'rgba(251, 251, 251, 1)'}}>
                <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                </View>
                <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.text}>Type</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(type) => this.setState({type})}
                        value={this.state.type}
                    />
                </View>
                <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.text}>Place</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(place) => this.setState({place})}
                        value={this.state.place}
                    />
                </View>

                <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:300,
                        height:50,
                        backgroundColor:'rgba(83, 113, 75, 1)',
                        borderRadius:25,
                    }}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>ADD FLOWER</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default EditPlantScreen