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
    number: localStorage.getItem("numberCard") ?? "",
    expiry: localStorage.getItem("expiryCard") ?? "",
    cvc: localStorage.getItem("cvcCard") ?? "",
    name: localStorage.getItem("nameCard") ?? "",
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
    setSize: (state, action: PayloadAction<string>) => {
      state.product.sizeSelected = action.payload;
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.paymentInfo.number = action.payload;

      if (action.payload.length > 16) {
        state.paymentInfo.number = action.payload.slice(0, 16);
      }

      localStorage.setItem("numberCard", state.paymentInfo.number);
    },
    setExpiry: (state, action: PayloadAction<string>) => {
      state.paymentInfo.expiry = action.payload;

      if (action.payload.length > 4) {
        state.paymentInfo.expiry = action.payload.slice(0, 4);
      }

      localStorage.setItem("expiryCard", state.paymentInfo.expiry);
    },
    setCvc: (state, action: PayloadAction<string>) => {
      state.paymentInfo.cvc = action.payload;

      if (action.payload.length > 3) {
        state.paymentInfo.cvc = action.payload.slice(0, 3);
      }
      localStorage.setItem("cvcCard", state.paymentInfo.cvc);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.paymentInfo.name = action.payload.toUpperCase();

      if (action.payload.length > 20) {
        state.paymentInfo.name = action.payload.slice(0, 20);
      }

      localStorage.setItem("nameCard", state.paymentInfo.name);
    },
  },
});

export const { setName, setCvc, setExpiry, setNumber, setProduct, setSize } =
  paymentSlice.actions;

export default paymentSlice.reducer;
