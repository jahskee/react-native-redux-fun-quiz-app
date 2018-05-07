import { createStore } from "redux";

import { 
    updateCategories, 
    updateQuiz, 
    updateTimer,
    updateState,  
} from "./actions";
import reducer from "./reducer";

import API from "../api/api";

const TIME_ALLOWED_MIN = 0;
const TIME_ALLOWED_SEC = 8;


const store = createStore(reducer);

/*
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))
*/
categories = API.getCategories();

store.dispatch(updateCategories(categories));

store.dispatch(
  updateQuiz({
    totalQuestions: 5,
    question: {},
    totalCorrect: 0
  })
);

store.dispatch(
  updateTimer({ 
    min: TIME_ALLOWED_MIN,
    sec: TIME_ALLOWED_SEC    
  })
);

store.dispatch(updateState({
    button: "Start",
    answer: "",
    counter: 1,
    category: '',
}))

//console.log("Redux Store:");
console.log(store.getState());
export const initStore = {...store};

export default store;