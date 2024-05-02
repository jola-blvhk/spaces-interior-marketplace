import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUiState {
  hamBurgerState: boolean;
}

const initialState: IUiState = {
  hamBurgerState: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHamburgerState: (state, action: PayloadAction<boolean>) => {
      state.hamBurgerState = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
