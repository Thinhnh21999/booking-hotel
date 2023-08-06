import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/about";
import About from "./pages/contact";
import Listing from "./pages/listing/Search_Popup_Map";
import DetailHotel from "./pages/detailHotel";
import DetailRoom from "./pages/detailRoom";
import Checkout from "./pages/checkout";

import DefaultRouter from "./router/DefaultRouter";
import AuthRouter from "./router/authRouter.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingSg } from "./redux/slice/loadingSlice";

function App() {
  const loading = useSelector((state) => state.Loading.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingSg(true));
    setTimeout(() => {
      dispatch(setLoadingSg(false));
    }, 1500);
    return () => {
      clearTimeout(1500);
    };
  }, []);
  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter exact path="/" loading={loading} Component={Home} />
        <DefaultRouter
          exact
          path="/about"
          loading={loading}
          Component={About}
        />
        <DefaultRouter
          exact
          path="/listing"
          loading={loading}
          Component={Listing}
        />
        <DefaultRouter
          exact
          path="/detail-hotel/:nameHotel"
          loading={loading}
          Component={DetailHotel}
        />
        <DefaultRouter
          exact
          path="/detail-room/:idRoom"
          loading={loading}
          Component={DetailRoom}
        />
        <DefaultRouter
          exact
          path="/contact"
          loading={loading}
          Component={Contact}
        />
        <AuthRouter exact path="/checkout" Component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
