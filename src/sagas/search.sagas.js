import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchSearchNewsSuccess } from './../actions/index';
import axios from 'axios';
//newsapi.org/v2/everything?q=bitcoin&apiKey=e5b7f867d3024285b78911aea71aaf23

export function* fetchSearchNewsAsync({ payload }) {
  const response = yield axios.get(
    `https://newsapi.org/v2/everything?q=${payload}&language=en&apiKey=e5b7f867d3024285b78911aea71aaf23`,
  );
  yield put(fetchSearchNewsSuccess(response.data));
  console.log(response.data);
}

export function* fetchSearchNewsStart() {
  yield takeLatest('FETCH_SEARCH_NEWS_START', fetchSearchNewsAsync);
}

export function* searchSagas() {
  yield all([call(fetchSearchNewsStart)]);
}
