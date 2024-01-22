import { useState } from "react";

type CardProps = {
  cvc: string;
  expiry: string;
  focused: Focused | string;
  name: string;
  number: string;
};
type Focused = "name" | "number" | "expiry" | "cvc" | "";

export const useCard = () => {
  const [card, setCard] = useState<CardProps>({
    cvc: "",
    expiry: "",
    focused: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCard({ ...card, focused: e.target.name });
  };

  const handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  return {
    card,
    handleInputFocus,
    handleInputChange,
  };
};
