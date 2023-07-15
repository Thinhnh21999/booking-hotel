import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocationSaga: () => {},
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const getLocationSaga = createAction("getLocationSaga");
export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
