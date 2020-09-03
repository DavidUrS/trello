import { all } from 'redux-saga/effects';
import watcherUsers from './users';

export default function* rootSaga() {
  yield all([watcherUsers()]);
}
