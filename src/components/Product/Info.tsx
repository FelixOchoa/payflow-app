type ProductType = {
  name: string;
  review: string;
  sold: string;
  price: number;
  sizes: string[];
  color: string[];
};

export const InfoProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="h-full px-4 flex flex-col">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <div className="flex flex-row justify-between pt-2 pb-4">
        <p>{product.review} Reviews</p>
        <p>{product.sold} vendidas</p>
      </div>
      <p className="text-2xl font-bold">COP ${product.price}</p>
      <div className="flex flex-row gap-2 pt-4 pb-4">
        <p className="text-sm text-gray-500">Color:</p>
        {product.color.map((color, index: number) => (
          <p key={index} className="text-sm text-gray-500">
            {color}
          </p>
        ))}
      </div>

      <p className="font-semibold text-sm">Tallas:</p>
      <div className="flex flex-row gap-2 pt-4 pb-4">
        {product.sizes.map((size, index: number) => (
          <p
            key={index}
            className="text-sm font-semibold border border-gray-300 rounded-full py-2 px-8 cursor-pointer hover:bg-gray-300 hover:text-gray-700 transition duration-300 ease-in-out text-gray-500"
          >
            {size}
          </p>
        ))}
      </div>
    </div>
  );
};
