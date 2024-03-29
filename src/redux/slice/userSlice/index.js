import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: null,
  isSignIn: true,
  isOpenModal: false,
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

    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
  },
});

export const commonRegister = createAction("commonRegister");
export const commonLogin = createAction("commonLogin");

export const { setAuth, setIsSignIn, setIsOpenModal } = reducerSlice.actions;

export default reducerSlice.reducer;
