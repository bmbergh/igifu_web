import {combineReducers} from 'redux';
import questions from '../reducers/questionReducer'

const rootReducer = combineReducers({
  questions
})

export default rootReducer;
