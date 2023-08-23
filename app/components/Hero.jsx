'use client'

import Link from "next/link";
import React from "react";


export default function Hero() {
  React.useEffect(() => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    const moveToNextSlide = () => {
      carouselItems[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add("active");
    };

    const carouselInterval = setInterval(moveToNextSlide, 3000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <div className="">
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full active">
          <img
            src="/assets/images/hero.svg"
            className="w-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/assets/images/pasta.webp"
            className="w-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/assets/images/fries.webp"
            className="w-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/assets/images/buffet.webp"
            className="w-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
