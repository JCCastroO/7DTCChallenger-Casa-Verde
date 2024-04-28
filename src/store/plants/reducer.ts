import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { state as initialState } from "./types";

export const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    setSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setError: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSuccess, setError } = plantsSlice.actions;
