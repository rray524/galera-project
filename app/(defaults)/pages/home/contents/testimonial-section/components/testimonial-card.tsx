import React from "react";
import StarRating from "./star-component";
import { truncateText } from "@/helpers/utils";

interface TestimonialCardProps {
  text: string;
  rating: number;
  author: string;
  key: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  rating,
  author,
  key,
}) => (
  <div className="px-2 sm:px-4 py-5" key={key}>
    <div className="p-4 sm:p-6 bg-testimonialBgColor rounded-lg shadow-md">
      <p className="text-lg lg:text-3xl font-light leading-[32px] text-left italic mb-2 sm:mb-4">
        {author}
      </p>
      <div className="flex text-left mb-2 sm:mb-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-[15px] leading-7 tracking-wider lg:text-[16px] text-gray-500 text-left font-light">
        {truncateText(text, 350)}
      </p>
    </div>
  </div>
);

export default TestimonialCard;
