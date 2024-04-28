import { configureStore } from "@reduxjs/toolkit";
import { plantsSlice } from "./plants/reducer";

export const store = configureStore({
  reducer: {
    plants: plantsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
