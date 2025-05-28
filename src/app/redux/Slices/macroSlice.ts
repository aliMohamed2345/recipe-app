import { createSlice } from "@reduxjs/toolkit";

const activityLevelValues = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.5,
  very: 1.725,
  extra: 1.9,
};

export type activityLevelType =
  | "sedentary"
  | "light"
  | "moderate"
  | "very"
  | "extra";

interface MacrosState {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  activityLevel: activityLevelType;
}
const initialState: MacrosState = {
  calories: 0,
  protein: 100,
  carbs: 250,
  fat: 70,
  activityLevel: "sedentary",
};

const macroSlice = createSlice({
  name: `macro`,
  initialState,
  reducers: {
    getTotalCalories: (state) => {
      //1 gm protein = 4 calories
      //1 gm carbs = 4 calories
      //1 gm fat = 9 calories
      //multiply by activity level value
      state.calories = Math.round(
        (state.protein * 4 + state.carbs * 4 + state.fat * 9) *
          activityLevelValues[state.activityLevel]
      );
    },
    setActivityLevel: (state, action) => {
      state.activityLevel = action.payload;
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

export const {
  getTotalCalories,
  setProtein,
  setFat,
  setCarbs,
  setActivityLevel,
} = macroSlice.actions;
export default macroSlice.reducer;
