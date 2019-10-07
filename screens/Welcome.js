import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, View,Alert } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme } from '../constants';
<<<<<<< HEAD
=======

>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d


<<<<<<< HEAD

const { width } = Dimensions.get('window');

class Welcome extends Component {


  
=======
class Browse extends Component {
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  
  render() {
    const {  navigation } = this.props;
    
      
  
    return (

      
      <View style={styles.back} >
         <ImageBackground source={require('../assets/icons/FondoMain.png')} 
            style={{
              
             display:'flex',         
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              resizeMode:'stretch',
              
        }}/>

        <View style={styles.viewHeader}>
       
            
        
        <Block  flex={false} row center space="between" style={styles.header}>
<<<<<<< HEAD
         
           <Text style={styles.text} >Hacienda Pinilla Concierge Services</Text>
           
=======
           <Text style={styles.text} h3 bold>Hacienda Pinilla Concierge Services</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
        </Block>
       
      
        <Block flex={false} row center space="between" style={styles.header}>
        
<<<<<<< HEAD
          <Text style={styles.text2}  >MAIN MENU</Text>
          <Button style={styles.button} onPress={() =>Alert.alert()}>
=======
          <Text style={styles.text} h1 bold>MAIN MENU</Text>
          <Button style={styles.button} onPress={() =>Linking.openURL('https://listica.com')}>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
            <Image
              source={ require('../assets/icons/warning.png')}
              style={styles.avatar}
            />
          </Button>
        </Block>
<<<<<<< HEAD
        </View>
        <View style={styles.view2}>
       
        <ScrollView>
         
        
=======

       

        <ScrollView>
          <ImageBackground source={require('../assets/icons/Main.png')} 
            style={{
              backgroundColor: '#ccc',
              flex: 1,         
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
        }}/>
          
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
          <Block flex={false} row space="between" style={styles.categories}>
            {/* {categories.map(category => ( */}
              
              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('Market')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/cart.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>CONVENIENCE</Text>
                  <Text style={styles.textCard} bold>STORES</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Meal')}
              >
               <Card  center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/delivery.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>MEALS DELIVERY</Text>
=======
                onPress={() => navigation.navigate('Meal')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/delivery.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Meals Delivery</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('Transfer')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/taxi.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>TRANSFERS & TRIPS</Text>
=======
                onPress={() => navigation.navigate('Market')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/cart.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Convenience Stores</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('House')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/home.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>In-HOME SERVICES</Text>
=======
                onPress={() => navigation.navigate('Adventure')}
                
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(0,0,0,0)">
                  <Image style={styles.deli} source={require('../assets/icons/road.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Adventure</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Transfer')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/taxi.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Transfers & Trips</Text>

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Wellness')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/massage.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Wellness</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('Wellness')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/massage.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>WELLNESS</Text>
=======
                onPress={() => navigation.navigate('Golf')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[9, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/golf-cart.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Golf Carts, Quads and Bikes</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('Golf')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[9, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/golf-cart.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>GOLF CARTS, </Text>
                  <Text style={styles.textCard}  bold> ATVs & BIKES</Text>
                 
=======
                onPress={() => navigation.navigate('Art')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Art.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Art & Deko</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

<<<<<<< HEAD

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Adventure')}
                
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(0,0,0,0)">
                  <Image style={styles.deli} source={require('../assets/icons/road.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>ADVENTURE</Text>
=======
              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('House')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/home.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>In-House Services</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
<<<<<<< HEAD
                  <Image style={styles.deli} source={require('../assets/icons/Sports.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>SPORTS</Text>
=======
                  <Image style={styles.deli} source={require('../assets/icons/Health.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Health</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                // key={category.name}
<<<<<<< HEAD
                onPress={() => navigation.navigate('Construction')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Construction.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>CONSTRUCTION</Text>
                  <Text style={styles.textCard}  bold>& MAINTENANCE</Text>
              
=======
                onPress={() => navigate.navigation('')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Kids.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Kids</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>

<<<<<<< HEAD
              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Garden')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Garden.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>GARDEN, POOLS </Text>
                  <Text style={styles.textCard} bold>& PEST CONTROL </Text>
                 

                </Card>
              </TouchableOpacity>          

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('Art')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Art.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>ART & DEKO</Text>

                </Card>
              </TouchableOpacity>

              

              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/Health.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>HEALTH</Text>

                </Card>
              </TouchableOpacity>              
             
              
              <TouchableOpacity
                // key={category.name}
                onPress={() => Alert.alert(
                  'Owner Access',
                  'Coming Soon',
                  [
                    
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
                )}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/AppHP.png')} />
                  </Badge>
                  <Text style={styles.textCard} medium height={20} bold>OWNERS ACCESS</Text>
=======
              <TouchableOpacity
                // key={category.name}
                onPress={() => navigation.navigate('')}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/pets.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Pets</Text>

                </Card>
              </TouchableOpacity>
              
             
              
              <TouchableOpacity
                // key={category.name}
                onPress={() => Alert.alert(
                  'Owner Access',
                  'Coming Soon',
                  [
                    
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
                )}
              >
               <Card center middle shadow style={styles.category}>
                  <Badge margin={[7, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                  <Image style={styles.deli} source={require('../assets/icons/AppHP.png')} />
                  </Badge>
                  <Text style={styles.text} medium height={20}>Owner Access</Text>
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d

                </Card>
              </TouchableOpacity>
                  
           
          </Block>
        </ScrollView>
        {/* </ImageBackground> */}
    </View>
      </View>
    )
  }
}

// Browse.defaultProps = {
//   profile: mocks.profile,
//   categories: mocks.categories,
// }

export default Welcome;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    backgroundColor:'#B3A332'
    

  },
  back:{
    flex:1
  },
  text:{
    // fontFamily:'ArialRoundedMT',
<<<<<<< HEAD
    color:'white',  
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:16,
    paddingLeft:30,

  },
  text2:{
    // fontFamily:'ArialRoundedMT',
    color:'white',  
    justifyContent: 'center',
    alignItems: 'center',  
    fontSize:16,
    paddingLeft:100,

  },
  textCard:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:12,
    color:'white',
    
    

  },
  deli:{
    width:70,
    height:70,
=======
    color:'white',

  },
  deli:{
    width:50,
    height:50,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
    margin:5,
    alignItems:'center',
  },
  avatar: {
<<<<<<< HEAD
    height: theme.sizes.base * 3.4,
    width: theme.sizes.base * 3.4,
=======
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
    backgroundColor:'#B3A332'
    
  },
  button:{
<<<<<<< HEAD
    height: theme.sizes.base * 2.6,
    width: theme.sizes.base * 2.6,
=======
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  viewHeader:{
    height:'15%',
    backgroundColor:'#B3A332', 
  },
  view2:{
    display:'flex',
    alignItems:'center',
    height:'85%',
   },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
    backgroundColor:'#B3A332'
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
    marginTop: 3,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    width: (width - (theme.sizes.padding * 2.2) - theme.sizes.base) / 2,
    height: (width - (theme.sizes.padding * 2.0  ) - theme.sizes.base) / 2,
 
   
    
    
  }
})
