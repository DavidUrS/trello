import {
  DELETE_WORKSPACE_REQUEST,
  DELETE_WORKSPACE_SUCCESS,
  GET_WORKSPACE_INFO_SUCCESS,
  GET_WORKSPACE_INFO_REQUEST
} from './types';

const actions = {};

actions.getInfoRequest = _id => {
  return {
    type: GET_WORKSPACE_INFO_REQUEST,
    payload: _id
  };
};

actions.getInfoSuccess = workspace => {
  return {
    type: GET_WORKSPACE_INFO_SUCCESS,
    payload: workspace
  };
};

actions.deleteWorkspaceSuccess = workspace => {
  return {
    type: DELETE_WORKSPACE_SUCCESS,
    payload: workspace
  };
};

actions.deleteWorkspaceRequest = _id => {
  return {
    type: DELETE_WORKSPACE_REQUEST,
    payload: _id
  };
};

export default actions;
