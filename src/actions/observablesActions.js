import { OBSERVABLES_FETCHING_USERS,
         OBSERVABLES_FETCH_USERS_SUCCESS,
         OBSERVABLES_FETCH_USERS_FAILURE,
         OBSERVABLES_SAVING_USER,
         OBSERVABLES_SAVE_USER_SUCCESS,
         OBSERVABLES_SAVE_USER_FAILURE } from './actionTypes';

export const fetchUsers = () => ({
  type: OBSERVABLES_FETCHING_USERS
});

export const getUsersSuccess = (users) => ({
  type: OBSERVABLES_FETCH_USERS_SUCCESS,
  users
});

export const getUsersFailure = () => ({
  type: OBSERVABLES_FETCH_USERS_FAILURE
});

export const saveUser = (user) => ({
  type: OBSERVABLES_SAVING_USER,
  user: user
});

export const saveUserSuccess = (user) => ({
  type: OBSERVABLES_SAVE_USER_SUCCESS,
  user: user
});

export const saveUserFailure = () => ({
  type: OBSERVABLES_SAVE_USER_FAILURE
});

