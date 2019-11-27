import { all, call } from 'redux-saga/effects';
import { newsSagas } from './news.sagas';

export default function* rootSaga() {
  yield all([call(newsSagas)]);
}
