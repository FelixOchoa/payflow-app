import { useState } from "react";
import { Payment } from "./components/Payment";
import { Buy } from "./components/Product/Buy";
import { Images } from "./components/Product/Images";
import { InfoProduct } from "./components/Product/Info";
import { ProductInfo } from "./utils/ProductInfo";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="h-full">
      <Toaster />
      <Images ListImages={ProductInfo.images} />
      <InfoProduct product={ProductInfo} />
      <Buy product={ProductInfo} setOpenModal={setOpenModal} />
      <Payment openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
