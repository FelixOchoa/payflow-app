export const Buy = () => {
  return (
    <div className="p-4 flex flex-col items-center w-full">
      <button className="bg-black text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
        Comprar producto
      </button>
      <button className="bg-white text-black py-2 w-full rounded-full mt-4 border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
        Pagar con tarjeta de crédito
      </button>
    </div>
  );
};
