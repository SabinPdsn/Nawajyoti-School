"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anita P",
    text: "I've always been passionate about art, but I struggled to find a program that truly nurtured my creativity while also teaching me the practical skills I needed to succeed. This school's faculty are not just teachers; they are mentors.",
  },
  {
    name: "Tom Nancy S",
    text: "This school has been an incredible journey for my child. The teachers here don't just teach subjects; they teach character. My child has blossomed into a confident and curious learner, and the community here feels like a second family. We're so grateful for the personalized attention and the supportive environment.",
  },
  {
    name: "ALPUNX !!",
    text: "I was nervous about switching schools, but everyone here made me feel welcome from day one. My teachers took the time to understand my learning style, and I was able to catch up and even get ahead. I've made some of my best friends and discovered new passions in the clubs and activities.",
  },
  {
    name: "Sophia L",
    text: "The extracurricular opportunities are amazing! From robotics to drama, my child has been able to explore so many new interests.",
  },
  {
    name: "James R",
    text: "Teachers here genuinely care about each student’s growth, not just academically but also emotionally and socially.",
  },
  {
    name: "Maya D",
    text: "This school gave me confidence I never thought I had. The supportive mentors helped me push beyond my limits.",
  },
];

export const HomeTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    skipSnaps: false,
    dragFree: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-red-50 min-h-screen py-8 sm:py-12 lg:py-16 xl:py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-16">
        {/* Heading Section */}
        <div className="flex flex-col w-full justify-start items-center space-y-3 text-center">
          <h3 className="text-scarlet text-xl">What Our Students Say</h3>
          <h1 className="text-3xl sm:text-4xl font-bold max-w-5xl">
            Igniting Passion, Forging Futures: Stories of Success
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full">
          {/* Left Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </Button>

          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 h-full flex flex-col justify-between border border-gray-100">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 text-scarlet opacity-60"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 flex-grow">
                      {item.text}
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {item.name}
                      </h4>
                      <p className="text-scarlet text-sm font-medium">
                        Student
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};
