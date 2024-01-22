import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { setProduct } from "../../../stores/Payment/Slice";
import { ProductInfoType } from "../../../utils/ProductInfo";

export const useBuy = (productSelected?: ProductInfoType) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.payment);

  const handleBuy = () => {
    if (productSelected?.sizes?.includes(product.sizeSelected as string))
      dispatch(
        setProduct({
          ...product,
          ...productSelected,
        })
      );
  };

  return { size: product.sizeSelected, handleBuy };
};
