import { all } from "redux-saga/effects";
import watchFetchProducts from "./fetchProducts";
import watchFetchLocation from "./fetchLocations";
import watchLoading from "./loadingSaga";
import watchBookRoom from "./bookRoomSaga";
import watchReview from "./reviewSaga";
import watchUser from "./userSaga";

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchLocation(),
    watchLoading(),
    watchBookRoom(),
    watchReview(),
    watchUser(),
  ]);
}
