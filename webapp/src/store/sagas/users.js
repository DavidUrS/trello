import {
  SIGNIN_REQUEST,
  SINGNUP_REQUEST,
  GET_USER_INFO_REQUEST,
  CREATE_WORKSPACE_REQUEST
} from '../actions/types';
import { userActions } from '../actions';
import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { signUp, signIn, createWorkspace, getUserInfo } from '../../api/users';
import { decode } from 'jsonwebtoken';

function* signUpRequest(action) {
  try {
    const userCreated = yield call(signUp, action.payload);
    yield put(userActions.signUpSuccess(userCreated.data));
  } catch (e) {
    console.log(e.message);
  }
}

function* signInRequest(action) {
  try {
    const userLogged = yield call(signIn, action.payload);
    const { info, msg } = userLogged.data;
    if (info) {
      const user = decode(info.token);
      if (user._id) window.localStorage.setItem('token', info.token);
      yield put(userActions.signInSuccess(user));
    } else {
      yield put(userActions.signInSuccess({ msg }));
    }
  } catch (e) {
    console.log(e.message);
  }
}

function* createWorkspaceRequest(action) {
  try {
    const userUpdated = yield call(createWorkspace, action.payload);
    const { info } = userUpdated.data;
    yield put(userActions.createWorkspaceSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* getUserInfoRequest() {
  try {
    const user = yield call(getUserInfo);
    const { info } = user.data;
    yield put(userActions.getUserInfoSuccess(info));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
  yield takeEvery(SINGNUP_REQUEST, signUpRequest);
  yield takeEvery(GET_USER_INFO_REQUEST, getUserInfoRequest);
  yield takeEvery(CREATE_WORKSPACE_REQUEST, createWorkspaceRequest);
}

export default watcherUserSaga;
