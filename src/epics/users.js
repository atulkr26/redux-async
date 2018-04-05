import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { OBSERVABLES_FETCHING_USERS, OBSERVABLES_SAVING_USER } from '../actions/actionTypes';
import usersApi from '../api/mockUsersDataApi';
import { getUsersSuccess, getUsersFailure, saveUserSuccess, saveUserFailure } from '../actions/observablesActions'

export const fetchUsersEpic = action$ =>
  action$.ofType(OBSERVABLES_FETCHING_USERS)
    .mergeMap(action =>
      Observable.fromPromise(usersApi.getAllUsers())
        .map(response => getUsersSuccess(response))
        .catch(error => Observable.of(getUsersFailure()))
    );

export const saveUserEpic = action$ =>
  action$.ofType(OBSERVABLES_SAVING_USER)
    .mergeMap(action =>
      Observable.fromPromise(usersApi.saveUser(action.user))
        .map(response => saveUserSuccess(response))
        .catch(error => Observable.of(saveUserFailure()))
    );


