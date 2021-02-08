import React, { Component } from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs'

import { View, StyleSheet, Text,
   Image } from 'react-native';

import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Donate:{
        screen:DonateScreen,
        navigationOptions:{
            TabBarIcon:<Image 
            source={require("../assets/request-list.png")}  style={{width:20,height:20}}/>,
//require is a function in which we add the path of the image which is in the assets folder
            tabBarLabel:'Donate Books'
        }
    },
    Request:{
        screen:RequestScreen,
        navigationOptions:{
            TabBarIcon:<Image 
            source={require("../assets/request-book.png")}  style={{width:20,height:20}}/>,
//require is a function in which we add the path of the image which is in the assets folder
            tabBarLabel:'Request Books'
        }
    }
})
   
