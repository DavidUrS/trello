import { all } from 'redux-saga/effects';
import watcherUsers from './users';
import watcherWorkspace from './workspace';

export default function* rootSaga() {
  yield all([watcherUsers(), watcherWorkspace()]);
}
