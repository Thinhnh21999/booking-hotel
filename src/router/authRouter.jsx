import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header/index";
import Footer from "../component/footer";
import openNotification from "../component/Notification";
import { getLocalLogin } from "../untill/loginLocal";

export default function AuthRouter({ Component, ...props }) {
  const isAuth = useSelector((state) => state.Users.isAuth) || getLocalLogin();
  if (!isAuth) {
    openNotification("error", "Bạn không có quyền để vào trang");
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
