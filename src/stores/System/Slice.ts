import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type systemType = {
  loading: boolean;
  error: string;
  step: number;
};

const initialState: systemType = {
  loading: false,
  error: "",
  step: 1,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { setLoading, setError, setStep } = systemSlice.actions;

export default systemSlice.reducer;
