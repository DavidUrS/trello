import { SINGNUP_REQUEST, SIGNIN_REQUEST } from '../actions/types';
import { userActions } from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signUp, signIn } from '../../api/users';

function* signUpRequest(action) {
  try {
    const userCreated = yield call(signUp, action.payload);
    yield put(userActions.signUpSuccess(userCreated.data));
  } catch (e) {
    console.log(e.message);
  }
}

function* signInRequest() {
  try {
    const userLogged = yield call(signIn, action.payload);
    yield put(userActions.signInSuccess(userLogged.data));
  } catch (e) {
    console.log(e.message);
  }
}

function* watcherUserSaga() {
  yield takeEvery(SINGNUP_REQUEST, signUpRequest);
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
}

export default watcherUserSaga;
