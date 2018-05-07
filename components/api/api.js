/*jshint esversion: 6 */
//const category = ["science", "english"];
import data from "../data/data";

API = {};

API.getCategories = () => {
  return data.categories;
};

API.getQuestion = (category, index) => {
  let quiz = null;
  switch (category) {
    case "Science":
      quiz = data.Science[index];
      break;
    case "English":
      quiz = data.English[index];
      break;
  }

  let radio = [
    { label: quiz.a, value: "a" },
    { label: quiz.b, value: "b" },
    { label: quiz.c, value: "c" },
    { label: quiz.d, value: "d" }
  ];

  const question = {
    question: quiz.question,
    radio,
    answer: quiz.answer,
    correct: quiz.correct
  };
  // log('This is question:')
  // console.log(question)
  return question;
};

export default API;
