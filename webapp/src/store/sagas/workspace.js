import { GET_WORKSPACE_INFO_REQUEST } from '../actions/types';
import { workspaceActions } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getInfo } from '../../api/workspace';

function* getWorkspaceInfoRequest(action) {
  try {
    const workspace = yield call(getInfo, action.payload);
    const { info } = workspace.data;
    yield put(workspaceActions.getInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(GET_WORKSPACE_INFO_REQUEST, getWorkspaceInfoRequest);
}

export default watcherUserSaga;
