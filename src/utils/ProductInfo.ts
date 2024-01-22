import firstImage from "../assets/product/shirt-1.webp";
import secondImage from "../assets/product/shirt-2.webp";
import thirdImage from "../assets/product/shirt-3.webp";

export type ProductInfoType = {
  name: string;
  review: string;
  sold: string;
  price: number;
  sizes?: string[];
  sizeSelected?: string;
  color?: string[];
  colorSelected?: string;
  images: ListImages[];
};

type ListImages = {
  id: number;
  url: string;
};

export const ProductInfo: ProductInfoType = {
  name: "Polo manga corta",
  review: "4.2k",
  sold: "1.2k",
  price: 25000,
  sizes: ["S", "M", "L", "XL"],
  color: ["Rojo"],
  images: [
    {
      id: 1,
      url: firstImage,
    },
    {
      id: 2,
      url: secondImage,
    },
    {
      id: 3,
      url: thirdImage,
    },
  ],
};
