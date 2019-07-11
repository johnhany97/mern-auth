import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './errors';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
