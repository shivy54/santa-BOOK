import React, { Component } from 'react';
import {Header} from 'react-native-elements';
import{View,Text,StyleSheet} from 'react-native'

const MyHeader = (props) =>{
    return(
        <Header centerComponent={{text:props.title,style:{color:"#184739",fontSize:20,fontWieght:'bold'}}}/>
    )
}
export default MyHeader;