import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/about";
import About from "./pages/contact";
import Listing from "./pages/listing/Search_Popup_Map";
import DetailHotel from "./pages/detailHotel";
import DetailRoom from "./pages/detailRoom";
import Checkout from "./pages/checkout";

import DefaultRouter from "./router/defaultRouter";
import AuthRouter from "./router/authRouter.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingSg } from "./redux/slice/loadingSlice";
import { isEqual } from "lodash";

function App() {
  const loading = useSelector((state) => state.Loading.isLoading);
  const locationHotel = useSelector((state) => state.Locations.location);
  // ss trước và sau return ra giá trị hiện tại để giảm bớt reload
  const { products, params } = useSelector(
    (state) => state.Products,
    (prevProducts, newProducts) => {
      return (
        isEqual(prevProducts.params, newProducts.params) &&
        prevProducts.reviews?.length === newProducts.reviews?.length
      );
    }
  );

  const { reviews, paramsReviews } = useSelector(
    (state) => state.Reviews,
    (prevReviews, newReviews) => {
      // isEqual là pt ss của thư viện lodash
      return (
        isEqual(prevReviews.paramsReviews, newReviews.paramsReviews) &&
        newReviews.reviews?.length === prevReviews.reviews?.length
      );
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingSg(true));
    const timeoutId = setTimeout(() => {
      dispatch(setLoadingSg(false));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter
          exact
          path="/"
          loading={loading}
          products={products}
          params={params}
          locationHotel={locationHotel}
          Component={Home}
        />
        <DefaultRouter
          exact
          path="/about"
          loading={loading}
          Component={About}
        />
        <DefaultRouter
          exact
          path="/listing"
          loading={loading}
          products={products}
          params={params}
          locationHotel={locationHotel}
          Component={Listing}
        />
        <DefaultRouter
          exact
          path="/detail-hotel/:nameHotel"
          products={products}
          paramsReviews={paramsReviews}
          reviews={reviews}
          loading={loading}
          Component={DetailHotel}
        />
        <DefaultRouter
          exact
          path="/detail-room/:nameHotel/:nameRoom"
          loading={loading}
          products={products}
          Component={DetailRoom}
        />
        <DefaultRouter
          exact
          path="/contact"
          loading={loading}
          Component={Contact}
        />
        <AuthRouter exact path="/checkout" Component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
