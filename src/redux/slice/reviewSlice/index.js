import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  paramsReviews: {
    _page: 1,
    _limit: 3,
    _totalRows: null,
  },
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    postReviewSaga: () => {},

    getReviewSaga: () => {},
    setReviewSaga: (state, action) => {
      state.reviews = action.payload;
    },
    setParamsReviews: (state, action) => {
      state.paramsReviews = action.payload;
    },
  },
});

export const { setReviewSaga, setParamsReviews } = reviewSlice.actions;
export const getReviewSaga = createAction("getReviewSaga");
export const postReviewSaga = createAction("postReviewSaga");

export default reviewSlice.reducer;
