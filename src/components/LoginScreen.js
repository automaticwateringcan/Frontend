import {Button, StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    image: {
        width: 320, height: 300, resizeMode: 'contain'
    },
    textWelcome: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: 'rgba(83,113,75,1)',
    },
    textHelpingYou: {
        textAlign: 'center',
        width: 250,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'rgba(184, 182, 182, 1)',
        marginTop: 40,
        marginBottom: 40
    },
    textLogin: {
        letterSpacing: 10,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'rgba(83, 113, 75, 1)',
        width: 290

    },
    inputLogin:{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'rgba(184, 182, 182, 1)',
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 25,
        width: 290


    },
    inputPassword:{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'rgba(184, 182, 182, 1)',
        paddingBottom: 0,
        paddingTop: 0,


    },
    textPassword:{
        letterSpacing: 10,

        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'rgba(83, 113, 75, 1)'
    },
    textDoNotHave:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'rgba(83, 113, 75, 1)'
    },
    textRegister:{
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: 'rgba(83, 113, 75, 1)'
    }


});

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: 'Your email', password: '123456'};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textWelcome}>Welcome to{"\n"}HAPPY FLOWERS</Text>
                <Text style={styles.textHelpingYou}>helping you to cultivate flowers</Text>


                <View style={{width: '80%'}}>

                    <View style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.textLogin}>EMAIL</Text>
                        <TextInput
                            style={styles.inputLogin}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}

                        />
                    </View>


                    <View style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.textPassword}>PASSWORD</Text>
                        <TextInput
                            style={styles.inputPassword}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

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
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>LOG IN</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textDoNotHave}>Do not have an account? </Text>
                    <Text style={styles.textRegister} onPress={() => this.props.navigation.navigate('Register')}>REGISTER</Text>
                </View>

            </View>
        );
    }
}

export default LoginScreen;