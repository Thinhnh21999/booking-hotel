import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookRoom: [],
};

const bookRoomSlice = createSlice({
  name: "bookRoom",
  initialState,
  reducers: {
    getBookRoomSg: () => {},
    commonBookRoomSg: () => {},
    setBookRoomSg: (state, action) => {
      state.bookRoom = action.payload;
    },
    deleteBookRoomSg: (state, action) => {
      state.bookRoom = state.bookRoom.filter(
        (room) => room.id !== action.payload
      );
    },
  },
});

export const getBookRoomSg = createAction("getBookRoomSg");
export const commonBookRoomSg = createAction("commonBookRoomSg");

export const { setBookRoomSg, deleteBookRoomSg } = bookRoomSlice.actions;

export default bookRoomSlice.reducer;
