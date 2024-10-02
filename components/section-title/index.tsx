import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  titleClass?: string;
  subtitleClass?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  titleClass = "text-[15px] text-gray-600 text-left font-semibold",
  subtitleClass = "text-[24px] sm:text-[35px] text-left font-medium font-montAlt dark:text-gray-100",
}) => {
  return (
    <div className="mx-4 my-5 sm:mx-10">
      <h1 className={titleClass}>{title}</h1>
      <h4 className={subtitleClass}>{subtitle}</h4>
    </div>
  );
};

export default SectionTitle;
