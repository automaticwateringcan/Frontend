import {Button, Image, ScrollView, Text, TouchableOpacity, View, FlatList, ActivityIndicator} from "react-native";
import React from 'react';
import FlowerItem from "./FlowerItem";

class MainScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'MY FLOWERS',
        headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            color: 'rgba(255, 255, 255, 1)'

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

    state = {
        //Assing a array to your pokeList state
        plantList: [],
        //Have a loading state where when data retrieve returns data.
        loading: true
    }

    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method.
            const apiCall = await fetch('http://192.168.43.207:8080/api/plants');

            const plant = await apiCall.json();

            this.setState({plantList: plant, loading: false});

        } catch(err) {
            console.warn("Error fetching data-----------", err);
        }
    }

    render() {
        const { plantList, loading } = this.state;

        if(!loading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <FlatList
                        style={{width: '100%'}}
                        data={plantList}
                        renderItem={(item) => <FlowerItem key={item.id} navigation={this.props.navigation} plantData={item}/>}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            );
        } else {
            return <ActivityIndicator/>
        }
    }
}

export default MainScreen
