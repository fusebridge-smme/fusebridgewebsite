"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    quote: "Impressed by the professionalism and attention to detail.",
    name: "Himaja",
    handle: "Dream Boons",
    avatar: "https://placehold.co/100x100/38bdf8/white?text=H",
  },
  {
    id: 2,
    quote: "A seamless experience from start to finish. Highly recommend!",
    name: "Monica",
    handle: "Mom’s Recipe",
    avatar: "https://placehold.co/100x100/f472b6/white?text=M",
  },
  {
    id: 3,
    quote:
      "Reliable and trustworthy. Their photography and content are top-tier.",
    name: "Venkat",
    handle: "Brand Mart",
    avatar: "https://placehold.co/100x100/f87171/white?text=V",
  },
  {
    id: 4,
    quote: "Exceptional results and a fantastic team to work with.",
    name: "Rahul",
    handle: "CCC",
    avatar: "https://placehold.co/100x100/4ade80/white?text=R",
  },
  {
    id: 5,
    quote: "The personalized strategy was a game changer.",
    name: "Nandini",
    handle: "NV Studio",
    avatar: "https://placehold.co/100x100/a78bfa/white?text=N",
  },
  {
    id: 6,
    quote:
      "Quick, efficient, and truly understood our brand voice from day one.",
    name: "Naveen",
    handle: "Extra Mile",
    avatar: "https://placehold.co/100x100/facc15/white?text=N",
  },
];

const TestimonialCard = ({ quote, name, handle, avatar }) => (
  <div className="relative w-full flex-shrink-0">
    {/* MAIN CARD CONTAINER */}
    <div className="relative bg-gray-100 rounded-[2.5rem] p-8 pb-28 h-full">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 11L8 11C8 8.5 9 7.5 11 7L11 5C8 5 5 7 5 11L5 18L11 18L11 11Z"
            fill="#000"
          />
          <path
            d="M20 11L18 11C18 8.5 19 7.5 21 7L21 5C18 5 15 7 15 11L15 18L21 18L21 11Z"
            fill="#000"
          />
        </svg>
      </div>

      {/* Quote Text */}
      <p className="text-xl lg:text-2xl font-medium text-black leading-snug">
        {quote}
      </p>

      {/* THE "CUTOUT" PATCH */}
      <div className="absolute bottom-0 left-0 w-[80%] h-24 bg-smoky-black rounded-tr-[2.5rem] z-10"></div>
    </div>

    <div className="absolute bottom-5 left-5 z-20 flex items-center space-x-4">
      <img
        className="w-14 h-14 rounded-full object-cover ring-4 ring-white"
        src={avatar}
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/56x56/cbd5e1/white?text=${name.charAt(
            0
          )}`;
        }}
      />
      <div>
        <div className="font-bold text-white text-xl">{name}</div>
        <div className="font-bold text-orange text-xl">{handle}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <section className="pt-15">
      <h2 className="text-4xl font-extrabold ms-4 mb-2 text-vanilla">
        Testimonials
      </h2>

      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-4">
            <p className="text-xl font-bold text-orange mb-3">
              Here's what our clients have to say about our Agency.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* MOBILE LIST (Snap Scroll) */}
            <div className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory lg:hidden scrollbar-hide">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="snap-center flex-shrink-0 w-[85%] sm:w-[60%]"
                >
                  <TestimonialCard {...review} />
                </div>
              ))}
            </div>

            {/* DESKTOP CAROUSEL */}
            <div className="hidden lg:block relative overflow-visible">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: "100%",
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex-[0_0_33.333333%] min-w-[33.333333%] px-4"
                  >
                    <TestimonialCard {...review} />
                  </div>
                ))}
              </div>
            </div>

            {/* NAVIGATION (Desktop) */}
            <div className="hidden lg:flex justify-center mt-4 space-x-6 items-center">
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className={`p-4 rounded-full border border-black transition duration-300 ${
                  currentIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-white hover:border-black bg-white"
                }`}
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>

              <div className="flex space-x-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentIndex === index
                        ? "w-8 bg-white"
                        : "w-2 bg-white hover:bg-white"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></div>
                ))}
              </div>

              <button
                onClick={goToNext}
                disabled={currentIndex === totalPages - 1}
                className={`p-4 rounded-full border border-black transition duration-300 ${
                  currentIndex === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-white hover:border-black bg-white"
                }`}
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
