import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../component/header";
import Footer from "../component/footer";

export default function DefaultRouter({ Component, ...props }) {
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
