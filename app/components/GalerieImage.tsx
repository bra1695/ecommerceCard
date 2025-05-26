import React, { useState } from 'react'
import Image from 'next/image'

const GalerieImage = () => {
  const images = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ];

  const imagesThumbNail = [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg',
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Main Image with Navigation Buttons */}
      <div className="relative w-full max-w-md mb-4 group">
        {/* Main Image */}
        <img
          src={images[selectedImageIndex]}
          alt={`Shoe ${selectedImageIndex + 1}`}
          className="w-full h-auto rounded-lg shadow-lg md:cursor-pointer"
        />

        {/* Mobile Navigation Buttons */}
        <div className="md:hidden absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrevious}
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Previous image"
          >
            <Image
              src="/images/icon-previous.svg"
              alt="Previous"
              width={12}
              height={12}
            />
          </button>
          <button
            onClick={handleNext}
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Next image"
          >
            <Image
              src="/images/icon-next.svg"
              alt="Next"
              width={12}
              height={12}
            />
          </button>
        </div>
      </div>

      {/* Thumbnails (Desktop only) */}
      <div className="hidden md:flex space-x-4">
        {imagesThumbNail.map((image, index) => (
          <div
            key={index}
            className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
              index === selectedImageIndex
                ? 'border-2 border-orange-500 opacity-70'
                : 'hover:opacity-70'
            }`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalerieImage;