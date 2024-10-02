import React from "react";
import TitleComponent from "./component/banner-title";
import BannerImageComponent from "./component/banner-img";
import RequestCallButton from "./component/request-call-button";

const Banner = () => {
  return (
    <div className="max-w-[1320px] px-8 mx-auto my-12 flex flex-col lg:flex-row">
      <div className="lg:w-[60%] text-left sm:text-[30px] py-10">
        <TitleComponent
          text="YOUR NEW HOME"
          className="text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] font-bold bg-clip-text text-transparent from-blue-500 to-gray-500 bg-textImage"
        />
        <TitleComponent
          text="IN PARADISE"
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[68px] font-bold bg-clip-text text-transparent from-pink-500 to-violet-500 bg-textImage2"
        />
        <p className="text-[15px] sm:text-[18px] my-5 text-gray-500 leading-[32px]">
          Over twenty years finding the best second homes for your family in the
          hot tropics of Galera. We do it all from residence permits to property
          management.
        </p>
        <RequestCallButton />
      </div>
      <BannerImageComponent />
    </div>
  );
};

export default Banner;
