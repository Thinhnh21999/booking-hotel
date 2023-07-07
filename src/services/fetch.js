import restClientUser from "./restClientUser";
import restClient from "./restClient";

export const registerUsers = (values) => {
  return restClientUser("post", "/auth/register", values, {});
};

export const loginUsers = (values) => {
  return restClientUser("post", "/auth/login", values, {});
};

export const getProducts = (params) => {
  return restClient("get", "/location", params, {});
};
