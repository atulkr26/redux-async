import { call, put } from "redux-saga/effects";
import usersApi from '../api/mockUsersDataApi';
import * as types from '../actions/actionTypes';

// fetch the user's list
export function* fetchUsers(action) {
  yield put ({type: types.SAGA_FETHING_USERS});
  // call the api to get the users list
  const users = yield call(usersApi.getAllUsers);

  // save the users in state
  yield put({
    type: types.SAGA_FETCH_USERS_SUCCESS,
    users,
  });
}

export function* saveUser(action) {
  yield put ({type: types.SAGA_SAVING_USER});
  // call the api to get the users list
  const savedUser = yield call(usersApi.saveUser, action.user);

  // save the users in state
  yield put({
    type: types.SAGA_SAVE_USER_SUCCESS,
    user: savedUser,
  });
}