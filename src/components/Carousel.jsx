import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const carouselData = [
  {
    image: 'https://via.placeholder.com/800x400', // Replace with your image URLs
    description: 'Movie 1 Description',
    ticketLink: '#'
  },
  {
    image: 'https://via.placeholder.com/800x400',
    description: 'Movie 2 Description',
    ticketLink: '#'
  },
  {
    image: 'https://via.placeholder.com/800x400',
    description: 'Movie 3 Description',
    ticketLink: '#'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[60vh] max-w-full overflow-hidden">
  <div
    className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
  >
    {/* Carousel Arrow Buttons */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
      
      {/* Description and Buy Ticket */}
      <div className="absolute bottom-4 left-4 text-left">
        <p className="text-white mb-2">{carouselData[currentIndex].description}</p>
        <a
          href={carouselData[currentIndex].ticketLink}
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-400"
        >
          Buy Ticket
        </a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Carousel;