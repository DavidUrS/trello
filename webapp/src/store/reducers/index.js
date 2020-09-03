import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import userReducer from './users';

export default combineReducers({
  user: userReducer,
  form: formReducer
});
