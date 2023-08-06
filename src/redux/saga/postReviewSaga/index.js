import { call, put, takeEvery } from "redux-saga/effects";
import { postReviews } from "../../../services/fetch";
import { postReviewSaga } from "../../slice/reviewSlice";

function* setReview(action) {
  try {
    const result = yield call(postReviews, action.payload);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function* watchPostReview() {
  yield takeEvery(postReviewSaga.type, setReview);
}
