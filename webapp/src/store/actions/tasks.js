import { CREATE_TASK_REQUEST, DELETE_TASK_REQUEST } from './types';

const actions = {};

actions.createTaskRequest = task => {
  return {
    type: CREATE_TASK_REQUEST,
    payload: task
  };
};

actions.deleteTaskRequest = task => {
  return {
    type: DELETE_TASK_REQUEST,
    payload: task
  };
};

export default actions;
