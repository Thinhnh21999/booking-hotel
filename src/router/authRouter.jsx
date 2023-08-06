import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header/index";
import Footer from "../component/footer";
import Anchor from "../component/anchor";
import ScrollUp from "../component/scrollUp";
import OpenNotification from "../component/notification";
import { getLocalLogin } from "../until/loginLocal";

export default function AuthRouter({ Component, ...props }) {
  const isAuth = useSelector((state) => state.Users.isAuth) || getLocalLogin();
  console.log(isAuth);
  if (!isAuth) {
    OpenNotification("error", "Bạn không có quyền để vào trang");
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
            <Anchor />
            <ScrollUp />
          </>
        );
      }}
    />
  );
}
