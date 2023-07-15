import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import UerReducer from "./slice/userSlice";
import ProductsReducer from "./slice/productSlice";
import LocationsReducer from "./slice/locationSlice";
import loadingReducer from "./slice/loadingSlice";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    Users: UerReducer,
    Products: ProductsReducer,
    Locations: LocationsReducer,
    Loading: loadingReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
