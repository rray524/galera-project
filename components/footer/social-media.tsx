import React from "react";
import { IconType } from "react-icons";

interface SocialMediaIconProps {
  Icon: IconType;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ Icon }) => {
  return (
    <div className="text-[18px] p-2 border w-10 h-10 rounded-[20%] bg-yellow-400 hover:bg-red-300 hover:text-white flex items-center justify-center">
      <Icon />
    </div>
  );
};

export default SocialMediaIcon;
