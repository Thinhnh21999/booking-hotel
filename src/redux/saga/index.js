import { all } from "redux-saga/effects";
import watchRegisterUserSaga from "./registerUser";
import watchLoginUserSaga from "./loginUser";
import watchFetchProducts from "./fetchProducts";

export default function* rootSaga() {
  yield all([
    watchRegisterUserSaga(),
    watchLoginUserSaga(),
    watchFetchProducts(),
  ]);
}
