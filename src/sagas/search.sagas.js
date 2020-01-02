import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSearchNewsSuccess } from '../actions/index';
import { FETCH_SEARCH_NEWS_START } from '../actions/types';

export function* fetchSearchNewsAsync({ payload: { searchTerm, sortBy = '', language } }) {
  const response = yield axios.get(
    `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${sortBy}&language=${language}&apiKey=e5b7f867d3024285b78911aea71aaf23`
  );
  yield put(fetchSearchNewsSuccess(response.data));
}

export function* fetchSearchNewsStart() {
  yield takeLatest(FETCH_SEARCH_NEWS_START, fetchSearchNewsAsync);
}

export function* searchSagas() {
  yield all([call(fetchSearchNewsStart)]);
}
