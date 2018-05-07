import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {Provider} from 'react-redux'

import Ionicons from "react-native-vector-icons/Ionicons";
import QuizCategoryScreen from "./components/screens/QuizCategoryScreen";
import QuizPageScreen from "./components/screens/QuizPageScreen";
import ViewResultScreen from "./components/screens/ViewResultScreen";
import SettingsScreen from "./components/screens/SettingsScreen";
import Config, { Color } from "./components/utils/Config";
import store from './components/redux/store'

global.log = console.log;
console.warn = function() {};
global.maxQuestions = 10;

String.prototype.toProperCase = function() {
  //value = this.charAt(0).toUpperCase();
  this.replace(0, "H");
  return this.toString();
  //this = "sdfsdf";
  log(retval);
  return retval;
};

const MainStack = createStackNavigator(
  {
    QuizCategory: QuizCategoryScreen,
    QuizPage: QuizPageScreen,
    ViewResult: ViewResultScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'QuizCategory',
    //initialRouteName: "QuizPage",
    navigationOptions: {
      headerTintColor: Color.primary,
      headerStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) =>
    <Ionicons
      name={`ios-home${focused ? "" : "-outline"}`}
      size={25}
      color={`${focused ? Color.primary : "red"}`}
    />
};

const MainTabs = createBottomTabNavigator(
  {
    Home: MainStack,
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: Color.primary
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Main: MainTabs
});



export default class App extends React.Component {

   setMaxQuestions = (maxQuestions) => {
    this.setState({maxQuestions})
  }
  render() {
    return(
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
