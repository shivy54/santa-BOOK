import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import db from "../config";

import firebase from "firebase";
//find differnce between twodot and one dot
import MyHeader from "../components/MyHeader";
export default class RequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      UserId: firebase.auth().currentUser.email,
      BookName: "",
      ReasonToRequest: "",
    };
  }

  createUniqueId = () => {
    return Math.random().toString(36).substring(0,7)
  }

addRequest = (bookName,reasonToRequest) => {
  var userId = this.state.UserId;
  var randomRequestId = this.createUniqueId();
  db.collection('requstedBooks').add({
    'user_Id':userId,
    'Book_Name':this.state.BookName,
    'Reason_To_Request':this.state.ReasonToRequest,
    'Request_Id':randomRequestId,
  })

  this.setState({
    BookName:'',
    ReasonToRequest:'',
  })
  return Alert.alert('Request authorized :)')
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Request" />
        <KeyboardAvoidingView style={styles.keyBoardStyle}>

          <TextInput
            style={styles.formTextInput}
            placeholder={"Book name"}
            onChangeText={(text) => {
              this.setState({
                BookName: text,
              });
            }}
            value={this.state.BookName}
          />
          <TextInput
            style={[styles.formTextInput,{height:300}]}
            multiline
            numberOfLines={7}
            placeholder={"Why do you need the book"}
            onChangeText={(text) => {
              this.setState({
                ReasonToRequest:text,
              });
            }}
            value={this.state.ReasonToRequest}
          />
          <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Text>Request</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
