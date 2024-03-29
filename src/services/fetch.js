import restClientUser from "./restClientUser";
import restClient from "./restClient";

export const registerUsers = (values) => {
  return restClientUser("post", "/auth/register", values, {});
};

export const loginUsers = (values) => {
  return restClientUser("post", "/auth/login", values, {});
};

export const getHotels = (params) => {
  return restClient("get", "/hotels", params, {});
};

export const getLocations = (params) => {
  return restClient("get", "/location", params, {});
};

export const postReviews = (data) => {
  return restClient("post", "/reviews", {}, data);
};

export const putReviews = (value) => {
  return restClient("put", "/reviews", value, {});
};

export const getReviews = (params) => {
  return restClient("get", "/reviews", params, {});
};

export const getBookRoom = (params) => {
  return restClient("get", "/bookRoom", params, {});
};

export const postBookRoom = (data) => {
  return restClient("post", "/bookRoom", {}, data);
};

export const deleteApiBookRoom = (roomId) => {
  return restClient("delete", `/bookRoom/${roomId}`, {}, roomId);
};
