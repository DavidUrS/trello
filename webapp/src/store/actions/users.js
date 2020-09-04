import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SINGNUP_REQUEST,
  SINGNUP_SUCCESS,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  CREATE_WORKSPACE_REQUEST,
  CREATE_WORKSPACE_SUCCESS
} from './types';

const actions = {};

actions.signInRequest = user => {
  return {
    type: SIGNIN_REQUEST,
    payload: user
  };
};

actions.signInSuccess = user => {
  return {
    type: SIGNIN_SUCCESS,
    payload: user
  };
};

actions.signUpRequest = user => {
  return {
    type: SINGNUP_REQUEST,
    payload: user
  };
};

actions.signUpSuccess = user => {
  return {
    type: SINGNUP_SUCCESS,
    payload: user
  };
};

actions.createWorkspaceRequest = workspace => {
  return {
    type: CREATE_WORKSPACE_REQUEST,
    payload: workspace
  };
};

actions.createWorkspaceSuccess = user => {
  return {
    type: CREATE_WORKSPACE_SUCCESS,
    payload: user
  };
};

actions.getUserInfoRequest = () => {
  return {
    type: GET_USER_INFO_REQUEST
  };
};

actions.getUserInfoSuccess = user => {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload: user
  };
};

export default actions;
