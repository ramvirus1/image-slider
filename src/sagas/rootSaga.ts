import { all, fork } from "redux-saga/effects";

import { watchImageAPIFetcher } from './imageSagas';

export function* rootSaga() {
    yield all([
      fork(watchImageAPIFetcher),
    ]);
  }