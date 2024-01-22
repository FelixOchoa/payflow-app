import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { Header } from "./Header";
import { setStep } from "../../stores/System/Slice";

type ResponseProps = {
  title: string;
  setOpenModal: (value: boolean) => void;
};

export const Response = ({ title, setOpenModal }: ResponseProps) => {
  const dispatch = useDispatch();
  const { response } = useSelector((state: RootState) => state.payment);

  const handleResponse = () => {
    if (response?.success) {
      localStorage.removeItem("numberCard");
      localStorage.removeItem("nameCard");
      localStorage.removeItem("product");
      localStorage.removeItem("cvcCard");
      localStorage.removeItem("expiryCard");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    if (!response?.success) {
      dispatch(setStep(1));
    }
  };

  return (
    <>
      <Header title={title} setOpenModal={setOpenModal} />
      {response?.success ? (
        <div className="flex flex-col py-12 items-center">
          <img
            src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png"
            alt="success"
            className="w-20"
          />
          <h2 className="text-base font-bold text-green-700 mt-4">
            ¡Tu compra se realizó con éxito!
          </h2>
          <p className="text-sm text-green-700 text-center">
            En breve recibirás un correo electrónico con la información de tu
            compra
          </p>
        </div>
      ) : (
        <div className="flex flex-col py-12 items-center">
          <img
            src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"
            alt="error"
            className="w-20"
          />
          <h2 className="text-base font-bold text-red-700 mt-4">
            ¡Ocurrió un error al realizar la compra!
          </h2>
          <p className="text-sm text-red-700">Por favor, intenta de nuevo</p>
        </div>
      )}

      <button
        onClick={handleResponse}
        className="bg-black mt-4 text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        {response?.success ? "Volver a comprar" : "Regresar"}
      </button>
    </>
  );
};
