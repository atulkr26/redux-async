import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  users: []
};
export default function asyncAwaitReducer(state = initialState, action) {
  switch(action.type){
    case types.ASYNC_AWAIT_FETCHING_USERS:
      state = Object.assign({}, state, {users: [], isFetching: true});
      break;
    case types.ASYNC_AWAIT_FETCH_USERS_SUCCESS:
      state = Object.assign({}, state, {users: action.users, isFetching: false});
      break;
    case types.ASYNC_AWAIT_SAVE_USERS_SUCCESS:
      state = Object.assign({}, state);
      state.users = [...state.users, action.user];
      break;
    default:
      break;
  }
  return state;
}