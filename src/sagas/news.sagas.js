import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTopNewsSuccess } from '../actions/index';

export function* fetchTopNewsAsync({ payload }) {
  try {
    const response = yield axios.get(
      `https://newsapi.org/v2/top-headlines${payload}apiKey=e5b7f867d3024285b78911aea71aaf23`
    );
    const topNews = yield response.data;
    yield put(fetchTopNewsSuccess(topNews));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchTopNewsStart() {
  yield takeLatest('FETCH_TOP_NEWS_START', fetchTopNewsAsync);
}

export function* newsSagas() {
  yield all([call(fetchTopNewsStart)]);
}
