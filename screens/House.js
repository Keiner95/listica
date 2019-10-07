import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'
import{LinearGradient} from 'expo-linear-gradient'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';


const { width } = Dimensions.get('window');

class House extends Component {
  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
<<<<<<< HEAD
        <View style={styles.viewHeader}>
        
        <View   style={styles.header}>
           <Text style={styles.text}  bold>In-HOME SERVICES</Text>
        </View>
       
      
        <View style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/home.png')}/>
        </View>
        </View>
        
       
        <View style={styles.view2}>
        <ImageBackground source={require('../assets/icons/FondoIn-HomeServices.png')} 
=======
       
        
        <Block flex={false} row space="between"  style={styles.header}>
           <Text style={styles.text} h3 bold>In-House Services</Text>
           </Block>
       
       
      
        <Block flex={false} row space="between" style={styles.header}>
        <Image style ={styles.deli} source={require('../assets/icons/home.png')}/>
        </Block>
        
       <ScrollView>
        <View style={styles.view2}>
        
        <ImageBackground source={require('../assets/icons/Main.png')} 
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
        style={{
         
          flex: 1,         
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
<<<<<<< HEAD
          resizeMode:'stretch',
          
        }}/>
     
          
           <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/LavanderíaLasOlas.png')}/>
            <Text style={styles.buttonText} h3 bold>
            LAVANDERÍA LAS OLAS 
            </Text>
          </View>        
          </TouchableOpacity>       
              
       
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/PSA_portones_y_sistemas.png')}/>
            <Text style={styles.buttonText} h3 bold >
=======
          
        }}/>
     
    
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/home.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
            LAVANDERIA LAS OLAS
            </Text>
          </View>
              
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/home.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
            FONTANERIA Y BOMBAS AGUILERA
            </Text>
          </View>
              
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/home.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
            PORTONES Y SISTEMAS DE SEGURIDAD
            </Text>
          </View>
              
<<<<<<< HEAD
          </TouchableOpacity> 
=======
          </TouchableOpacity>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/home.png')}/>
<<<<<<< HEAD
            <Text style={styles.buttonText} h3 bold >
          MUBLERIA MORALES
=======
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
            FUMIGADORA CC
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
            </Text>
          </View>
              
          </TouchableOpacity>

<<<<<<< HEAD
          
          

      

         
        </View>
        
       
=======
          <TouchableOpacity onPress={() => navigation.navigate('')}>
           <View
            style={styles.linearGradient}>
            <Image style={styles.deli2} source={require('../assets/icons/home.png')}/>
            <Text style={styles.buttonText} adjustsFontSizeToFit={true}>
            MULTISERVICIOS SC
            </Text>
          </View>
              
          </TouchableOpacity>
         

           

         
        </View>
         </ScrollView>
          
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

<<<<<<< HEAD
export default House ;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
=======
export default House;

const styles = StyleSheet.create({
  header: {
   
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
    backgroundColor:'#B3A332', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
<<<<<<< HEAD

  },
  viewHeader:{
    height:'15%',
    backgroundColor:'#B3A332', 
  },
=======
    paddingHorizontal: theme.sizes.base * 2,

  },
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
=======
    backgroundColor: 'rgba(154,151,151,0.9)',
    borderRadius: 10,

>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
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
