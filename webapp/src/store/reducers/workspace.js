import { GET_WORKSPACE_INFO_SUCCESS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_WORKSPACE_INFO_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
}
