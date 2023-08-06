import { call, put, takeEvery } from "redux-saga/effects";
import { getReviews } from "../../../services/fetch";
import {
  getReviewSaga,
  setParamsReviews,
  setReviewSaga,
} from "../../slice/reviewSlice";

function* fetchReview(action) {
  try {
    const result = yield call(getReviews, action.payload);
    yield put(setReviewSaga(result.data.data));
    yield put(setParamsReviews(result.data.pagination));
    console.log(result);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function* watchFetchReview() {
  yield takeEvery(getReviewSaga.type, fetchReview);
}
