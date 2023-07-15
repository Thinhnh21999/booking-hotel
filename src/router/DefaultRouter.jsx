import { Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header";
import Footer from "../component/footer";
import Loading from "../component/loading";

export default function DefaultRouter({ Component, loading, ...props }) {
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
          </>
        );
      }}
    />
  );
}
