import { put, call, takeEvery } from "redux-saga/effects";
import openNotification from "../../../component/notifigation";
import { registerUsers } from "../../../services/fetch";
import { commonRegister, setIsSignIn } from "../../counter/userSlice";

function* registerUserSaga(action) {
  try {
    const result = yield call(registerUsers, action.payload);
    yield put(setIsSignIn(true));
    yield call(openNotification, "success", "Bạn đã đăng ký thành công");
  } catch (error) {
    yield call(openNotification, "error", "Bạn đăng ký không thành công");
    console.log("error");
  }
}

export default function* watchRegisterUserSaga() {
  yield takeEvery(commonRegister.type, registerUserSaga);
}
