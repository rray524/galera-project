"use client";
import SectionTitle from "@/components/section-title";
import React, { useEffect, useRef, useState } from "react";
import { PropertyDetails } from "./types";
import { fetchProperties } from "./action";
import { Pagination } from "@/components/pagination";
import { Card } from "./component";
import PreloadingProperty from "@/components/animation-preload";

const PropertListing: React.FC = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const propertyListingRef = useRef<HTMLDivElement>(null);

  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    propertyListingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties();
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const currentItems = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div
      className="max-w-[1320px] mx-auto relative md:py-16"
      ref={propertyListingRef}
      id="property-listings-top"
    >
      <SectionTitle
        title="PROPERTIES FOR RENT AND SELL"
        subtitle="Our Most Recent Selection"
        titleClass="text-[18px] text-gray-600 text-left font-semibold dark:text-gray-300"
        subtitleClass="text-[35px] text-left font-medium font-montAlt dark:text-gray-200"
      />
      <div className="">
        {loadingData ? (
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 my-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  className={`w-full lg:w-1/3 md:w-1/2 px-4 mb-8`}
                  key={index}
                >
                  <div key={index} className="border border-gray-200 p-4">
                    <PreloadingProperty />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentItems.length !== 0 ? (
          <div className="max-w-[1320px] grid grid-cols-1 gap-6 sm:text-center md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12 mb-5">
            {currentItems.map((card, index) => (
              <Card
                key={index}
                imgSrc={
                  card.image_urls.length > 0
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${card.image_urls[0]}`
                    : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                }
                status={card.available_for}
                title={card.exterior.property_type}
                location={card.general_details.address}
                price={card.general_details.price}
                beds={card.at_a_glance.beds}
                baths={card.at_a_glance.baths}
                link={card._id}
                category={card.category}
              />
            ))}
          </div>
        ) : (
          <div className=" max-h-14 w-full mx-auto">
            <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold">
              No property listed yet!
            </h4>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default PropertListing;
