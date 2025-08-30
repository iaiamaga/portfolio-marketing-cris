import React, { useState } from 'react';

interface CarouselProps {
  items: string[];
  aspectRatio: 'square' | 'vertical' | 'horizontal';
}

const Carousel: React.FC<CarouselProps> = ({ items, aspectRatio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'vertical':
       return 'aspect-[9/16]';
      case 'horizontal':
        return 'aspect-video';
      default:
        return 'aspect-video';
    }
  };

  return (
<div className="relative w-80 mx-auto group">
      <div
        style={{ backgroundImage: `url(${items[currentIndex]})` }}
        className={`w-full rounded-lg bg-center bg-cover duration-500 ${getAspectRatioClass()}`}
      ></div>
      {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white border-10 cursor-pointer" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      {/* Right Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
