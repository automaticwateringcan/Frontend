import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet} from "react-native";

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
    constructor(props) {
        super(props);
    }

    createRating = () => {
        let indents = [];
        for (let i = 0; i < 7; i++) {
            indents.push(
                <Image
                    source={require('../../resources/flowericons_01_A4_Rectangle_45_pattern.png')}
                    style={{width: 30, height: 30, resizeMode: 'contain'}}
                />
            );
        }
        return indents;
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Onboarding')}>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(83, 113, 75, 1)',
                    padding: 15,
                    margin: 10,
                    borderRadius: 10}}>

                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: 'rgba(255, 255, 255, 1)'}}>ZBYSZEK</Text>
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

                    <View style={{flexDirection: 'row'}}>
                    {this.createRating()}
                    </View>


                    <Image style={styles.image}
                           source={require('../../resources/flower_image_A5_Rectangle_289_pattern.png')}
                    />

                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default FirstScreen;