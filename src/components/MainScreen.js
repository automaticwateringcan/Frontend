import {Button, Image, ScrollView, Text, TouchableOpacity, View, FlatList} from "react-native";
import React from 'react';
import FlowerItem from "./FlowerItem";

class MainScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'MY FLOWERS',
        headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: 10,
        },
        headerStyle: {
            backgroundColor: 'rgba(83, 113, 75, 1)'
        },
        headerRight: (
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:100,
                    height:40,
                    backgroundColor:'rgba(133, 178, 118, 1)',
                    borderRadius:5,
                    marginRight: 10
                }}
                onPress={() => navigation.navigate('AddPlant')}
            >
                <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>New flower</Text>
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    style={{width: '100%'}}
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'}
                    ]}
                    renderItem={() => <FlowerItem navigation={this.props.navigation}/>}
                />


            </View>
        );
    }
}

export default MainScreen
