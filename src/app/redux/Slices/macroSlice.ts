import { createSlice } from "@reduxjs/toolkit";

interface MacrosState {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
const initialState: MacrosState = {
  calories: 0,
  protein: 100,
  carbs: 250,
  fat: 70,
};

const macroSlice = createSlice({
  name: `macro`,
  initialState,
  reducers: {
    getTotalCalories: (state) => {
      //1 gm protein = 4 calories
      //1 gm carbs = 4 calories
      //1 gm fat = 9 calories
        state.calories = state.protein * 4 + state.carbs * 4 + state.fat * 9;
    },
    setProtein: (state, action) => {
      state.protein = action.payload;
    },
    setCarbs: (state, action) => {
      state.carbs = action.payload;
    },
    setFat: (state, action) => {
      state.fat = action.payload;
    },
  },
});

export const { getTotalCalories, setProtein, setFat, setCarbs } = macroSlice.actions;
export default macroSlice.reducer;
