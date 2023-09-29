import { Route } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../component/header";
import Footer from "../component/footer";
import Loading from "../component/loading";
import Anchor from "../component/anchor";
import ScrollUp from "../component/scrollUp";

export default function DefaultRouter({
  Component,
  loading,
  params,
  locationHotel,
  paramsReviews,
  reviews,
  products,
  ...props
}) {
  return (
    <Route
      {...props}
      render={() => {
        return (
          <>
            {loading ? <Loading /> : ""}
            <Header />
            <Component
              products={products}
              params={params}
              locationHotel={locationHotel}
              reviews={reviews}
              paramsReviews={paramsReviews}
            />
            <Footer />
            <Anchor />
            <ScrollUp />
          </>
        );
      }}
    />
  );
}
