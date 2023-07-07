import { call, put, takeEvery } from "redux-saga/effects";
import openNotification from "../../../component/notifigation";
import { loginUsers } from "../../../services/fetch";
import { setLocalLogin } from "../../../untill/loginLocal";
import { commonLogin, setAuth } from "../../counter/userSlice";

function* loginUserSaga(action) {
  try {
    const result = yield call(loginUsers, action.payload);
    yield put(setAuth(true));
    yield call(openNotification, "success", "Bạn đã đăng nhập thành công");
    yield setLocalLogin(action.payload);
  } catch (error) {
    yield call(openNotification, "error", "Bạn đã đăng nhập không thành công");
    console.log("error");
    return;
  }
}

export default function* watchLoginUserSaga() {
  yield takeEvery(commonLogin.type, loginUserSaga);
}
