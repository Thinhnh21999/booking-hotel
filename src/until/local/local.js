const LOGIN_KEY = "hotel_login";
const CHECKIN_KEY = "check_in";
const USER_KEY = "User";
const BOOK_ROOM_KEY = "book_rooms";

export function setLocalLogin(data) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
}

export function getLocalLogin() {
  return JSON.parse(localStorage.getItem(LOGIN_KEY));
}

export function clearLocalLogin() {
  localStorage.removeItem(LOGIN_KEY);
}

export function setLocalCheckIn(data) {
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(data));
}

export function getLocalCheckIn() {
  return JSON.parse(localStorage.getItem(CHECKIN_KEY));
}

export function clearLocalCheckIn() {
  localStorage.removeItem(CHECKIN_KEY);
}

export function setLocalUser(data) {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

export function getLocalUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

export function clearLocalUser() {
  localStorage.removeItem(USER_KEY);
}

export function setLocalBookRoom(data) {
  localStorage.setItem(BOOK_ROOM_KEY, JSON.stringify(data));
}

export function getLocalBookRoom() {
  return JSON.parse(localStorage.getItem(BOOK_ROOM_KEY));
}

export function clearLocalBookRoom() {
  localStorage.removeItem(BOOK_ROOM_KEY);
}
