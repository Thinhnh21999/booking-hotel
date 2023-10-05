import { Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../../component/header";
import Footer from "../../component/footer";
import Loading from "../../component/loading";
import Anchor from "../../component/anchor";
import ScrollUp from "../../component/scrollUp";

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
            <Anchor />
            <ScrollUp />
          </>
        );
      }}
    />
  );
}
