import { call, put, takeEvery } from "redux-saga/effects";
import { getProducts } from "../../../services/fetch";
import {
  getProductSaga,
  setParams,
  setProduct,
} from "../../counter/productSlice";

function* fetchProductSaga(action) {
  try {
    const result = yield call(getProducts, action.payload);
    yield put(setProduct(result.data.data));
    yield put(setParams(result.data.pagination));
    console.log(result);
  } catch (error) {
    console.log(error);
    return;
  }
}

export default function* watchFetchProducts() {
  yield takeEvery(getProductSaga.type, fetchProductSaga);
}
