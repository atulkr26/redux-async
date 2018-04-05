import { SAGA_FETCH_USERS, SAGA_SAVE_USER } from './actionTypes';

export const fetchUsers = () => {
  return dispatch => {
    dispatch({
      type: SAGA_FETCH_USERS,
      payload: {}
    });
  }
};

export const saveUser = (user) => {
  return dispatch => {
    dispatch({
      type: SAGA_SAVE_USER,
      user: user
    });
  }
};