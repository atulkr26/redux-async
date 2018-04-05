import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  users: []
};

export default function thunkReducer(state = initialState, action) {
  switch(action.type){
    case types.THUNK_FETCHING_USERS:
      state = Object.assign({}, state, {users: [], isFetching: true});
      break;
    case types.THUNK_FETCHING_USERS_SUCCESS:
      state = Object.assign({}, state, {users: action.users, isFetching: false});
      break;
    case types.THUNK_FETCHING_USERS_FAILURE:
      state = Object.assign({}, {users: [], isFetching: false});
      break;
    case types.THUNK_SAVE_USER_SUCCESS:
      state = Object.assign({}, state);
      state.users = [...state.users, action.user];
      break;
    default:
      break;
  }
  return state;
}