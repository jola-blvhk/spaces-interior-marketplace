import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null as null | { message: any; type: any; open: any },
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
