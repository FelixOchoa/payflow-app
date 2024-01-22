import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./Payment/Slice";
import systemSlice from "./System/Slice";

export const store = configureStore({
  reducer: {
    payment: paymentSlice,
    system: systemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
