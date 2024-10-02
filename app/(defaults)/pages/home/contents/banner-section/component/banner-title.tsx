import React from "react";

interface TitleComponentProps {
  text: string;
  className: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

export default TitleComponent;
