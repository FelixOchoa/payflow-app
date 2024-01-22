import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { PaymentDetail } from "./PaymentDetail";
import { PaymentInfo } from "./PaymentInfo";
import { useEffect, useState } from "react";
import { Response } from "./Response";

type PaymentProps = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

export const Payment = ({ openModal, setOpenModal }: PaymentProps) => {
  // const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.system);

  const [render, setRender] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (step) {
      case 1:
        setRender(
          <PaymentInfo
            title="Datos de facturación"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        );
        break;
      case 2:
        setRender(
          <PaymentDetail
            title="Resumen de compra"
            setOpenModal={setOpenModal}
          />
        );
        break;
      case 3:
        setRender(
          <Response title="Información de compra" setOpenModal={setOpenModal} />
        );
        break;
      default:
        break;
    }
  }, [step, openModal, setOpenModal]);

  if (!openModal) return null;

  return (
    <section className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-10  flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-lg p-4">{render}</div>
      </div>
    </section>
  );
};
