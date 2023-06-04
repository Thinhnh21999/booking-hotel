import RestClient from "./restClient";

export const registerUsers = (values) => {
  return RestClient("post", "/auth/register", values, {});
};

export const loginUsers = (values) => {
  return RestClient("post", "/auth/login", values, {});
};
