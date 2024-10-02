import Image from "next/image";
import { PropertyDetails } from "../types";
import PropertyType from "./property-type-component";

export const PropertyHeader = ({ property }: { property: PropertyDetails }) => (
  <div className="max-w-[1320px] mx-auto grid grid-cols-1 px-4 lg:px-0">
    <PropertyType
      category={property.category}
      status={property.available_for}
    />
    <div className="w-full">
      <Image
        src={
          property.image_urls.length > 0
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${property.image_urls[0]}`
            : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
        }
        alt="propertyImage"
        className="w-full h-auto md:h-[600px] rounded-lg"
        width={1320}
        height={600}
      />
    </div>
  </div>
);
