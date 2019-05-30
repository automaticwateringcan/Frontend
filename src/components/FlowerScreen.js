import React from 'react';
import {Image, ScrollView, Text, TouchableNativeFeedback, View, StyleSheet, TouchableOpacity} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
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
    chartText: {
            fontFamily: 'Poppins-ExtraLight',
            fontSize: 20,
            color: 'rgba(25,76,25,1)'
        }
});




class FirstScreen extends React.Component {

     constructor(props) {
        super(props);
        this.getChartsData(props.navigation.state.params.plantId,5);
     }


    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('plantData').item.name,
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

        state = {
            moisureList: [0,0,0,0,0],
            temeratureList: [0,0,0,0,0],
            soilList: [0,0,0,0,0],
            numberOfMeasures: 5,
            //Have a loading state where when data retrieve returns data.
            loading: true,
            weekDays: ['MON','TUE','WED','THU','FRI','SAT','SUN']
        }


    render() {
        const { navigation } = this.props;
        const plantId = navigation.getParam('plantId');
        const plantData = navigation.getParam('plantData');

        return (
            <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: 'rgba(83, 113, 75, 1)',
                padding: 15,
                }}>

                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'rgba(255, 255, 255, 1)', width: '75%'}}>{plantData.item.species.description}</Text>

                <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
                    <Image
                        source={require('../../resources/ground_01_A4_Rectangle_73_pattern.png')}
                        style={{width: 45, height: 45, resizeMode: 'contain'}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Bold', fontSize: 20}} >{plantData.item.soilMosture}%</Text>
                    <Image
                        source={require('../../resources/air_01_A4_Rectangle_25_pattern.png')}
                        style={{width: 30, height: 30, resizeMode: 'contain', marginLeft: 10}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Regular', fontSize: 16}}>{plantData.item.humidity}%</Text>
                    <Image
                        source={require('../../resources/thermometer_01_A4_Rectangle_102_pattern.png')}
                        style={{width: 30, height: 30, resizeMode: 'contain'}}
                    />
                    <Text style={{color: 'rgba(255, 255, 255, 1)', fontFamily: 'Poppins-Regular', fontSize: 16}}>{plantData.item.temperature}*C</Text>
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
                onPress={() => this.handleWatering(plantData.item.id)}
            >
                <Text style={{fontFamily: 'Poppins-Regular', color: 'rgba(59, 89, 152, 1)'}}>WATER FLOWER</Text>
            </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(25,76,25,1)'}}>
                    Temperature in last {this.state.numberOfMeasures} days:
                  </Text>
                  <LineChart
                    data={{
                      labels: [this.state.weekDays[(new Date().getDay()+6-5)%7],this.state.weekDays[(new Date().getDay()+6-4)%7], this.state.weekDays[(new Date().getDay()+6-3)%7], this.state.weekDays[(new Date().getDay()+6-2)%7], this.state.weekDays[(new Date().getDay()+6-1)%7], 'TODAY'],
                      datasets: [{
                        data: this.state.temeratureList
                      }]
                    }}
                    width={350} // from react-native
                    height={220}
                    yAxisLabel={'°C '}
                    chartConfig={{
                      backgroundColor: '#e26a00',
                      backgroundGradientFrom: '#398949',
                      backgroundGradientTo: '#59b76d',
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                  />
             </View>
            </View>
            <View style={{alignItems: 'center'}}>

               <View>
                 <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(25,76,25,1)'}}>
                   Humidity in last {this.state.numberOfMeasures} days:
                 </Text>
                 <LineChart
                   data={{
                      labels: [this.state.weekDays[(new Date().getDay()+6-5)%7],this.state.weekDays[(new Date().getDay()+6-4)%7], this.state.weekDays[(new Date().getDay()+6-3)%7], this.state.weekDays[(new Date().getDay()+6-2)%7], this.state.weekDays[(new Date().getDay()+6-1)%7], 'TODAY'],
                     datasets: [{
                       data: this.state.moisureList
                     }]
                   }}
                   width={350} // from react-native
                   height={220}
                   yAxisLabel={'% '}
                   chartConfig={{
                     backgroundColor: '#3675db',
                     backgroundGradientFrom: '#4e86e0',
                     backgroundGradientTo: '#5c8ee0',
                     decimalPlaces: 2, // optional, defaults to 2dp
                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                     style: {
                       borderRadius: 16
                     }
                   }}
                   bezier
                   style={{
                     marginVertical: 8,
                     borderRadius: 16
                   }}
                 />
               </View>

           </View>
           <View style={{alignItems: 'center'}}>

              <View>
                <Text style={{fontFamily: 'Poppins-SemiBold', color: 'rgba(25,76,25,1)'}}>
                  Soil Moisture in last {this.state.numberOfMeasures} days:
                </Text>
                <LineChart
                  data={{
                      labels: [this.state.weekDays[(new Date().getDay()+6-5)%7],this.state.weekDays[(new Date().getDay()+6-4)%7], this.state.weekDays[(new Date().getDay()+6-3)%7], this.state.weekDays[(new Date().getDay()+6-2)%7], this.state.weekDays[(new Date().getDay()+6-1)%7], 'TODAY'],
                    datasets: [{
                      data: this.state.soilList
                    }]
                  }}
                  width={350} // from react-native
                  height={220}
                  yAxisLabel={'% '}
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
                />
              </View>

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

    async handleWatering(id) {
        try {

            const apiCall = await fetch('http://localhost:8080/api/plants/water/' + id + '?portions=10');

            const response = await apiCall.json();

        } catch(err) {
            console.warn("Error fetching data-----------", err);
        }
    }

    async getChartsData(id, amount) {
        try {
            const apiCallH = await fetch('http://localhost:8080/api/plants/humidity/'+id+'?amount='+amount);
            const apiCallT = await fetch('http://localhost:8080/api/plants/temperature/'+id+'?amount='+amount);
            const apiCallS = await fetch('http://localhost:8080/api/plants/soil/'+id+'?amount='+amount);

            const dataH = await apiCallH.json();
            const dataT = await apiCallT.json();
            const dataS = await apiCallS.json();

            this.setState({moisureList: dataH,temeratureList: dataT, soilList: dataS});

        } catch(err) {
            console.warn("Error fetching data-----------", err);
        }

    }

}

export default FirstScreen;
