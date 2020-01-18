import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    JOB_FETCH_REQUESTED,
    JOB_FETCH_SUCCEEDED,
    JOB_FETCH_FAILED,
} from './constants/ActionTypes';
import Api from '../../config/configip';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(`${Api}/posts`, action.payload.userId);
      yield put({type: JOB_FETCH_SUCCEEDED, user: user});
   } catch (e) {
      yield put({type: JOB_FETCH_FAILED, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery(JOB_FETCH_REQUESTED, fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(JOB_FETCH_REQUESTED, fetchUser);
}

export default mySaga;
