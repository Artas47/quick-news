import { all, call } from 'redux-saga/effects';
import { newsSagas } from './news.sagas';
import { searchSagas } from './search.sagas';

export default function* rootSaga() {
  yield all([call(newsSagas), call(searchSagas)]);
}
