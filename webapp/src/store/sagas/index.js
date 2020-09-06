import { all } from 'redux-saga/effects';
import watcherUsers from './users';
import watcherWorkspace from './workspace';
import watcherTask from './tasks';

export default function* rootSaga() {
  yield all([watcherTask(), watcherUsers(), watcherWorkspace()]);
}
