import { formatPrice } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";

interface CardProps {
  imgSrc: string;
  status: string;
  title: string;
  location: string;
  price: string;
  priceSuffix?: string;
  beds: number;
  baths: number;
  link: string;
  category: string;
}

export const Card: React.FC<CardProps> = ({
  imgSrc,
  status,
  title,
  location,
  price,
  priceSuffix,
  beds,
  baths,
  link,
  category,
}) => (
  <div className="rounded-lg">
    <Link href={`/properties/${link}`}>
      <div className="lg:h-[240px] h-[350px] overflow-hidden relative">
        <Image
          src={imgSrc}
          alt="card"
          className="w-full h-full object-cover hover:scale-125 duration-1000 rounded-t-lg rounded-b-none"
          width={800}
          height={800}
        />

        <span className="absolute top-0 left-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
          {category}
        </span>
        <span className="absolute top-0 right-0 bg-gray-500 rounded-[10px] opacity-80 m-2 p-2 text-[15px] font-semibold text-white">
          {status}
        </span>
      </div>
      <div className="bg-[#44c3c317] rounded-b-lg px-3 py-3">
        <h5 className="text-[20px] text-left font-bold mb-3 opacity-90 dark:text-white">
          {title}
        </h5>
        <p className="text-[17px] text-left my-3 flex gap-2 items-center dark:text-gray-300 h-[63px]">
          <FaMapMarkerAlt
            className="text-gray-500 mx-2"
            data-testid="fa-map-marker-alt"
          />
          {location}
        </p>
        <div className="pt-4 pb-2 flex justify-between items-center mr-2">
          <span className="inline-block text-[22px] font-bold text-left dark:text-gray-300">
            <span className="text-yellow-400 font-extrabold mx-2">$</span>
            {formatPrice(price)}{" "}
          </span>
          <div className="flex space-x-4">
            <span className="inline-block text-[15px] font-semibold text-gray-800 dark:text-gray-400">
              <FaBed
                className="text-[18px] text-gray-800 mx-1 dark:text-gray-100"
                data-testid="fa-bed"
              />
              {beds}
            </span>
            <span className="inline-block text-[15px] font-semibold text-gray-800 dark:text-gray-400">
              <FaBath
                className="text-[18px] text-gray-800 mx-1 dark:text-gray-100"
                data-testid="fa-bath"
              />
              {baths}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);
