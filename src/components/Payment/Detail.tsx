import { paymentType } from "../../stores/Payment/Slice";

export const Detail = ({ product, paymentInfo }: paymentType) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center text-gray-500">
        <p className="text-xs mt-2">
          {new Date().toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-xs mt-1.5">|</p>
        <p className="text-xs mt-2">
          # {Math.floor(Math.random() * 1000000000)}
        </p>
      </div>

      <h2 className="text-sm font-semibold mt-4 pt-4">Detalles del producto</h2>
      <div className="flex flex-row gap-2 items-center justify-between py-2">
        <div className="flex flex-row items-center gap-2">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-10 rounded-md"
          />
          <div className="flex flex-col">
            <p className="text-xs">{product.name}</p>
            <p className="text-xs">{product.colorSelected}</p>
            <p className="text-xs">{product.sizeSelected}</p>
          </div>
        </div>
        <p className="text-xs mt-2">$ {product.price}</p>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <p className="text-xs mt-2">Envío</p>
        <p className="text-xs mt-2">$ 0.00</p>
      </div>

      <hr className="border-t-2 border-gray-200"></hr>
      <div className="flex flex-row gap-2 items-center justify-between">
        <p className="text-xs mt-2">Subtotal</p>
        <p className="text-xs mt-2 font-bold">$ {product.price}</p>
      </div>

      <h2 className="text-sm font-semibold mt-4 pt-4">Método de pago</h2>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-xs mt-2">Tarjeta de crédito</p>
        <p className="text-xs mt-2">
          **** **** **** {paymentInfo.number.slice(-4)}
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-xs mt-2">Titular</p>
        <p className="text-xs mt-2">{paymentInfo.name}</p>
      </div>
    </>
  );
};
