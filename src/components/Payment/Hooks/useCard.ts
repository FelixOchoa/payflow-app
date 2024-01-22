import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import {
  setNumber,
  setCvc,
  setExpiry,
  setName,
} from "../../../stores/Payment/Slice";

type CardProps = {
  cvc: string;
  expiry: string;
  focused: Focused | string;
  name: string;
  number: string;
};
type Focused = "name" | "number" | "expiry" | "cvc" | "";

export const useCard = () => {
  const dispatch = useDispatch();
  const { paymentInfo } = useSelector((state: RootState) => state.payment);

  console.log(paymentInfo);

  const [card, setCard] = useState<CardProps>({
    cvc: paymentInfo.cvc,
    expiry: paymentInfo.expiry,
    focused: "",
    name: paymentInfo.name,
    number: paymentInfo.number,
  });

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCard({ ...card, focused: e.target.name });
  };

  const handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "number") {
      dispatch(setNumber(value));
    }

    if (name === "expiry") {
      dispatch(setExpiry(value));
    }

    if (name === "cvc") {
      dispatch(setCvc(value));
    }

    if (name === "name") {
      dispatch(setName(value));
    }

    setCard({ ...card, [name]: value });
  };

  return {
    card,
    handleInputFocus,
    handleInputChange,
  };
};
