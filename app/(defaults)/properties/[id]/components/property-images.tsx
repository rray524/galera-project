"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface PropertyImagesProps {
  images: string[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  function nextImageUrl(src: string, size: number) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
  }

  const slides = images.map((image) => {
    const src = `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}`;
    const width = 800;
    const height = 600;

    return {
      width,
      height,
      src: nextImageUrl(src, width),
      srcSet: imageSizes
        .concat(deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(src, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
    };
  });

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-4 px-3">
        {images?.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleOpenLightbox(index)}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}`}
              alt={`Property image ${index + 1}`}
              className="object-cover rounded-lg h-auto md:h-[400px] w-[400px]"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
        />
      )}
    </div>
  );
};

export default PropertyImages;
