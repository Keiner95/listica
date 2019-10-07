import React,{component} from 'react'
import Welcome from '../screens/Welcome';
import Wellness from '../screens/Wellness';
import Market from '../screens/Market';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';

const Menu = createDrawerNavigator(
    
    {
       
        Wellness:{screen:Wellness},
        Market:{screen:Market},
    },
    {
        initialRouteName:'Wellness',
        drawerWidth:300,
        drawerPosition:'left'
    }
);

export default createAppContainer(Menu); 