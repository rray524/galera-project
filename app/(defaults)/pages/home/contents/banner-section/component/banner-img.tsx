import React from "react";
import BannerImage from "@/public/images/banner-image.jpg";
import BannerImage2 from "@/public/images/banner-baground.jpg";
import Image from "next/image";

const BannerImageComponent = () => {
  return (
    <div className="relative flex justify-center lg:justify-end lg:w-[50%]">
      <div className="relative">
        <Image
          src={BannerImage2}
          alt="backgroundImage"
          className="absolute top-0 left-0 w-full h-full lg:rounded-full lg:max-w-[350px] sm:h-[400px] md:w-[900px] md:h-[500px] lg:h-auto rounded-lg img-hover object-cover z-0"
        />
        <div className="absolute top-[-25px] right-0 p-4 z-10 flex flex-col items-start">
          <span className="text-4xl font-bold font-sans text-yellow-300">
            Hot
          </span>
          <span className="text-4xl font-bold font-sans text-yellow-300">
            Hot
          </span>
          <span className="text-4xl font-bold font-sans text-yellow-300">
            Hot
          </span>
        </div>
        <Image
          src={BannerImage}
          alt="bannerImage"
          className="relative lg:rounded-full lg:max-w-[350px] w-full sm:h-[400px] sm:w-[600px] md:w-[900px] md:h-[500px] lg:h-auto rounded-lg object-cover"
          style={{
            objectFit: "cover",
            zIndex: 1,
            transform: "translateX(20px)",
          }}
        />
      </div>
    </div>
  );
};

export default BannerImageComponent;
