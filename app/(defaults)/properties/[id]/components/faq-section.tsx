"use client";
import SectionTitle from "@/components/section-title";
import { faqs } from "@/data/faq-section";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-20 p-5">
      <SectionTitle
        title="FAQ"
        subtitle="What Customers Often Ask?"
        titleClass="text-[18px] text-gray-600 text-left font-semibold dark:text-gray-300 text-center"
        subtitleClass="text-[35px] text-left font-medium font-montAlt dark:text-gray-200 text-center"
      />
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-xl font-medium  dark:text-gray-300">
                {faq.question}
              </span>
              <span>
                {activeIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 text-gray-600  dark:text-gray-400">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
