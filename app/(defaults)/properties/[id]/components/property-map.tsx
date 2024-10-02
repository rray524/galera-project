import { PropertyDetails } from "../types";

export const PropertyMap = ({
  property,
  apiKey,
  zoom = 14,
}: {
  property: PropertyDetails;
  apiKey: string;
  zoom?: number;
}) => (
  <div className="text-left px-3 lg:px-0">
    <h3 className="text-3xl text-left font-semibold mb-3 dark:text-white">
      Map
    </h3>

    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${property.latitude},${property.longitude}&zoom=${zoom}`}
      width="100%"
      height="550"
      className="rounded-lg"
      allowFullScreen
    ></iframe>
  </div>
);
