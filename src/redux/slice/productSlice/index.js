import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  params: {
    _page: 1,
    _limit: 12,
    _sort: "",
    _order: "",
    star: "",
    price_gte: 100,
    price_lte: 254,
    review: "",
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductSaga: () => {},
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    setParams: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const getProductSaga = createAction("getProductSaga");

export const { setProduct, setParams } = productSlice.actions;

export default productSlice.reducer;
