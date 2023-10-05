import { put, call, takeEvery } from "redux-saga/effects";
import openNotification from "../../../component/notification";
import { setLocalLogin } from "../../../until/local/local.js";
import {
  registerUsers,
  loginUsers,
  getUserRequest,
} from "../../../services/fetch";
import {
  commonRegister,
  setIsSignIn,
  commonLogin,
  setAuth,
  getUserSg,
} from "../../slice/userSlice";

function* registerUser(action) {
  try {
    const result = yield call(registerUsers, action.payload);
    yield put(setIsSignIn(true));
    yield call(openNotification, "success", "Bạn đã đăng ký thành công");
  } catch (error) {
    yield call(openNotification, "error", "Bạn đăng ký không thành công");
    console.log("error");
  }
}

function* loginUser(action) {
  try {
    const result = yield call(loginUsers, action.payload);
    yield put(setAuth(true));
    yield call(openNotification, "success", "Bạn đã đăng nhập thành công");
    yield setLocalLogin(result);
  } catch (error) {
    yield call(openNotification, "error", "Bạn đã đăng nhập không thành công");
    console.log("error");
    return;
  }
}

export default function* watchUser() {
  yield takeEvery(commonRegister.type, registerUser);
  yield takeEvery(commonLogin.type, loginUser);
}
