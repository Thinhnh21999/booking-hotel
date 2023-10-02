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
import {
  Route,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlzYMk9BfmGyr6mN2Ig-959jPwPJFu9Z0",
  authDomain: "bookinghotel-5dbb8.firebaseapp.com",
  projectId: "bookinghotel-5dbb8",
  storageBucket: "bookinghotel-5dbb8.appspot.com",
  messagingSenderId: "430093842637",
  appId: "1:430093842637:web:02aae3991eab19f7d01184",
  measurementId: "G-VNX723XHNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const parts = pathname?.split("/"); // pt string tách chuỗi thành mảng dựa trên dấu /
    const slugHotel = parts[2];
    const slugRoom = parts[3];
    const decodedSlugHotel = decodeURIComponent(slugHotel);
    const decodedSlugRoom = decodeURIComponent(slugRoom);
    let title = "Default Title - Modtel";

    // Xác định title dựa trên pathname
    if (pathname === "/") {
      title = "Home Page - Modtel";
    } else if (pathname.startsWith("/about")) {
      title = "About Page - Modtel";
    } else if (pathname.startsWith("/checkout")) {
      title = "Checkout - Modtel";
    } else if (pathname.startsWith("/detail-hotel")) {
      title = `${decodedSlugHotel} - Modtel`;
    } else if (pathname.startsWith("/detail-room")) {
      title = `${decodedSlugRoom} - Modtel`;
    } else if (pathname.startsWith("/listing")) {
      title = "Listing - Modtel";
    } else if (pathname.startsWith("/contact")) {
      title = "Contact - Modtel";
    }

    document.title = title;
  }, [location.pathname]);

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
        <AuthRouter
          exact
          path="/checkout"
          loading={loading}
          Component={Checkout}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
