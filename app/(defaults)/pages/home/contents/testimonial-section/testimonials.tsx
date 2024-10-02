import React from "react";
import profile from "@/public/images/profile-1.png";
import profile1 from "@/public/images/profile.png";
import profile2 from "@/public/images/profile-3.png";
import profile3 from "@/public/images/profile-4.png";
import ProfileImage from "./components/profile-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonial-data";
import TestimonialCard from "./components/testimonial-card";

function Testimonials() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">←</button>,
    nextArrow: <button className="slick-next">→</button>,
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20 max-w-full lg:max-w-[1320px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center py-5 sm:py-0">
        <div className="w-full lg:w-1/3 flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-5 mb-5 sm:mb-0">
          <div className="flex flex-col-2 items-center justify-center sm:flex-cols gap-5 mb-5">
            <ProfileImage src={profile} alt="Profile 1" bgColor="bg-blue-500" />
            <ProfileImage
              src={profile1}
              alt="Profile 2"
              bgColor="bg-yellow-500"
            />
          </div>
          <div className="flex flex-col-2 items-center justify-center sm:flex-cols gap-5">
            <ProfileImage
              src={profile3}
              alt="Profile 3"
              bgColor="bg-blue-500"
            />
            <ProfileImage
              src={profile2}
              alt="Profile 4"
              bgColor="bg-yellow-500"
            />
          </div>
        </div>
        <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0 lg:ml-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                rating={testimonial.rating}
                author={testimonial.author}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
