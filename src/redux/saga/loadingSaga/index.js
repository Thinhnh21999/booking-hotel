import { takeEvery, put } from "redux-saga/effects";
import { setLoading, setLoadingSg } from "../../slice/loadingSlice";

function* setLoadingSaga(action) {
  yield put(setLoading(action.payload));
}

export default function* watchLoading() {
  yield takeEvery(setLoadingSg.type, setLoadingSaga);
}
