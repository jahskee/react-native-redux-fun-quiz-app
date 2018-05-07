import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Color } from "../utils/Config";
import PropTypes from "prop-types";
import API from "../api/api";

import {connect} from 'react-redux'
import {updateState, incrementCount} from '../redux/actions'

export default class ViewResultScreen extends React.Component {
  state = { 
    ...this.props.navigation.state.params.quizResult,     
  };

 
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "View Result",
      headerTintColor: Color.primary
    };
  };

  onStartAgan = () => {
   
    category = this.props.navigation.state.params.category
    this.props.navigation.navigate("QuizPage", { category})
    console.log(this.props.navigation)
  }

  render() {
   // log(this.props.navigation)
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.result}>
            Total Correct: {this.state.totalCorrect}
          </Text>
          <Text style={styles.result}>
            Total Questions: {this.state.totalQuestions}
          </Text>
          <Button title='Start Again' onPress={this.onStartAgan}/>
        </View>

        <FlatList
          style={{ marginTop: 5, flex: 1, width: 300 }}
          renderItem={obj => <ResultRow item={obj.item} />}
          data={this.state.selectedAnswers}
        />
      </View>
    );
  }
}

const ResultRow = props => {
  
  const resultColor = props.item.correct? 'green':'red'
  return (
    <View style={{ padding: 5, width: gwidth }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: resultColor }}>
        {props.item.count}. {props.item.question}
      </Text>
      <View style={{ marginLeft: 20 }}>
        <Text>
          Answer: {props.item.answerLong}
        </Text>
        
        <ShowCorrect item={props.item}/>
        
      
      </View>
    </View>
  );
};

const ShowCorrect = props => {
  if (props.item.correct) return null
  return (    
    <Text>
      Correct: {props.item.correctLong}
    </Text>
  )
}

var {gheight, gwidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10    
  },
  result: {
    fontSize: 20,
    fontWeight: "bold"
    //paddingBottom: 20,
  }
});