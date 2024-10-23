import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import
import { composeWithDevTools } from '@redux-devtools/extension';
import { authReducer, patientReducer } from './reducers';

const reducer = combineReducers({
  auth: authReducer,
  patientData: patientReducer,
});

const initialState = {};
const middleware = [thunk];

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );
}

export default store;
