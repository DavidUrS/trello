import watcherTask from './tasks';
import watcherUsers from './users';
import { all } from 'redux-saga/effects';
import watcherWorkspace from './workspace';

export default function* rootSaga() {
  yield all([watcherTask(), watcherUsers(), watcherWorkspace()]);
}
