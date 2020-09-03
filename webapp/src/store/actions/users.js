import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SINGNUP_REQUEST,
  SINGNUP_SUCCESS
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

export default actions;
