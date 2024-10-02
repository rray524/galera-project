import { cardData } from "@/data/blog-data";
import React from "react";
import BlogCard from "./components/blog-card";
import SectionTitle from "@/components/section-title";

const BlogPost: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <SectionTitle
        title="BLOG POSTS"
        subtitle="Amazing Tips to Survive"
        titleClass="text-[15px] text-gray-600 text-left font-semibold dark:text-gray-300"
        subtitleClass="text-[24px] sm:text-[35px] text-left font-medium font-montAlt dark:text-gray-100"
      />
      <div className="">
        {cardData.map((card, index) => (
          <BlogCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            altText={card.altText}
            readTime={card.readTime}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
