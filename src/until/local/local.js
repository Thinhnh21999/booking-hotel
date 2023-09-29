const LOGIN_KEY = "hotel_login";
const CHECKIN_CHECKOUT_KEY = "checkin_checkout";
const NUMBER_GUESTS_KEY = "number_guests";
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

export function setLocalCheckInOut(data) {
  localStorage.setItem(CHECKIN_CHECKOUT_KEY, JSON.stringify(data));
}

export function getLocalCheckInOut() {
  return JSON.parse(localStorage.getItem(CHECKIN_CHECKOUT_KEY));
}

export function clearLocalCheckInOut() {
  localStorage.removeItem(CHECKIN_CHECKOUT_KEY);
}

export function setLocalNumberGuests(data) {
  localStorage.setItem(NUMBER_GUESTS_KEY, JSON.stringify(data));
}

export function getLocalNumberGuests() {
  return JSON.parse(localStorage.getItem(NUMBER_GUESTS_KEY));
}

export function clearLocalNumberGuests() {
  localStorage.removeItem(NUMBER_GUESTS_KEY);
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
