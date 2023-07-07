import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
};

export const reducerSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },

    commonRegister: () => {},
    commonLogin: () => {},

    setIsSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
  },
});

export const commonRegister = createAction("commonRegister");
export const commonLogin = createAction("commonLogin");

export const { setAuth, setIsSignIn } = reducerSlice.actions;

export default reducerSlice.reducer;
