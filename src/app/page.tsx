'use client';

import React from 'react'
import Image from 'next/image';
import Card from './components/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div>
      {/* Carousel only */}
      <div className="relative w-full h-[70vh] mb-10">
        <div className="embla w-full h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            <div className="embla__slide">
              <Image
                src="https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-3232abf/dlifeinteriors.com/wp-content/uploads/2023/04/THE-MOST-RELIABLE-new-04-scaled.jpg"
                alt="Hero Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="embla__slide">
              <Image
                src="https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-3232abf/dlifeinteriors.com/wp-content/uploads/2023/04/FO-01-scaled.jpg"
                alt="Hero Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="embla__slide">
              <Image
                src="https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-3232abf/dlifeinteriors.com/wp-content/uploads/2023/04/Project-Handover-new-03-scaled.jpg"
                alt="Hero Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text section - OUTSIDE the height-limited div */}
      <div className="px-4 py-16">
        <div className="flex flex-col items-center text-[#0a0a0a]">
          <h1 className="text-4xl font-bold mb-5 text-center">
            One-stop shop for all things interiors
          </h1>
          <h2 className="text-2xl font-medium text-center">
            Be it end-to-end interiors, renovation or modular solutions, we have it all
          </h2>
          <h2 className="text-2xl font-medium text-center">
            for your home or office. With a wide range of furniture & decor, we have your back from start
          </h2>
          <h2 className="text-2xl font-medium text-center">
            to finish.
          </h2>
        </div>
      </div>

      <div className="px-4 py-16 bg-soft-dark">
        <div className="flex flex-col items-center text-[#0a0a0a]">
          <h1 className="text-4xl font-bold mb-5 text-center">
            Complete Interior & Renovation Services
          </h1>
        </div>
        <div className='flex flex-wrap justify-center gap-6 px-4 py-6'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>

       <div className="px-4 py-16">
        <div className="flex flex-col items-center text-[#0a0a0a]">
          <h1 className="text-4xl font-bold mb-5 text-center">
            Get Your Estimation Now
          </h1>
        </div>
        <div className='flex flex-wrap justify-center gap-6 px-4 py-6'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
  );
}
