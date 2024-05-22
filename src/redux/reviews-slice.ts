import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IReviewsComponentState {
  reviewsComponentState: boolean;
}

const initialState: IReviewsComponentState = {
  reviewsComponentState: false,
};

const reviewsComponentSlice = createSlice({
  name: "reviewsComponent",
  initialState,
  reducers: {
    setReviewsComponentState: (state, action: PayloadAction<boolean>) => {
      state.reviewsComponentState = action.payload;
    },
  },
});

export const reviewsComponentActions = reviewsComponentSlice.actions;
export default reviewsComponentSlice;
