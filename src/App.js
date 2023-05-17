import "./App.css";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/about/index.jsx";
import About from "./pages/contact/index.jsx";
import Listing from "./pages/listing/Search Popup Map/index.jsx"
import Hotel from "./pages/hotel/index.jsx";
import Zoom from "./pages/zoom/index.jsx";

import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

import AuthRouter from "./router/authRouter.jsx";

function App() {
  const auth = useSelector((state) => state.Auth);
  console.log(auth);
  return (
    <div className="box-border m-0 p-0">
      <AuthRouter auth></AuthRouter>
      <Switch>
        <Route exact path="/home" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/listing" render={Listing} />
        <Route exact path="/hotel" render={Hotel} />
        <Route exact path="/zoom" render={Zoom} />
        <Route exact path="/contact" render={Contact} />
      </Switch>
    </div>
  );
}

export default App;
