import { all } from "redux-saga/effects";
import watchFetchHotels from "./hotelSaga";
import watchFetchLocation from "./locationSaga";
import watchLoading from "./loadingSaga";
import watchBookRoom from "./bookRoomSaga";
import watchReview from "./reviewSaga";
import watchUser from "./userSaga";

export default function* rootSaga() {
  yield all([
    watchFetchHotels(),
    watchFetchLocation(),
    watchLoading(),
    watchBookRoom(),
    watchReview(),
    watchUser(),
  ]);
}
