import { all } from "redux-saga/effects";
import watchRegisterUser from "./registerUser";
import watchLoginUser from "./loginUser";
import watchFetchProducts from "./fetchProducts";
import watchFetchLocation from "./fetchLocations";
import watchLoading from "./loadingSaga";
import watchPostReview from "./postReviewSaga";
import watchFetchReview from "./fetchReviewSaga";

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLoginUser(),
    watchFetchProducts(),
    watchFetchLocation(),
    watchPostReview(),
    watchFetchReview(),
    watchLoading(),
  ]);
}
