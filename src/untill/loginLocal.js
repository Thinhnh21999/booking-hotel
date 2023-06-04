const LOGIN_KEY = "hotel_login";
const IS_AUTH = "isAuth";

export function setLocalLogin(data) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
}

export function getLocalLogin() {
  return JSON.parse(localStorage.getItem(LOGIN_KEY));
}

export function clearLocalLogin() {
  localStorage.clear(LOGIN_KEY);
  localStorage.clear(IS_AUTH);
}

export const setAuthLocal = (isAuth) => {
  localStorage.setItem(IS_AUTH, JSON.stringify(isAuth));
};

export const getAuthLocal = () => {
  const isAuth = localStorage.getItem(IS_AUTH);
  return isAuth !== null ? JSON.parse(isAuth) : false;
};
