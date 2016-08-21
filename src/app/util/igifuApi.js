//export const API_ENDPOINT = 'http://localhost:3000/'; //local

export const API_ENDPOINT = 'https://enigmatic-journey-77794.herokuapp.com/';
export const questionPath = 'api/questions';

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
