import {
  LOGOUT,
  SINGNUP_REQUEST,
  SIGNIN_REQUEST,
  SINGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  CREATE_WORKSPACE_REQUEST,
  CREATE_WORKSPACE_SUCCESS,
  DELETE_WORKSPACE_REQUEST
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGOUT:
    case CREATE_WORKSPACE_SUCCESS:
      return { ...action.payload, pending: false };
    case CREATE_WORKSPACE_REQUEST:
      return { ...state, pending: true };
    case SINGNUP_REQUEST:
      return { ...state, pending: true };
    case SINGNUP_SUCCESS:
      return { ...action.payload, pending: false };
    case GET_USER_INFO_REQUEST:
      return { ...state, pending: true };
    case GET_USER_INFO_SUCCESS:
      return { ...action.payload, pending: false };
    case SIGNIN_SUCCESS:
      return { ...action.payload, pending: false };
    case SIGNIN_REQUEST:
      return { ...state, pending: true };
    case DELETE_WORKSPACE_REQUEST:
      return { ...state, pending: true };
    default:
      return state;
  }
}
