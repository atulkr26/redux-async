import { ASYNC_AWAIT_FETCHING_USERS,
  ASYNC_AWAIT_FETCH_USERS_SUCCESS,
  ASYNC_AWAIT_FETCH_USERS_FAILURE,
  ASYNC_AWAIT_SAVING_USERS,
  ASYNC_AWAIT_SAVE_USERS_SUCCESS,
  ASYNC_AWAIT_SAVE_USERS_FAILURE } from './actionTypes';
import usersApi from '../api/mockUsersDataApi';

export function getUsers() {
  return {
    type: ASYNC_AWAIT_FETCHING_USERS
  }
}

export function getUsersSuccess(users) {
  return {
    type: ASYNC_AWAIT_FETCH_USERS_SUCCESS,
    users
  }
}

export function getUsersFailure() {
  return {
    type: ASYNC_AWAIT_FETCH_USERS_FAILURE
  }
}

function shouldFetchUsers(state) {
  if(state.isFetching) {
    return false;
  } else {
    return true;
  }
}

const fetchUsers = () => {
  return async(dispatch) => {
    try {
      dispatch(getUsers());
      const users = await usersApi.getAllUsers();
      dispatch(getUsersSuccess(users));
    } catch(e) {
      dispatch(getUsersFailure());
    }
  };
};

export const fetchUsersIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    }
  }
};

function savingUser() {
  return {
    type: ASYNC_AWAIT_SAVING_USERS
  }
}

function saveUserSuccess(user) {
  return {type: ASYNC_AWAIT_SAVE_USERS_SUCCESS, user}
}

function saveUserFailure() {
  return {
    type: ASYNC_AWAIT_SAVE_USERS_FAILURE
  }
}

export function saveUser(user) {
  return async(dispatch) => {
    try {
      dispatch(savingUser());
      let savedUser = await usersApi.saveUser(user);
      dispatch(saveUserSuccess(savedUser));
    } catch(e) {
      dispatch(saveUserFailure());
    }
  };
}