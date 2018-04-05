import {combineReducers} from 'redux';
import thunkData from './thunkReducer';
import promiseData from './promiseReducer';
import asyncAwaitData from './asyncAwaitReducer';
import sagaData from './sagaReducer';
import observablesData from './observablesReducer';

const rootReducer = combineReducers({
  thunkData,
  promiseData,
  asyncAwaitData,
  sagaData,
  observablesData
});

export default rootReducer;