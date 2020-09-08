import userReducer from './users';
import { combineReducers } from 'redux';
import workspaceReducer from './workspace';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  workspace: workspaceReducer
});
