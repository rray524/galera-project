import React from "react";
import Image from "next/image";
import { services } from "../data/data";
import about_1 from "@/public/images/about-2.jpg";
import about_2 from "@/public/images/about-3.jpg";
import SectionTitle from "@/components/section-title";

const ServicesSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between max-w-[1320px] mx-auto my-10">
      <div className="w-full lg:w-1/2 relative">
        <div className="block mx-8 lg:mx-2">
          <Image
            src={about_1}
            alt="Main Image"
            width={400}
            height={400}
            className="object-cover rounded-lg w-full lg:w-[400px]"
          />
          <Image
            src={about_2}
            alt="Overlay Image"
            width={400}
            height={400}
            className="absolute -top-10 md:top-10 left-14 object-cover w-3/4 md:w-3/4 h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mx-8 lg:mx-2">
          <SectionTitle
            title="SERVICES"
            subtitle="Value We Give You"
            titleClass="text-[18px] text-gray-600 text-left font-semibold dark:text-gray-300"
            subtitleClass="text-[35px] text-left font-medium font-montAlt dark:text-gray-200"
          />
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-gray-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
