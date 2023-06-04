const LOGIN_KEY = "hotel_login";

export function setLocalLogin(data) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
}

export function getLocalLogin() {
  return JSON.parse(localStorage.getItem(LOGIN_KEY));
}

export function clearLocalLogin() {
  localStorage.clear(LOGIN_KEY);
}
