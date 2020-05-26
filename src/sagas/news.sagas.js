import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_NEWS_START } from '../actions/types';
import { fetchNewsSuccess } from '../actions/index';

export function* fetchNewsAsync({ payload }) {
  try {
    const response = yield axios.get(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines${payload}apiKey=e5b7f867d3024285b78911aea71aaf23`
    );
    const topNews = yield response.data;
    yield put(fetchNewsSuccess(topNews));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchNewsStart() {
  yield takeLatest(FETCH_NEWS_START, fetchNewsAsync);
}

export function* newsSagas() {
  yield all([call(fetchNewsStart)]);
}
