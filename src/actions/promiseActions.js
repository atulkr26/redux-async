import { PROMISE_FETCH_USERS, PROMISE_SAVE_USER } from './actionTypes';
import usersApi from '../api/mockUsersDataApi';

export const fetchUsers = () => ({
  type: PROMISE_FETCH_USERS,
  payload: new Promise(resolve => {
    usersApi.getAllUsers()
      .then(users => {
        resolve(users);
      });
  })
});

function shouldFetchUsers(state) {
  if(state.isFetching) {
    return false;
  } else {
    return true;
  }
}

export const fetchUsersIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    }
  }
};

export const saveUser = (user) => ({
  type: PROMISE_SAVE_USER,
  payload: new Promise(resolve => {
    usersApi.saveUser(user)
      .then(savedUser => {
        resolve(savedUser);
      });
  })
});

