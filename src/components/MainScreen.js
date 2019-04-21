import {Button, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from 'react';

class MainScreen extends React.Component {
    static navigationOptions = () => ({
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
                onPress={() => this.props.navigation.navigate('AddPlant')}
            >
                <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>New flower</Text>
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

export default MainScreen