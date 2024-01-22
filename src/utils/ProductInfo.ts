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
      url: "https://imgur.com/Pe6s7ld.png",
    },
    {
      id: 2,
      url: "https://imgur.com/pE00G3K.png",
    },
    {
      id: 3,
      url: "https://imgur.com/nKXQBJ1.png",
    },
  ],
};
