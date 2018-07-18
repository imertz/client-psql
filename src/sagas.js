import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import numberRandom from "number-random";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchDog() {
  return axios({
    method: "get",
    url: `/api/puppies/${numberRandom(1, 4)}`
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.data;

    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
