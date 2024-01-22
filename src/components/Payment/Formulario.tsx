type PaymentFormProps = {
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const PaymentForm = ({
  handleInputFocus,
  handleInputChange,
}: PaymentFormProps) => {
  return (
    <form className="mt-4 flex flex-col">
      <input
        type="number"
        name="number"
        placeholder="Número de tarjeta"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="p-2 rounded-md border border-gray-300 mt-4"
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="p-2 rounded-md border border-gray-300 mt-4 uppercase placeholder:capitalize"
      />
      <input
        type="text"
        name="expiry"
        placeholder="Fecha de expiración"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="p-2 rounded-md border border-gray-300 mt-4"
      />
      <input
        type="number"
        name="cvc"
        placeholder="CVC"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="p-2 rounded-md border border-gray-300 mt-4"
      />
    </form>
  );
};
