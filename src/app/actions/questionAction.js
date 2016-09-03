import * as api from '../util/igifuApi.js';

// ACTION TYPES ************************
export const CONNECT_API = 'CONNECT_API';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR';

export function connectedApi () {
  return {
      type: 'CONNECT_API',
      isFetching: false
  };
};

export function attempt () {
  return {
      type: 'LOADING'
  };
};

export function createQuestionError () {
  return {
      type: 'CREATE_QUESTION_ERROR',
      payload: { error }
  };
};

export function createQuestionSuccess(question) {
  console.log('question in action: ', question);
  return {
    type: 'CREATE_QUESTION_SUCCESS',
    payload: {
      question
    },
  };
};

//FETCH QUESTION ************************
export function fetchQuestions(questions) {
  return dispatch => {
    dispatch(attempt());
    api.fetchQuestions(quesitons).then((result) => {
			console.log('result in fetchQuestions: ', result);
      dispatch(connectedApi()); //Call action that sets isFetching to false
      dispatch(fetchQuestionsSuccess(result));
    }).catch((error) => {
    	dispatch(fetchQuestionsError(error));
    });
  };
}

//FETCH QUESTION SUCCESS ************************
export function fetchQuestionsSuccess(questions) {
  return {
    type: 'FETCH_QUESTIONS_SUCCESS',
    payload: { friends }
  };
};

//FETCH QUESTION ERROR ************************
export function fetchQuestionsError(error) {
  return {
    type: 'FETCH_QUESTIONS_ERROR',
     payload: { error }
  };
};


// CREATE QUESTION ************************
// export function createQuestion(question) {
//   console.log('question in createQuestion:', question)
//   return (dispatch) => {
//     dispatch(createQuestionSuccess(
//       _id,
//       question));
//     // }).catch((error)=>{
//     //   dispatch(createQuestionError(error));
//     // })
//     // api.postQuestion(question).then((result) => {
//     //   console.log('result: ', result);
//     //   dispatch(connectedApi()); //Call action that sets isFetching to false
//     //   dispatch(createQuestionSuccess(
//     //     result._id,
//     //     result.question));
//     // }).catch((error) => {
//     //   dispatch(createQuestionError(error));
//     // });
//   };
// };
