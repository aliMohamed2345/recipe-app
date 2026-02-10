import { configureStore, combineReducers } from "@reduxjs/toolkit";
import macroSlice from "./Slices/macroSlice";
import nutritionSlice from "./Slices/nutritionTabSlice";
const RootReducers = combineReducers({
  nutritionTab: nutritionSlice,
  macro: macroSlice,
});

export const store = configureStore({
  reducer: RootReducers,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
