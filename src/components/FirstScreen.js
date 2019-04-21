import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 320, height: 100, resizeMode: 'contain'
    },
    text: {
fontFamily: 'Poppins-ExtraLight',
fontSize: 20,
color: 'rgba(83,113,75,1)'
    }
});

class FirstScreen extends React.Component {



    render() {
        return (

            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Onboarding')}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.image}
                        source={require('../../resources/logo_text_A0_Rectangle_2_pattern.png')}
                   />
                    <Text style={styles.text}> we take care of them</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default FirstScreen;