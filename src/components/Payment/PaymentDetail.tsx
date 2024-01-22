import { Header } from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {
  sendPaymentError,
  sendPaymentSuccess,
} from "../../stores/Payment/Slice";
import { setStep } from "../../stores/System/Slice";
import { RootState, AppDispatch } from "../../stores";
import { Detail } from "./Detail";

type PaymentProps = {
  title: string;
  setOpenModal: (value: boolean) => void;
};

const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
const PAYMENT_ERROR = "PAYMENT_ERROR";

export const PaymentDetail = ({ title, setOpenModal }: PaymentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { product, paymentInfo } = useSelector(
    (state: RootState) => state.payment
  );

  const handlePayment = async (responsePayment: string) => {
    if (responsePayment === PAYMENT_SUCCESS) {
      const { payload } = await dispatch(
        sendPaymentSuccess({
          product,
          paymentInfo,
        })
      );

      if ((payload as { success: boolean }).success) {
        dispatch(setStep(3));
      }
    }

    if (responsePayment === PAYMENT_ERROR) {
      const { payload } = await dispatch(
        sendPaymentError({
          product,
          paymentInfo,
        })
      );

      console.log(payload);

      if ((payload as { success: boolean }).success === false) {
        dispatch(setStep(3));
      }
    }
  };

  return (
    <>
      <Header title={title} setOpenModal={setOpenModal} />
      <Detail product={product} paymentInfo={paymentInfo} />
      <div className="flex flex-col py-4">
        <button
          className="bg-green-700 mt-4 text-white py-2 w-full rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
          onClick={() => handlePayment(PAYMENT_SUCCESS)}
        >
          Confirmar compra
        </button>
        <button
          className="bg-black mt-4 text-white py-2 w-full rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
          onClick={() => handlePayment(PAYMENT_ERROR)}
        >
          Confirmar compra con error
        </button>
      </div>
    </>
  );
};
