import axios from "axios";

import openNotification from "../component/notification";
import { baseUrl } from "../constants.js";
import { createBrowserHistory } from "history";
import { getLocalLogin } from "../until/local/local.js";

const history = createBrowserHistory();
const token = getLocalLogin()?.access_token;

export default function restClient(method, url, params = {}, data = {}) {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res;
    })
    .then((res) => {
      // if (res.status === 200) {
      //   console.log("render thanh cong");
      // }
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
      // const errors = (err || [])?.toJSON();
      // if (errors.status === 401) {
      //   openNotification("error", "Bạn không có quyền");
      //   history.push("/");
      // }
      // if (errors.status === 404) {
      //   openNotification("error", "địa chỉ ko đúng");
      // }
      // return err;
    });
}
