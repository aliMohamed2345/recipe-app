import { configureStore, combineReducers } from "@reduxjs/toolkit";
import macroSlice from "./Slices/macroSlice";
const RootReducers = combineReducers({
  macro: macroSlice,
});

export const store = configureStore({
  reducer: RootReducers,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
