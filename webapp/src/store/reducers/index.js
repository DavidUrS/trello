import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import userReducer from './users';
import workspaceReducer from './workspace';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  workspace: workspaceReducer
});
