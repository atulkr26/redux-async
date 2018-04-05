import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  users: []
};

export default function promiseReducer(state = initialState, action) {
  switch(action.type){
    case `${types.PROMISE_FETCH_USERS}_PENDING`:
      state = Object.assign({}, state, {users: [], isFetching: true});
      break;
    case `${types.PROMISE_FETCH_USERS}_FULFILLED`:
      state = Object.assign({}, state, {users: action.payload, isFetching: false});
      break;
    case `${types.PROMISE_FETCH_USERS}_REJECTED`:
      state = Object.assign({}, {users: [], isFetching: false});
      break;
    case `${types.PROMISE_SAVE_USER}_PENDING`:
      break;
    case `${types.PROMISE_SAVE_USER}_FULFILLED`:
      state = Object.assign({}, state);
      state.users = [...state.users, action.payload];
      break;
    default:
      break;
  }
  return state;
}