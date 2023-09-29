import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import UerReducer from "./slice/userSlice";
import ProductsReducer from "./slice/productSlice";
import LocationsReducer from "./slice/locationSlice";
import LoadingReducer from "./slice/loadingSlice";
import ReviewsReducer from "./slice/reviewSlice";
import BookRoomReducer from "./slice/bookRoomSlice";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    Users: UerReducer,
    Products: ProductsReducer,
    Locations: LocationsReducer,
    Loading: LoadingReducer,
    Reviews: ReviewsReducer,
    BookRoom: BookRoomReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
