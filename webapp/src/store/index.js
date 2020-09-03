import reducers from './reducers';
import createSagaMiddleawre from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

// const sagaMiddleware = createSagaMiddleawre();

const store = createStore(
  reducers,
  compose(
    // applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
