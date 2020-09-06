import {
  GET_WORKSPACE_INFO_REQUEST,
  DELETE_WORKSPACE_REQUEST
} from '../actions/types';
import { workspaceActions, userActions } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getInfo, deleteWorkspace } from '../../api/workspace';
import { getUserInfo } from '../../api/users';

function* getWorkspaceInfoRequest(action) {
  try {
    const workspace = yield call(getInfo, action.payload);
    const { info } = workspace.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* deleteWorkspaceRequest(action) {
  try {
    yield call(deleteWorkspace, action.payload);
    const user = yield call(getUserInfo);
    const { info } = user.data;
    yield put(userActions.getUserInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(GET_WORKSPACE_INFO_REQUEST, getWorkspaceInfoRequest);
  yield takeEvery(DELETE_WORKSPACE_REQUEST, deleteWorkspaceRequest);
}

export default watcherUserSaga;
