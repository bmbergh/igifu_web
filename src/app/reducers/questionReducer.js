export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR';

export default function questions(state=[], action){
  switch(action.type){
    case CREATE_QUESTION_SUCCESS:
    return [
        ...state,
        {
          question: action.payload.question,
        }
      ]
    case CREATE_QUESTION_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error
      });
    default:
      return state;
  };
};
