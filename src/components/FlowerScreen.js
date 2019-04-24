import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 100, height: 150, resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        top: 0
    },
    text: {
        fontFamily: 'Poppins-ExtraLight',
        fontSize: 20,
        color: 'rgba(83,113,75,1)'
    }
});

class FirstScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'ZBYSZEK',
        headerTitleStyle: {fontFamily: 'Poppins-Bold', fontSize: 20, color: 'rgba(255, 255, 255, 1)'},
        headerStyle: {
            backgroundColor: 'rgba(83, 113, 75, 1)'
        },
        headerRight: (
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginRight: 10
                }}
                onPress={() => navigation.navigate('EditPlant')}
            >
                <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>EDIT</Text>
            </TouchableOpacity>
        )
    });


    render() {
        return (
            <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: 'rgba(83, 113, 75, 1)',
                padding: 15,
                }}>

                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'rgba(255, 255, 255, 1)'}}>Bluszcz amerykański,{"\n"}mały pokój</Text>

                <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
                    <Image
                        source={require('../../resources/ground_01_A4_Rectangle_73_pattern.png')}
                        style={{width: 45, height: 45, resizeMode: 'contain'}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Bold', fontSize: 20}} >60%</Text>
                    <Image
                        source={require('../../resources/air_01_A4_Rectangle_25_pattern.png')}
                        style={{width: 30, height: 30, resizeMode: 'contain', marginLeft: 10}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Regular', fontSize: 16}}>30%</Text>
                    <Image
                        source={require('../../resources/thermometer_01_A4_Rectangle_102_pattern.png')}
                        style={{width: 30, height: 30, resizeMode: 'contain'}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Regular', fontSize: 16}}>20*C</Text>
                </View>
                <Image style={styles.image}
                       source={require('../../resources/flower_image_A5_Rectangle_289_pattern.png')}
                />

            </View>

            <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:300,
                    height:50,
                    backgroundColor:'rgba(185, 215, 255, 1)',
                    borderRadius:25,
                    marginTop: 10,
                    marginBottom: 10
                }}
                onPress={() => this.props.navigation.navigate('Main')}
            >
                <Text style={{fontFamily: 'Poppins-Regular', color: 'rgba(59, 89, 152, 1)'}}>WATER FLOWER</Text>
            </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
                <Text>WYKRES 1</Text>
            </View>


            <View style={{alignItems: 'center'}}>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
                <Text>WYKRES 2</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:300,
                        height:50,
                        backgroundColor:'rgba(255, 255, 255, 1)',
                        borderRadius:25,
                        marginTop: 40,
                        marginBottom: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        elevation: 12
                    }}
                    onPress={() => this.props.navigation.navigate('FlowerSettings')}
                >
                    <Text style={{fontFamily: 'Poppins-Regular', color: 'rgba(154, 157, 159, 1)'}}>SELECT MANUAL SETTINGS</Text>
                </TouchableOpacity>
            </View>

            </ScrollView>

                );
    }
}

export default FirstScreen;
