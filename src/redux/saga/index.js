import { call, put, takeEvery } from "redux-saga/effects";
import {
  setAuth,
  commonLogin,
  commonRegister,
  setIsSignIn,
} from "../counter/reducerSlice";
import { registerUsers, loginUsers } from "../../services/fetchUsers";
import openNotification from "../../component/Cotification";
import { setLocalLogin } from "../../untill/loginLocal";

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

export default function* mySaga() {
  yield takeEvery(commonRegister.type, registerUserSaga);
  yield takeEvery(commonLogin.type, loginUserSaga);
}
