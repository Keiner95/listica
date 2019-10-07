import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Wellness from '../screens/Wellness';
import Market from '../screens/Market';
import Golf from '../screens/Golf';
import Adventure from '../screens/Adventure';
import Meal from '../screens/Meal';
import Transfer from '../screens/Transfer';
import Art from '../screens/Art';
import House from '../screens/House';
<<<<<<< HEAD
import Construction from '../screens/Construction';
import Garden from '../screens/Garden';
=======
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d


import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,Meal,Market,Adventure, Transfer,
<<<<<<< HEAD
  Wellness, Golf,Art,House,Construction,Garden
=======
  Wellness, Golf,Art,House
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
  
  
 

}, {
  defaultNavigationOptions: {
    headerStyle: {
<<<<<<< HEAD
      height: 30,
=======
      height: 20,
>>>>>>> 6af65ecbbd36535084933c67ed26ce2c3eab8f6d
      backgroundColor:'#0E6655', // or 'white
     
      elevation: 0, // for android
    },
  

    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
      backgroundColor:'#0E6655', // or 'white
    },
  }
});

export default createAppContainer(screens);