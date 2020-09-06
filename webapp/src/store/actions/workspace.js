import {
  GET_WORKSPACE_INFO_REQUEST,
  GET_WORKSPACE_INFO_SUCCESS,
  DELETE_WORKSPACE_REQUEST
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

actions.deleteWorkspaceRequest = _id => {
  return {
    type: DELETE_WORKSPACE_REQUEST,
    payload: _id
  };
};

export default actions;
