import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Listing from "./pages/listing";
import DetailHotel from "./pages/detailHotel";
import DetailRoom from "./pages/detailRoom";
import Checkout from "./pages/checkout";
import NotFound from "./component/notFound/index.jsx";

import DefaultRouter from "./router/defaultRouter/defaultRouter";
import AuthRouter from "./router/authRouter/authRouter.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isEqual } from "lodash";
import { getHotelSaga } from "./redux/slice/hotelSlice";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const loading = useSelector((state) => state.Loading.isLoading);
  const locationHotel = useSelector((state) => state.Locations.location);
  // ss trước và sau return ra giá trị hiện tại để giảm bớt reload
  const { hotels, params } = useSelector(
    (state) => state.Hotels,
    (prevHotels, newHotels) => {
      return (
        isEqual(prevHotels.params, newHotels.params) &&
        prevHotels.reviews?.length === newHotels.reviews?.length
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
    dispatch(
      getHotelSaga({
        _limit: 24,
      })
    );
  }, []);

  return (
    <div className="box-border m-0 p-0">
      <Switch>
        <DefaultRouter
          exact
          path="/"
          loading={loading}
          hotels={hotels}
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
          hotels={hotels}
          params={params}
          locationHotel={locationHotel}
          Component={Listing}
        />
        <DefaultRouter
          exact
          path="/detail-hotel/:nameHotel"
          hotels={hotels}
          paramsReviews={paramsReviews}
          reviews={reviews}
          loading={loading}
          Component={DetailHotel}
        />
        <DefaultRouter
          exact
          path="/detail-room/:nameHotel/:nameRoom"
          loading={loading}
          hotels={hotels}
          Component={DetailRoom}
        />
        <DefaultRouter
          exact
          path="/contact"
          loading={loading}
          Component={Contact}
        />
        <AuthRouter exact path="/checkout" Component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
