/*jshint esversion: 6 */
import React from "react";
import { Button, View, KeyboardAvoidingView, StyleSheet, Text, TextInput } from "react-native";
import {connect} from 'react-redux'
import { updateSettings} from '../redux/actions'
import Ionicons from "react-native-vector-icons/Ionicons";
import Config, { Color } from "../utils/Config";

class SettingsScreen extends React.Component {

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
              if(value > 10) {
                value = 10;         
              }
              this.props.updateSettings({max_questions: parseInt(value)})             
            }
          }
          value={''+this.props.settings.max_questions}
          keyboardType = 'numeric'
          selectTextOnFocus = {false}
          maxLength = {2}
        />

          <Button style={{marginTop: 60}} title='Back' onPress={()=>{ 
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

const mapStateToProps = state => ({
  settings: state.settings,
})
export default connect(mapStateToProps, {
  updateSettings, 
})(SettingsScreen)