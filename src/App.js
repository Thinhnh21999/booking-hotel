import "./App.css";
import Home from "./pages/home/home.jsx";
import Contact from "./pages/about/about.jsx";
import About from "./pages/contact/contact.jsx";
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
    <div>
      <AuthRouter auth></AuthRouter>
      <ul className="">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/home" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/contact" render={Contact} />
      </Switch>
    </div>
  );
}

export default App;
