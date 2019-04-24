import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 320, height: 300, resizeMode: 'contain'
    },
    text1: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: 'rgba(83,113,75,1)',
        marginBottom: 15,
        marginTop: 40,
    },
    text2: {
        textAlign: 'center',
        width: 250,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'rgba(83,113,75,1)'
    }
});

class FirstScreen extends React.Component {



    render() {
        return (

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.image}
                           source={require('../../resources/flower_image_A5_Rectangle_289_pattern.png')}
                    />
                    <Text style={styles.text1}>WE WATER THEM FOR YOU!</Text>
                    <Text style={styles.text2}>find the best way to treat your flowers and make them happier!</Text>
                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                            width:300,
                            height:50,
                            backgroundColor:'rgba(83, 113, 75, 1)',
                            borderRadius:25,
                            marginTop: 40,
                            marginBottom: 10
                        }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>LET'S GO</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

export default FirstScreen;
