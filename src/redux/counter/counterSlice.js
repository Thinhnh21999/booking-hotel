import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignIn: true,
};

export const counterSlice = createSlice({
  name: "counter",
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

export const { setAuth, setIsSignIn } = counterSlice.actions;

export default counterSlice.reducer;
