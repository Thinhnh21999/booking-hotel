import { call, put, takeEvery } from "redux-saga/effects";
import { getProducts } from "../../../services/fetch";
import {
  getProductSaga,
  setParams,
  setProduct,
} from "../../slice/productSlice";

function* fetchProduct(action) {
  try {
    const result = yield call(getProducts, action.payload);
    yield put(setProduct(result.data.data));
    yield put(setParams(result.data.pagination));
  } catch (error) {
    console.log(error);
    return;
  }
}

export default function* watchFetchProducts() {
  yield takeEvery(getProductSaga.type, fetchProduct);
}
