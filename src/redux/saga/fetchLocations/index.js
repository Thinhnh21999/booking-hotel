import { call, put, takeEvery } from "redux-saga/effects";
import { getLocations } from "../../../services/fetch";
import { getLocationSaga, setLocation } from "../../slice/locationSlice";

function* fetchLocationSaga(action) {
  try {
    const result = yield call(getLocations, action.payload);
    yield put(setLocation(result.data));
  } catch (error) {
    console.log(error);
    return;
  }
}

export default function* watchFetchLocation() {
  yield takeEvery(getLocationSaga.type, fetchLocationSaga);
}
