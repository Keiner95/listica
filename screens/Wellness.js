import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';


const { width } = Dimensions.get('window');

class Transfer extends Component {
  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
<<<<<<< HEAD
        <View styles={styles.viewHeader}>
        
        <View   style={styles.header}>
           <Text style={styles.text} h3 bold>WELLNESS</Text>
=======
        <View>
        
        <View   style={styles.header}>
           <Text style={styles.text} h3 bold>Wellness</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
        </View>
       
      
        <View style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/massage.png')}/>
        </View>
        </View>
       
        <View style={styles.view2}>
<<<<<<< HEAD
        <ImageBackground source={require('../assets/icons/FondoWellness.png')} 
=======
        <ImageBackground source={require('../assets/icons/Main.png')} 
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
        style={{
         
          flex: 1,         
          position: 'absolute',
          width: '100%',
<<<<<<< HEAD
          height: '100%',
          justifyContent: 'center',
          resizeMode:'stretch',
=======
          height: '120%',
          justifyContent: 'center',
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
          
        }}/>
     
          
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
<<<<<<< HEAD
            <Image style={styles.deli2} source={require('../assets/icons/TMT.png')}/>
            <Text style={styles.buttonText}h3 bold>
=======
            <Image style={styles.deli2} source={require('../assets/icons/massage.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
           TAMARINDO MUSCLE THERAPY
            </Text>
          </View>
              
          </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
<<<<<<< HEAD
            <Image style={styles.deli2} source={require('../assets/icons/SpaMaya.png')}/>
            <Text style={styles.buttonText}h3 bold >
=======
            <Image style={styles.deli2} source={require('../assets/icons/massage.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true} >
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
          SPA MAYA
            </Text>
          </View>
              
          </TouchableOpacity>

      

         
        </View>
        
          
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

export default Transfer;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor:'#B3A332', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',

  },
<<<<<<< HEAD
  viewHeader:{
    height:'15%',
    backgroundColor:'#B3A332', 
  },
=======
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  back:{
  flex:1
  },
deli:{
<<<<<<< HEAD
  width:55,
  height:55,
=======
  width:50,
  height:50,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

  
  },
  deli2:{
    width:'15%',
<<<<<<< HEAD
    height:50,
=======
    height:40,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

   
  },
  linearGradient: {
   padding:12,
    marginVertical:12,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
<<<<<<< HEAD
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 2,
    width:325,
    height:80,       
=======
    backgroundColor: 'rgba(154,151,151,0.9)',
    borderRadius: 10,

    width:325,
    height:80,
       
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
    alignContent:'center',

  },
  buttonText: {
    fontSize: 15,  
    textAlign: 'left',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginVertical:12,
    padding:12,
    width:'85%'
  
  },
  text:{
<<<<<<< HEAD
    fontSize:18,
    color:'white'
=======
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  

  },
  view1:{
    height:300,
  },
  view2:{
   display:'flex',
   alignItems:'center',
<<<<<<< HEAD
   height:'85%',
=======
   height:'100%',
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  },
  
})
