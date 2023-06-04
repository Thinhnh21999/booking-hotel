import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home/index.jsx";
import Contact from "./pages/about/index.jsx";
import About from "./pages/contact/index.jsx";
import Listing from "./pages/listing/Search_Popup_Map/index.jsx";
import Hotel from "./pages/hotel/index.jsx";
import Room from "./pages/room/index.jsx";
import Checkout from "./pages/checkout";

import DefaultRouter from "./router/DefaultRouter";
import AuthRouter from "./router/authRouter.jsx";

function App() {
  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter exact path="/" Component={Home} />
        <DefaultRouter exact path="/about" Component={About} />
        <DefaultRouter exact path="/listing" Component={Listing} />
        <DefaultRouter exact path="/hotel-detail/:idHotel" Component={Hotel} />
        <DefaultRouter exact path="/room-detail/:idRoom" Component={Room} />
        <DefaultRouter exact path="/contact" Component={Contact} />
        <AuthRouter exact path="/checkout" Component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
