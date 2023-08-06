import { call, put, takeEvery } from "redux-saga/effects";
import openNotification from "../../../component/notification";
import { loginUsers } from "../../../services/fetch";
import { setLocalLogin } from "../../../until/loginLocal";
import { commonLogin, setAuth } from "../../slice/userSlice";

function* loginUser(action) {
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

export default function* watchLoginUser() {
  yield takeEvery(commonLogin.type, loginUser);
}
