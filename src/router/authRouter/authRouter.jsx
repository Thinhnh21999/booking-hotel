import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "../../component/header/index";
import Footer from "../../component/footer";
import Anchor from "../../component/anchor";
import ScrollUp from "../../component/scrollUp";
import Loading from "../../component/loading";
import OpenNotification from "../../component/notification";
import { getLocalLogin } from "../../until/local/local.js";
import { setIsOpenModal } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AuthRouter({ Component, loading, ...props }) {
  const isAuth = useSelector((state) => state.Users.isAuth) || getLocalLogin();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      OpenNotification("error", "Bạn cần đăng nhập để vào trang");
      dispatch(setIsOpenModal(true));
    }
  }, [isAuth, dispatch]);

  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...props}
      render={() => {
        return (
          <>
            {loading ? <Loading /> : ""}
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
