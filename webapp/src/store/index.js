import rootSaga from './sagas';
import reducers from './reducers';
import createSagaMiddleawre from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleawre();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
