import React, { Suspense, use } from "react";
import { fetchSingleProperty } from "./action";
import { PropertyHeader } from "./components/property-header";
import { PropertyFeatures } from "./components/property-feature";
import { PropertyDescription } from "./components/property-description";
import { PropertyMap } from "./components/property-map";
import ContactForm from "./components/contact-form";
import LoadingFallback from "./components/loading-fallback";
import PropertyNotFoundFallback from "./components/property-error-handle-fallback";
import FAQSection from "./components/faq-section";
import { PropertyDetailsTable } from "./components/property-details-table";
import PropertyImages from "./components/property-images";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: PageProps) {
  const property = await fetchSingleProperty(params.id);

  return {
    title: property?.exterior.property_type || "Property Details",
    description:
      property?.property_description || "Detailed view of the property",
  };
}
const PropertyDetails = ({ params }: PageProps) => {
  const property = use(fetchSingleProperty(params.id));
  const apiKey = process.env.NEXT_PUBLIC_SITE_KEY!;
  if (!property) {
    return <PropertyNotFoundFallback />;
  }
  return (
    <div className="my-10">
      <PropertyHeader property={property} />
      <PropertyFeatures property={property} />
      <PropertyDescription description={property.property_description} />
      <PropertyImages images={property.image_urls} />
      <div className="max-w-[1320px] mx-auto">
        <PropertyDetailsTable property={property} />
        <FAQSection />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10">
          <ContactForm />
          <PropertyMap property={property} apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
};

const PropertyDetailsPage = (props: PageProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <PropertyDetails {...props} />
  </Suspense>
);

export default PropertyDetailsPage;
