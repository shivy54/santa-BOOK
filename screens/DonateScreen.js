import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import db from "../config";

import firebase from "firebase";

import { ListItem } from "react-native-elements";
import MyHeader from "../components/MyHeader";
import { FlatList } from "react-native-gesture-handler";

export default class DonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedBookList: [],
    };
    this.requestRef = null;
  }

  getRequestedBookList = () => {
    this.requestRef = db.collection("requestedBooks").onSnapshot((snapshot) => {
      var requstedList = snapshot.docs.map((document) => {
        document.data();
      });
      this.setState({
        requestedBookList: requstedList,
      });
    });
  };
  componentDidMount() {
    this.getRequestedBookList();
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.Book_Name}
        subTitle={item.Reason_To_Request}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "black" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Donate Books" />
        <View style={{ flex: 1 }}>
          {this.state.requestedBookList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List is incoming!</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBookList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
  },
});
