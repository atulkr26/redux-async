import { combineEpics } from 'redux-observable';
import { fetchUsersEpic, saveUserEpic } from './users';

export const rootEpic = combineEpics(
  fetchUsersEpic,
  saveUserEpic
);
