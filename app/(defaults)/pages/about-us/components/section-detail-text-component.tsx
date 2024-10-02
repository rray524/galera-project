import React from "react";

interface DetailsTextProps {
  text: string;
}

const DetailsText: React.FC<DetailsTextProps> = ({ text }) => {
  return (
    <p className="mx-4 sm:mx-10 text-[17px] text-gray-400 text-left lg:text-left dark:text-gray-400 leading-[30px]">
      {text.split("\n").map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default DetailsText;
