import axios from "axios";

import openNotification from "../component/notifigation";
import { baseUrl } from "../constants.js";
import { createBrowserHistory } from "history";
import { getLocalLogin } from "../untill/loginLocal";

const history = createBrowserHistory();
const token = getLocalLogin()?.token;

export default function restClient(method, url, params = {}, data = {}) {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
    headers: `Bearer ${token}`,
  })
    .then((res) => {
      return res;
    })
    .then((res) => {
      if (res.status === 200) {
        openNotification("success", "Bạn nhập thành công");
      }
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
