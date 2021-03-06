import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';


const { width } = Dimensions.get('window');

class Construction extends Component {
  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
        <View style={styles.viewHeader}>
        
        <View   style={styles.header}>
           <Text style={styles.text}  bold>CONSTRUCTION & MAINTENANCE</Text>
        </View>
       
      
        <View style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/Construction.png')}/>
        </View>
        </View>
        
       
        <View style={styles.view2}>
        <ImageBackground source={require('../assets/icons/FondoConstruction.png')} 
        style={{
          flex:1,    
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          resizeMode:'cover',
          
        }}/>
     
          
           <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/Fontaneria.png')}/>
            <Text style={styles.buttonText} h3 bold>
            FONTANERÍA Y BOMBAS AGUILERA
            </Text>
          </View>        
          </TouchableOpacity>    

          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/LogoJotasBuilders.png')}/>
            <Text style={styles.buttonText} h3 bold>
            JOTAS BUILDERS - CONSTUCTORA
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

export default Construction;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    backgroundColor:'#B3A332', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',

  },
  viewHeader:{
    height:'15%',
    backgroundColor:'#B3A332', 
  },
  back:{
  flex:1
  },
deli:{
  width:55,
  height:55,

  
  },
  deli2:{
    width:'15%',
    height:55,

   
  },
  linearGradient: {
   padding:12,
    marginVertical:12,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 2,
    width:325,
    height:80,
       
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
    fontSize:18,
    color:'white'
  

  },
  view1:{
    height:300,
  },
  view2:{
   display:'flex',
   alignItems:'center',
   height:'85%',
  },
  
})
