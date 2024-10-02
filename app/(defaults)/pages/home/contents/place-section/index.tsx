import SectionTitle from "@/components/section-title";
import { cardData } from "@/data/place-data";
import React from "react";
import { Card } from "./component";

const PlaceSection: React.FC = () => (
  <div className="max-w-[1320px] mx-auto">
    <SectionTitle
      title="WHAT IS THIS PLACE"
      subtitle="The Magic of Puerto Galera"
      titleClass="text-[18px] text-gray-600 text-left font-semibold dark:text-gray-300"
      subtitleClass="text-[35px] text-left font-medium font-montAlt dark:text-gray-200"
    />
    {cardData.map((card, index) => (
      <Card
        key={index}
        order={card.order}
        image={card.image}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default PlaceSection;
