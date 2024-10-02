import SectionTitle from "@/components/section-title";
import React from "react";
import { InputButtonGroup } from "./components/button-group";

const SubscribeSection: React.FC = () => (
  <div className="max-w-[1320px] mx-auto my-0 md:my-10">
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-5 sm:px-12 items-center">
        <SectionTitle
          title="Subscribe and Get Your 5 Steps Golden Visa Guide "
          titleClass="text-3xl font-bold text-left opacity-85 dark:text-gray-100"
        />
        <InputButtonGroup
          placeholder="hello@gmail.com"
          buttonText="Subscribe to Newsletter"
        />
      </div>
    </div>
  </div>
);

export default SubscribeSection;
