import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import mysaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(
    promise,
    createLogger({ collapsed: true }),
    // sagaMiddleware
  ));
  // sagaMiddleware.run(mysaga);
export default store;
