import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header";
import Footer from "../component/footer";
import { getLocalLogin } from "../untill/loginLocal";
import openNotification from "../component/notifigation";

export default function AuthRouter({ Component, ...props }) {
  const isAuth =
    useSelector((state) => state.counter.isAuth) || getLocalLogin();
  console.log(isAuth);
  if (!isAuth) {
    openNotification("error", " Bạn không có quyền truy cập");
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Route
      {...props}
      render={() => {
        return (
          <>
            <Header />
            <Component />
            <Footer />
          </>
        );
      }}
    />
  );
}
