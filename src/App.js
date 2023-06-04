import "./App.css";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/about/index.jsx";
import About from "./pages/contact/index.jsx";
import Listing from "./pages/listing/Search_Popup_Map/index.jsx";
import Hotel from "./pages/hotel/index.jsx";
import Zoom from "./pages/zoom/index.jsx";
import Checkout from "./pages/checkout";

import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

import AuthRouter from "./router/AuthRouter.jsx";
import DefaultRouter from "./router/DefaultRouter";

function App() {
  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter exact path="/" Component={Home} />
        <DefaultRouter exact path="/about" Component={About} />
        <DefaultRouter exact path="/listing" Component={Listing} />
        <DefaultRouter exact path="/hotel" Component={Hotel} />
        <DefaultRouter exact path="/zoom" Component={Zoom} />
        <DefaultRouter exact path="/contact" Component={Contact} />
        <AuthRouter exact path="/checkout" Component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
