import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  users: []
};
export default function observablesReducer(state = initialState, action) {
  switch(action.type){
    case types.OBSERVABLES_FETCHING_USERS:
      state = Object.assign({}, state, {users: [], isFetching: true});
      break;
    case types.OBSERVABLES_FETCH_USERS_SUCCESS:
      state = Object.assign({}, state, {users: action.users, isFetching: false});
      break;
    case types.OBSERVABLES_SAVE_USER_SUCCESS:
      state = Object.assign({}, state);
      state.users = [...state.users, action.user];
      break;
    default:
      break;
  }
  return state;
}
