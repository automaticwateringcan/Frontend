import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet, TouchableOpacity, Switch} from "react-native";
import HorizontalPicker from 'react-native-horizontal-picker-q5';
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
    },
    leftContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-start',
    padding: 15,
    },
    rightContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 15,
    },

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

    state = {switchNotifications:true, switchAutoWatering:false, wateringInterval:4.0, wateringAmount:60}
    toggleNotificationSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchNotifications: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    toggleAutoWateringSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchAutoWatering: value})
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
                    <View style={{flexDirection: 'row', padding: 15}}>
                        <Text>Automatic Watering</Text>
                        <Switch
                            style={{paddingLeft: 17}}
                            onValueChange = {this.toggleAutoWateringSwitch}
                            value = {this.state.switchAutoWatering}/>
                    </View>


                    <View style={{flexDirection: 'row', padding: 15}}>
                        <Text>Show  Notifications </Text>
                        <Switch
                            style={{paddingLeft: 10}}
                            onValueChange = {this.toggleNotificationSwitch}
                            value = {this.state.switchNotifications}/>
                    </View>
                </View>


                <View>

                  <View style={{flexDirection: 'row'}}>
                       <View style={styles.leftContainer}>
                          <Text>
                            Water every...
                          </Text>
                       </View>

                       <View style={styles.rightContainer}>
                          <Text>
                            {this.state.wateringInterval} h
                          </Text>
                       </View>
                  </View>



                  <HorizontalPicker
                    itemWidth={70}
                    selectedValue={this.state.wateringInterval}
                    foregroundColor='gray'
                    onChange={(wateringInterval) => this.setState({wateringInterval})}>
                    <HorizontalPicker.Item label={0.5} value={0.5} />
                    <HorizontalPicker.Item label={1.0} value={1.0} />
                    <HorizontalPicker.Item label={1.5} value={1.5} />
                    <HorizontalPicker.Item label={2.0} value={2.0} />
                    <HorizontalPicker.Item label={2.5} value={2.5} />
                    <HorizontalPicker.Item label={3.0} value={3.0} />
                    <HorizontalPicker.Item label={3.5} value={3.5} />
                    <HorizontalPicker.Item label={4.0} value={4.0} />
                    <HorizontalPicker.Item label={4.5} value={4.5} />
                    <HorizontalPicker.Item label={5.0} value={5.0} />
                    <HorizontalPicker.Item label={5.5} value={5.5} />
                    <HorizontalPicker.Item label={6.0} value={6.0} />
                    <HorizontalPicker.Item label={6.5} value={6.5} />
                    <HorizontalPicker.Item label={7.0} value={7.0} />
                    <HorizontalPicker.Item label={7.5} value={7.5} />
                    <HorizontalPicker.Item label={8.0} value={8.0} />
                    <HorizontalPicker.Item label={8.5} value={8.5} />
                    <HorizontalPicker.Item label={9.0} value={9.0} />
                    <HorizontalPicker.Item label={9.5} value={9.5} />
                    <HorizontalPicker.Item label={10.0} value={10.0} />
                    <HorizontalPicker.Item label={10.5} value={10.5} />
                  </HorizontalPicker>
                </View>

                <View>

                <View style={{flexDirection: 'row'}}>
                     <View style={styles.leftContainer}>
                        <Text>
                          Water amount
                        </Text>
                     </View>

                     <View style={styles.rightContainer}>
                        <Text>
                          {this.state.wateringAmount} ml
                        </Text>
                     </View>
                </View>
                  <HorizontalPicker
                    itemWidth={70}
                    selectedValue={this.state.wateringAmount}
                    foregroundColor='gray'
                    onChange={(wateringAmount) => this.setState({wateringAmount})}>
                    <HorizontalPicker.Item label={10} value={10} />
                    <HorizontalPicker.Item label={20} value={20} />
                    <HorizontalPicker.Item label={30} value={30} />
                    <HorizontalPicker.Item label={40} value={40} />
                    <HorizontalPicker.Item label={50} value={50} />
                    <HorizontalPicker.Item label={60} value={60} />
                    <HorizontalPicker.Item label={70} value={70} />
                    <HorizontalPicker.Item label={80} value={80} />
                    <HorizontalPicker.Item label={90} value={90} />
                    <HorizontalPicker.Item label={100} value={100} />
                  </HorizontalPicker>
                </View>


                <View style={{alignItems: 'center',padding:20}}>
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
