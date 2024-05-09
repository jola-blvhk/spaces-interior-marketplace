import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthPageState {
  authPageState: string;
}

const initialState: IAuthPageState = {
  authPageState: "login",
};

const authPageSlice = createSlice({
  name: "authPage",
  initialState,
  reducers: {
    setAuthPageState: (state, action: PayloadAction<string>) => {
      state.authPageState = action.payload;
    },
  },
});

export const authPageActions = authPageSlice.actions;
export default authPageSlice;
