import { createStore } from "redux";

import {
  updateCategories,
  updateQuiz,
  updateTimer,
  updateState,
  updateSettings
} from "./actions";
import reducer from "./reducer";
import API from "../api/api";

// default setting values
const MAX_MIN = 0;
const MAX_SEC = 8;
const MAX_QUESTIONS = 5;

const store = createStore(reducer);

// ================ Initialize Store ==================

// initialize store with values
categories = API.getCategories();
store.dispatch(updateCategories(categories));

store.dispatch(
  updateSettings({
    max_min: MAX_MIN,
    max_sec: MAX_SEC,
    max_questions: MAX_QUESTIONS
  })
);

store.dispatch(
  updateQuiz({
    totalQuestions: 5,
    question: {},
    totalCorrect: 0
  })
);

store.dispatch(
  updateTimer({
    min: MAX_MIN,
    sec: MAX_SEC
  })
);

store.dispatch(
  updateState({
    button: "Start",
    answer: "",
    counter: 1,
    category: ""
  })
);

// ================ Initialize Store ==================

console.log(store.getState());
export default store;