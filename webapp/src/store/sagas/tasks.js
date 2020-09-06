import { CREATE_TASK_REQUEST, DELETE_TASK_REQUEST } from '../actions/types';
import { workspaceActions } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { create, deleteTask } from '../../api/tasks';

function* createTaskRequest(action) {
  try {
    const workspaceWithTasks = yield call(create, action.payload);
    const { info } = workspaceWithTasks.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* deleteTaskRequest(action) {
  try {
    const workspaceWithTasks = yield call(deleteTask, action.payload);
    const { info } = workspaceWithTasks.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(CREATE_TASK_REQUEST, createTaskRequest);
  yield takeEvery(DELETE_TASK_REQUEST, deleteTaskRequest);
}

export default watcherUserSaga;
