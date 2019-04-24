import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
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
        color: 'rgba(83, 113, 75, 1)',
        marginTop: 40,
        marginBottom: 40
    },
    textLogin: {
        letterSpacing: 10,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: 'rgba(83, 113, 75, 1)'
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
        width: 290


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

class RegisterScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'REGISTER',
        headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: 10,
        },
        headerStyle: {
            backgroundColor: 'rgba(83, 113, 75, 1)'
        },
    });

    constructor(props) {
        super(props);
        this.state = { email: 'Your email', password: '123456'};
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textHelpingYou}>New here?{"\n"}Fill in the fields and join us!</Text>


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
                    <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(255, 255, 255, 1)'}}>REGISTER</Text>
                </TouchableOpacity>


                    <Text>OR</Text>

                <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:300,
                        height:50,
                        backgroundColor:'rgba(59, 89, 152, 1)',
                        borderRadius:25,
                        marginTop: 10,
                        marginBottom: 10
                    }}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text style={{fontFamily: 'Poppins-Regular', color: 'rgba(255, 255, 255, 1)'}}>Register with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:300,
                        height:50,
                        backgroundColor:'rgba(255, 255, 255, 1)',
                        borderRadius:25,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        elevation: 12,


                    }}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text style={{fontFamily: 'Poppins-Regular', color: 'rgba(52, 48, 45, 1)'}}>Register with Google</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default RegisterScreen;
