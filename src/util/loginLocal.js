const LOGIN_KEY = "hotel_login_key";

export function setLoginLocal(data) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
}
export function getLoginLocal() {
  return JSON.parse(localStorage.getItem(LOGIN_KEY));
}
export function clearLoginLocal() {
  localStorage.removeItem(LOGIN_KEY);
}
