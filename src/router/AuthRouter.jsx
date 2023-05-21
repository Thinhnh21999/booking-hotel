import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../component/header";
import Footer from "../component/footer";
import openNotification from "../component/Notification";
import { getLoginLocal } from "../util/loginLocal";

export default function AuthRouter({ Component, ...props }) {
  const isAuth =
    useSelector((state) => state.Auth.isAuth) || getLoginLocal() || true;
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
            <Header></Header>
            <Component />
            <Footer />
          </>
        );
      }}
    />
  );
}
