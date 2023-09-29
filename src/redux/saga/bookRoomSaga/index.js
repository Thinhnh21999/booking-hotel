import { call, put, takeEvery } from "redux-saga/effects";
import {
  deleteApiBookRoom,
  getBookRoom,
  postBookRoom,
} from "../../../services/fetch";
import { getLocalLogin } from "../../../until/local/local.js";
import {
  getBookRoomSg,
  setBookRoomSg,
  commonBookRoomSg,
  deleteBookRoomSg,
} from "../../slice/bookRoomSlice";

function* fetchBookRoom(action) {
  try {
    const result = yield call(getBookRoom, action.payload);
    yield put(setBookRoomSg(result.data));
  } catch (error) {
    console.log(error);
    return;
  }
}

function* setBookRoom(action) {
  try {
    const result = yield call(postBookRoom, action.payload);
  } catch (error) {
    console.log(error);
    return;
  }
}

function* deleteBookRoom(action) {
  try {
    const result = yield call(deleteApiBookRoom, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export default function* watchBookRoom() {
  yield takeEvery(getBookRoomSg.type, fetchBookRoom);
  yield takeEvery(commonBookRoomSg.type, setBookRoom);
  yield takeEvery(deleteBookRoomSg.type, deleteBookRoom);
}
