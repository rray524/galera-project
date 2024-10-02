import React from "react";

interface FooterTitleProps {
  title: string;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ title }) => {
  return (
    <h1 className="text-[20px] font-semibold my-5 dark:text-white">{title}</h1>
  );
};

export default FooterTitle;
