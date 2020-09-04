import {
  LOGOUT,
  SIGNIN_SUCCESS,
  GET_USER_INFO_SUCCESS,
  CREATE_WORKSPACE_SUCCESS
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGOUT:
    case SIGNIN_SUCCESS:
    case GET_USER_INFO_SUCCESS:
    case CREATE_WORKSPACE_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
}
