import { takeLatest, all } from "redux-saga/effects";
import * as types from '../actions/actionTypes';
import { fetchUsers, saveUser } from './users';

// main saga generators
// export default function* rootSaga() {
//   yield all ([
//     fork(takeLatest, types.SAGA_FETCH_USERS, fetchUsers),
//     fork(takeLatest, types.SAGA_SAVE_USER, saveUser)
//   ]);
//   //yield takeLatest(types.SAGA_FETCH_DATA, fetchData);
// }

export default function* rootSaga() {
  yield all ([
    takeLatest(types.SAGA_FETCH_USERS, fetchUsers),
    takeLatest(types.SAGA_SAVE_USER, saveUser)
  ]);
}