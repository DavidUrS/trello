import {
  GET_WORKSPACE_INFO_REQUEST,
  GET_WORKSPACE_INFO_SUCCESS
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

export default actions;
