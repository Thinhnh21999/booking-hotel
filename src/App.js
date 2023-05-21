import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/about/index.jsx";
import About from "./pages/contact/index.jsx";
import Listing from "./pages/listing/Search_Popup_Map/index.jsx";
import Hotel from "./pages/hotel/index.jsx";
import Zoom from "./pages/zoom/index.jsx";
import Checkout from "./pages/checkout";
import AuthRouter from "./router/AuthRouter.jsx";
import DefaultRouter from "./router/DefaultRouter";

import { getLoginLocal } from "./util/loginLocal";
import { useEffect } from "react";
import RestClient from "./Service/restClient";

function App() {
  const isAuth = useSelector((state) => state.Auth.isAuth) || getLoginLocal();
  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter exact path="/" Component={Home} />
        <DefaultRouter exact path="/about" Component={About} />
        <DefaultRouter
          exact
          path="/hotel-search-popup-map"
          Component={Listing}
        />
        <DefaultRouter exact path="/hotel-detail" Component={Hotel} />
        <DefaultRouter exact path="/zoom-detail" Component={Zoom} />
        <DefaultRouter exact path="/contact" Component={Contact} />
        <AuthRouter exact path="/checkout" Component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
