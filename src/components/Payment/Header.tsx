import { useDispatch } from "react-redux";
import { setStep } from "../../stores/System/Slice";

type HeaderProps = {
  title: string;
  setOpenModal: (value: boolean) => void;
};

export const Header = ({ title, setOpenModal }: HeaderProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-semibold text-lg">{title}</h1>
      <button
        onClick={() => {
          setOpenModal(false);
          dispatch(setStep(1));
        }}
        className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
