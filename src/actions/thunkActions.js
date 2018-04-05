import { THUNK_FETCHING_USERS,
         THUNK_FETCHING_USERS_SUCCESS,
         THUNK_FETCHING_USERS_FAILURE,
         THUNK_SAVE_USER_SUCCESS,
         THUNK_SAVE_USER_FAILURE} from './actionTypes';
import usersApi from '../api/mockUsersDataApi';

export function getUsers() {
  return {
    type: THUNK_FETCHING_USERS
  }
}

export const getUsersSuccess = (users) => ({
  type: THUNK_FETCHING_USERS_SUCCESS,
  users
});

export const getUsersFailure = () => ({
  type: THUNK_FETCHING_USERS_FAILURE
});

function shouldFetchUsers(state) {
  if(state.isFetching) {
    return false;
  } else {
    return true;
  }
}

const fetchUsers = () => {
  return dispatch => {
    dispatch(getUsers());
    return usersApi.getAllUsers()
      .then(users => {
        dispatch(getUsersSuccess(users));
      })
      .catch(error => {
        dispatch(getUsersFailure());
      });
  };
};

export const fetchUsersIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    }
  }
};

export const saveUser = (user) => {
  return dispatch => {
    return usersApi.saveUser(user)
      .then(savedUser => {
        dispatch(saveUserSuccess(savedUser));
      })
      .catch(error => {
        dispatch(saveUserFailure());
      });
  };
};

export const saveUserSuccess = (user) => ({
  type: THUNK_SAVE_USER_SUCCESS,
  user
});

export const saveUserFailure = () => ({
  type: THUNK_SAVE_USER_FAILURE
});