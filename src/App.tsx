import { Buy } from "./components/Product/Buy";
import { Images } from "./components/Product/Images";
import { InfoProduct } from "./components/Product/Info";
import { ProductInfo } from "./utils/ProductInfo";

export default function App() {
  return (
    <div className="h-full">
      <Images ListImages={ProductInfo.images} />
      <InfoProduct product={ProductInfo} />
      <Buy />
    </div>
  );
}
