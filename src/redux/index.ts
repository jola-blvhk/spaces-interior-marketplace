import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import authSlice from "./auth-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiSlice from "./ui-slice";
import authPageSlice from "./auth-page-slice";
import reviewsComponentSlice from "./reviews-slice";
import cartSlice from "./cart-slice";

// configure which key we want to persist
// const authPersistConfig = {
//   key: "auth",
//   storage: storage,
//   whitelist: ["authState"],
// };

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authSlice.reducer),
  auth: authSlice.reducer,
  reviewsComponent: reviewsComponentSlice.reducer,
  ui: uiSlice.reducer,
  authPage: authPageSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
