import { all } from "redux-saga/effects";
import watchRegisterUserSaga from "./registerUser";
import watchLoginUserSaga from "./loginUser";
import watchFetchProducts from "./fetchProducts";
import watchFetchLocation from "./fetchLocations";
import watchLoading from "./loadingSaga";

export default function* rootSaga() {
  yield all([
    watchRegisterUserSaga(),
    watchLoginUserSaga(),
    watchFetchProducts(),
    watchFetchLocation(),
    watchLoading(),
  ]);
}
