import { FaMapMarkerAlt } from "react-icons/fa";
import type { PropertyDetails as PropertyDetailsType } from "../types";
import { FeatureItem } from "./feature-item";
import { formatPrice } from "@/helpers/utils";
interface AtAGlance {
  type: string;
  area: string;
  municipality: string;
  neighborhood: string;
  style: string;
  lot_size: string;
  tax: string;
  beds: number;
  baths: number;
  fireplace: string;
  pool: string;
}

export const PropertyFeatures = ({
  property,
}: {
  property: PropertyDetailsType;
}) => {
  const features: AtAGlance = property.at_a_glance;
  return (
    <div className="max-w-[1320px] mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className=" my-5">
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="md:col-span-1">
            <h1 className="md:text-[40px] text-[25px] text-left font-bold dark:text-white">
              {property.at_a_glance.type}
            </h1>
            <h2 className="text-[20px] text-left font-bold text-gray-500">
              ${formatPrice(property.general_details.price)}
            </h2>
          </div>
          <div className="md:col-span-2  justify-center">
            <h1 className="md:text-[40px] text-[25px] text-left font-bold dark:text-white">
              {property.exterior.property_type}
            </h1>
            <h2 className="flex  text-[16px] text-left font-semibold text-gray-500 items-center">
              <FaMapMarkerAlt />
              <span className="mx-3">{property.general_details.address}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className=" my-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="md:col-span-1">
            <h3 className="text-[18px] text-left dark:text-white">
              Listing ID
            </h3>
            <h2 className="text-[17px] text-left font-bold dark:text-gray-300">
              {property.listing_id}
            </h2>
          </div>
          <div className="md:col-span-2 justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-left">
              {Object.keys(features).map((key) => (
                <FeatureItem
                  key={key}
                  featureKey={key as keyof AtAGlance}
                  featureValue={features[key as keyof AtAGlance]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
