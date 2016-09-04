import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunk)(createStore);

/*export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}*/

export default function configureStore(initialState) {
  return createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));
}
