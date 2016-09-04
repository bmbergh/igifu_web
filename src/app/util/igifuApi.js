//export const API_ENDPOINT = 'http://localhost:3000/'; //local

export const API_ENDPOINT = 'https://enigmatic-journey-77794.herokuapp.com/';
export const questionPath = 'api/questions';

//POST questions to DB
export function postQuestion(question) {
  console.log('in postQuestion: ', question);
  return fetch(`${API_ENDPOINT}${questionPath}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question })
    })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      return err;
    });
};

//FETCH all questions in DB
export function fetchQuestions(){
  return fetch(`${API_ENDPOINT}${questionPath}`)
    .then((response) =>{
      console.log('response in fetchQuestions: ', response);
      return response.json()
    })
    .catch((err)=>{
      return err;
    })
}
