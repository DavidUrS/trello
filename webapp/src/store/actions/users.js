import { SIGNIN, SINGNUP } from './types';

const actions = {};

actions.signIn = user => {
  return {
    type: SIGNIN,
    payload: user
  };
};

actions.signUp = user => {
  return {
    type: SINGNUP,
    payload: user
  };
};

export default actions;
