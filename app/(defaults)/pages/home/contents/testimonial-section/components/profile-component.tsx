import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProfileImageProps {
  src: StaticImageData;
  alt: string;
  bgColor: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, bgColor }) => (
  <div
    className={`rounded-[30px] w-[40%] sm:w-[150px] h-[150px] flex items-center justify-center overflow-hidden ${bgColor}`}
  >
    <Image
      src={src.src}
      alt={alt}
      className="h-[90%] object-cover"
      width={100}
      height={100}
    />
  </div>
);

export default ProfileImage;
