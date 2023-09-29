import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  params: {
    _page: 1,
    _limit: 12,
    _totalRows: null,
    _sort: "",
    _order: "",
    star: "",
    price_gte: 100,
    price_lte: 254,
    review: "",
  },
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    getHotelSaga: () => {},
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setParams: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const getHotelSaga = createAction("getHotelSaga");

export const { setHotels, setParams } = hotelSlice.actions;

export default hotelSlice.reducer;
