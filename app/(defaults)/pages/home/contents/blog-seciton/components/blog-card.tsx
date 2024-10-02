import { truncateText } from "@/helpers/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  altText: string;
  readTime: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imgSrc,
  altText,
  readTime,
  link,
}) => {
  return (
    <div className="max-w-[1320px] flex flex-col md:flex-row px-4 sm:px-12 py-5 sm:py-0 items-center">
      <div className="text-left md:w-1/2">
        <Link href={link} target="_blank">
          <h1 className="text-[24px] sm:text-[30px] font-semibold opacity-90 dark:text-gray-200">
            {title}
          </h1>
        </Link>
        <p className="text-[16px] sm:text-[18px] text-gray-500 my-5 leading-[30px]">
          {truncateText(description, 250)}
        </p>
      </div>

      <div className="relative inline-block md:w-1/2 mt-4 sm:mt-40px sm:ml-4">
        <Link href={link} target="_blank">
          <Image
            src={imgSrc}
            alt={altText}
            className="rounded-[20px] object-cover w-full h-[300px] object-fit"
          />
          <span className="absolute bottom-0 right-0 mb-2 mr-2 bg-gray-200 p-2 w-[120px] rounded rounded-br-xl">
            {readTime}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
