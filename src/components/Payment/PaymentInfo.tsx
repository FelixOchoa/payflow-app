import { useDispatch } from "react-redux";
import { setStep } from "../../stores/System/Slice";
import { Header } from "./Header";
import { PaymentForm } from "./Formulario";
import { useCard } from "./Hooks/useCard";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

type PaymentProps = {
  title: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

export const PaymentInfo = ({
  title,
  openModal,
  setOpenModal,
}: PaymentProps) => {
  const dispatch = useDispatch();

  const { card, handleInputFocus, handleInputChange } = useCard();
  if (!openModal) return null;

  return (
    <>
      <Header title={title} setOpenModal={setOpenModal} />
      <div className="mt-4 flex flex-col">
        <Cards
          {...card}
          placeholders={{
            name: "TÚ NOMBRE AQUÍ",
          }}
          locale={{
            valid: "Válido hasta",
          }}
        />
        <PaymentForm
          handleInputFocus={handleInputFocus}
          handleInputChange={handleInputChange}
        />
        <button
          onClick={() => dispatch(setStep(2))}
          className="bg-black mt-4 text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
        >
          Continuar
        </button>
      </div>
    </>
  );
};
