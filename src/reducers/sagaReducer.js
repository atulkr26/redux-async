import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  users: []
};
export default function sagaReducer(state = initialState, action) {
  switch(action.type){
    case types.SAGA_FETHING_USERS:
      state = Object.assign({}, state, {users: [], isFetching: true});
      break;
    case types.SAGA_FETCH_USERS_SUCCESS:
      state = Object.assign({}, state, {users: action.users, isFetching: false});
      break;
    case types.SAGA_SAVE_USER_SUCCESS:
      state = Object.assign({}, state);
      state.users = [...state.users, action.user];
      break;
    default:
      break;
  }
  return state;
}