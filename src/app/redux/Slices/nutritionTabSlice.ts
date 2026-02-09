import { createSlice } from "@reduxjs/toolkit";
import { tabType } from "@/app/utils/types";

const initialState: { currentTab: tabType } = {
  currentTab: "calculator",
};

const nutritionTabSlice = createSlice({
  name: "nutritionTab",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = nutritionTabSlice.actions;
export default nutritionTabSlice.reducer;
