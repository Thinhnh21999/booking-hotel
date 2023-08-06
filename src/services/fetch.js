import restClientUser from "./restClientUser";
import restClient from "./restClient";

export const registerUsers = (values) => {
  return restClientUser("post", "/auth/register", values, {});
};

export const loginUsers = (values) => {
  return restClientUser("post", "/auth/login", values, {});
};

export const getProducts = (params) => {
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
