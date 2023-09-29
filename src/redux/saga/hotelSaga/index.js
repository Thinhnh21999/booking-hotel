import { call, put, takeEvery } from "redux-saga/effects";
import { getHotels } from "../../../services/fetch";
import { getHotelSaga, setParams, setHotels } from "../../slice/hotelSlice";

function* fetchHotels(action) {
  try {
    const result = yield call(getHotels, action.payload);
    yield put(setHotels(result.data.data));
    yield put(setParams(result.data.pagination));
  } catch (error) {
    console.log(error);
    return;
  }
}

export default function* watchFetchHotels() {
  yield takeEvery(getHotelSaga.type, fetchHotels);
}
