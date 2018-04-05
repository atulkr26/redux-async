import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../epics';

export const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware(rootEpic);

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware(), sagaMiddleware, epicMiddleware )
  );
}

