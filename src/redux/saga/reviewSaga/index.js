import { call, put, takeEvery } from "redux-saga/effects";
import { getReviews, postReviews } from "../../../services/fetch";
import {
  getReviewSaga,
  setParamsReviews,
  setReviewSaga,
  postReviewSaga,
} from "../../slice/reviewSlice";

function* fetchReview(action) {
  try {
    const result = yield call(getReviews, action.payload);
    yield put(setReviewSaga(result.data.data));
    yield put(setParamsReviews(result.data.pagination));
  } catch (error) {
    console.log(error);
    return error;
  }
}

function* setReview(action) {
  try {
    const result = yield call(postReviews, action.payload);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function* watchReview() {
  yield takeEvery(getReviewSaga.type, fetchReview);
  yield takeEvery(postReviewSaga.type, setReview);
}
