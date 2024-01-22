import { Header } from "./Header";
import { PaymentForm } from "./Formulario";
import { useCard } from "./Hooks/useCard";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

type PaymentProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};
export const Payment = ({ openModal, setOpenModal }: PaymentProps) => {
  const { card, handleInputFocus, handleInputChange } = useCard();
  if (!openModal) return null;

  return (
    <>
      <section className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-10  flex flex-col items-center justify-center">
          <div className="w-full bg-white rounded-lg p-4">
            <Header setOpenModal={setOpenModal} />
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
                // onClick={getPaymentState}
                className="bg-black mt-4 text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
