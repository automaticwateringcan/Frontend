import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet, TouchableOpacity, Switch} from "react-native";
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

class FlowerSettingsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'SETTINGS',
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

    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    }


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

                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Automatic Watering</Text>
                        <Switch
                            onValueChange = {this.toggleSwitch}
                            value = {this.state.switchValue}/>
                    </View>


                    <View style={{flexDirection: 'row'}}>
                        <Text>Automatic Watering</Text>
                        <Switch
                            onValueChange = {this.toggleSwitch}
                            value = {this.state.switchValue}/>
                    </View>
                </View>





                <View style={{alignItems: 'center'}}>
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
                        <Text style={{fontFamily: 'Poppins-Bold', color: 'rgba(255, 255, 255, 1)'}}>Apply Changes</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        );
    }
}

export default FlowerSettingsScreen;