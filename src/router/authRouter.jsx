import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function authRouter(auth) {
  if (auth) {
    return <Redirect to="/home"></Redirect>;
  }
}
