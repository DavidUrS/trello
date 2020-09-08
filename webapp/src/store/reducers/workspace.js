import {
  CREATE_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  SEARCH_TASKS_REQUEST,
  CHANGE_STATUS_REQUEST,
  GET_WORKSPACE_INFO_SUCCESS,
  GET_WORKSPACE_INFO_REQUEST
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_WORKSPACE_INFO_SUCCESS:
      return { ...action.payload, pending: false };
    case GET_WORKSPACE_INFO_REQUEST:
      return { ...state, pending: true };
    case CREATE_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
    case CHANGE_STATUS_REQUEST:
    case SEARCH_TASKS_REQUEST:
      return { ...state, pending: true };
    default:
      return state;
  }
}
