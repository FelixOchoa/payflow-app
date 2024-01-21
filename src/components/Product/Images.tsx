import { useState } from "react";

interface InitialImage {
  id: number;
  url: string;
}
type ListImages = InitialImage[];

export const Images = ({ ListImages }: { ListImages: ListImages }) => {
  const [currentImage, setCurrentImage] = useState<InitialImage>(ListImages[0]);

  return (
    <div className="h-full p-4 flex flex-col gap-2 ">
      <img
        src={currentImage.url}
        className="h-full min-[600px]:h-[560px] object-contain"
      />

      <div className="flex flex-row w-full gap-2 max-[384px]:gap-0 max-[384px]:justify-between">
        {ListImages.map((item) => (
          <img
            key={item.id}
            src={item.url}
            className={
              currentImage.id === item.id
                ? "filter brightness-50 max-h-28 object-cover h-auto w-auto"
                : "max-h-28 object-cover cursor-pointer h-auto w-auto"
            }
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </div>
    </div>
  );
};
