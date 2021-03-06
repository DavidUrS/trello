import {
  CREATE_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  ARCHIVE_TASK_REQUEST,
  SEARCH_TASKS_REQUEST,
  CHANGE_STATUS_REQUEST
} from '../actions/types';
import { workspaceActions } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { create, deleteTask, changeStatusTask } from '../../api/tasks';
import { getInfo } from '../../api/workspace';
import { searchTask, archiveTask } from '../../api/tasks';

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

function* changeStatusRequest(action) {
  try {
    yield call(changeStatusTask, action.payload);
    const workspace = yield call(getInfo, action.payload.workspace);
    const { info } = workspace.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* searchTaskRequest(action) {
  try {
    const workspaceWithTasks = yield call(searchTask, action.payload);
    const { info } = workspaceWithTasks.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* archiveTaskRequest(action) {
  try {
    const workspaceWithTasks = yield call(archiveTask, action.payload);
    const { info } = workspaceWithTasks.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(CREATE_TASK_REQUEST, createTaskRequest);
  yield takeEvery(DELETE_TASK_REQUEST, deleteTaskRequest);
  yield takeEvery(SEARCH_TASKS_REQUEST, searchTaskRequest);
  yield takeEvery(ARCHIVE_TASK_REQUEST, archiveTaskRequest);
  yield takeEvery(CHANGE_STATUS_REQUEST, changeStatusRequest);
}

export default watcherUserSaga;
