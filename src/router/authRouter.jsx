import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header/index";
import Footer from "../component/footer";
import Anchor from "../component/anchor";
import ScrollUp from "../component/scrollUp";
import OpenNotification from "../component/notification";
import { getLocalLogin } from "../until/local";
import { setIsOpenModal } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function AuthRouter({ Component, ...props }) {
  const isAuth = useSelector((state) => state.Users.isAuth) || getLocalLogin();
  const dispatch = useDispatch();
  if (!isAuth) {
    OpenNotification("error", "Bạn cần đăng nhập để vào trang");
    dispatch(setIsOpenModal(true));
    return <Redirect to="/" />;
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
