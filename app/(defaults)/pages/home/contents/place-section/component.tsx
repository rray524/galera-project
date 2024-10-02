import { truncateText } from "@/helpers/utils";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  order: string;
  image: StaticImageData;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  order,
  image,
  title,
  description,
}) => (
  <div className="my-5">
    <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
      {order === "imageFirst" && (
        <div className="flex md:col-span-1">
          <Image
            src={image}
            alt="bannerImage"
            className="lg:rounded-full lg:max-w-[300px] w-full sm:h-[400px] md:w-[900px] md:h-[500px] lg:h-auto rounded-lg object-fit object-cover"
          />
        </div>
      )}
      <div
        className={`md:col-span-2 md:my-10 flex flex-col justify-center ${
          order === "textFirst" ? "md:order-last" : ""
        }`}
      >
        <h2 className="text-[30px] font-bold opacity-85 my-5 text-left sm:text-center lg:text-left dark:text-gray-200">
          {title}
        </h2>
        <p className="text-[17px] text-gray-400 text-left lg:text-left dark:text-gray-400 leading-[30px]">
          {truncateText(description, 500)}
        </p>
      </div>
      {order === "textFirst" && (
        <div className="flex justify-center lg:order-last order-first">
          <Image
            src={image}
            alt="bannerImage"
            className="lg:rounded-full lg:max-w-[300px] w-full sm:h-[400px] md:h-[500px] md:w-[900px] lg:h-auto rounded-lg object-fit object-cover"
          />
        </div>
      )}
    </div>
  </div>
);
