import { SIGNIN } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SIGNIN:
      return [...state, action.payload];

    default:
      return state;
  }
}
