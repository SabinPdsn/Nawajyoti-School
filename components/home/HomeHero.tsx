import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/hero.png";

export const HomeHero = () => {
  return (
    <section
      aria-label="Hero"
      className="relative isolate flex items-center justify-center w-full min-h-[70vh] md:min-h-[85vh] overflow-hidden"
    >
      {/* Background image */}
      <Image
        src={heroImg}
        alt="Children learning together outdoors"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Overlay above image, below content */}
      <div aria-hidden className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold leading-tight tracking-tight text-white drop-shadow">
          Your child’s journey to success
          <span className="block">starts here.</span>
        </h1>

        <p className="mt-4 mx-auto max-w-5xl text-sm sm:text-base md:text-lg text-white/90">
          Creating an environment where every child feels valued, supported, and
          inspired to grow.
        </p>

        <a
          href="/about/introduction"
          className="mt-8 inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-scarlet px-6 py-3 text-base font-medium text-white shadow-lg ring-1 ring-white/10 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-scarlet focus-visible:ring-offset-2"
        >
          See More
        </a>
      </div>

      {/* Optional subtle gradient edges for readability (can remove if not needed) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
      />
    </section>
  );
};
