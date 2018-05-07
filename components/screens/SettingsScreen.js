/*jshint esversion: 6 */
import React from "react";
import { Button, View, KeyboardAvoidingView, StyleSheet, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Config, { Color } from "../utils/Config";

export default class SettingsScreen extends React.Component {
  state = {
    maxQuestions: global.maxQuestions,
  }

  static navigationOptions = {
    headerTitle: "Settings",
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-options${focused ? "" : "-outline"}`}
        size={25}
        color={Color.primary}
      />
    )
  };
  render() { 
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.text}>Max Questions</Text>
        
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", width: 50, textAlign:'center', padding:5, fontSize: 18, marginBottom: 100 }}
          onChangeText={ value => 
            {
              if(value < 1 || !value) {
                value = 1
                
              };
              if(value > 20) {
                value = 20;         

              }
              this.setState({maxQuestions: parseInt(value)})
              global.maxQuestions = parseInt(value)
           
             
            }
          }
          value={''+this.state.maxQuestions}
          keyboardType = 'numeric'
            autoFocus = {true}
                maxLength = {2}
                />

          <Button style={{marginTop: 60}} title='Ok' onPress={()=>{ 
            //this.props.navigation.navigate("QuizPage", {...this.props, category: 'Science' })}
            this.props.navigation.navigate("QuizCategory")}
          }/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: "center",
    color: Color.primary,
    paddingBottom: 5,
  }
});