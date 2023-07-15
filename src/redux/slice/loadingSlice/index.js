import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingSg: () => {},
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const setLoadingSg = createAction("setLoadingSg");

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
