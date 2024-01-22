import { ProductInfoType } from "../../utils/ProductInfo";
import { useBuy } from "./Hooks/useBuy";

type BuyProps = {
  setOpenModal: (value: boolean) => void;
  product: ProductInfoType;
};

export const Buy = ({ setOpenModal, product }: BuyProps) => {
  const { size, handleBuy } = useBuy(product);

  const handlePayment = () => {
    if (size === "") return;
    setOpenModal(true);
    handleBuy();
  };

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <button className="bg-black text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
        Agregar al carrito
      </button>
      <button
        onClick={handlePayment}
        className="bg-white text-black py-2 w-full rounded-full mt-4 border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        Pagar con tarjeta de crédito
      </button>
    </div>
  );
};
