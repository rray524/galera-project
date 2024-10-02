import React from "react";
import {
  FaBed,
  FaBath,
  FaFire,
  FaSwimmingPool,
  FaRulerCombined,
  FaCity,
  FaHome,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

const featureIconMap: Record<string, IconType> = {
  type: FaHome,
  area: FaCity,
  municipality: FaMapMarkerAlt,
  neighborhood: FaMapMarkerAlt,
  style: FaTag,
  lot_size: FaRulerCombined,
  tax: FaTag,
  beds: FaBed,
  baths: FaBath,
  fireplace: FaFire,
  pool: FaSwimmingPool,
};

export const FeatureItem = ({
  featureKey,
  featureValue,
}: {
  featureKey: string;
  featureValue: any;
}) => {
  const IconComponent = featureIconMap[featureKey];
  return (
    <p className="flex text-sm md:text-xl font-bold dark:text-white">
      <span className="mx-3 my-1">{IconComponent && <IconComponent />}</span>
      {featureValue}
    </p>
  );
};
