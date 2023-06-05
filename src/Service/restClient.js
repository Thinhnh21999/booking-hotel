import axios from "axios";

import { baseUrl } from "../constants";
import openNotification from "../component/Notification";
import history from "../util/history";
import { getLoginLocal } from "../util/loginLocal";

const token = getLoginLocal()?.token;
export default function RestClient(method, url, params, data) {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data, 
    params, 
    headers: `Bearer ${token}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const errors = (err || [])?.toJSON();
      if (errors.status === 401) {
        openNotification("error", "Bạn không có quyền");
        history.push("/");
      }
      if (errors.status === 404) {
        openNotification("error", "địa chỉ ko đúng");
      }
    });
}