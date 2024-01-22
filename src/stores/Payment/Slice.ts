import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductInfoType } from "../../utils/ProductInfo";

type paymentType = {
  product: ProductInfoType;
  paymentInfo: paymentInfoType;
};

type paymentInfoType = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};

const initialState: paymentType = {
  product: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product") as string)
    : {
        name: "",
        review: "",
        sold: "",
        price: 0,
        sizeSelected: "",
        colorSelected: "",
        images: [],
      },
  paymentInfo: {
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  },
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductInfoType>) => {
      state.product = {
        ...action.payload,
        colorSelected: "Rojo",
      };

      localStorage.getItem("product") ??
        localStorage.setItem("product", JSON.stringify(state.product));
    },
    setPayment: (state, action: PayloadAction<paymentInfoType>) => {
      state.paymentInfo = action.payload;
    },
    setSize: (state, action: PayloadAction<string>) => {
      state.product.sizeSelected = action.payload;
    },
  },
});

export const { setProduct, setPayment, setSize } = paymentSlice.actions;

export default paymentSlice.reducer;
