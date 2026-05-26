"use client";

import Image from "next/image";
import React from "react";
import HeroAbout from "@/public/images/heroAbout.png";
import Executives from "@/public/images/bot.png";
import { Users, Medal } from "lucide-react";

export const HomeAbout = () => {
  return (
    <>
      {/* EXISTING ABOUT SECTION (unchanged) */}
      <section className="w-full bg-white pt-10 sm:pt-14 lg:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative">
            <Image
              src={HeroAbout}
              alt="About Shree Nawajyoti School"
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="relative">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-20">
                  About us
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>

              <p className="mt-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
                Shree Nawajyoti School takes pride in fostering a nurturing
                environment where students grow with knowledge, discipline, and
                creativity. Our dedicated team of educators is committed to
                excellence in teaching, guiding each child with precision, care,
                and responsibility. The school emphasizes holistic development,
                blending academic achievement with moral values, co-curricular
                activities, and modern learning approaches.
              </p>

              <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:divide-x sm:divide-gray-200">
                <Stat
                  icon={
                    <Users
                      className="mx-auto h-7 w-7 text-scarlet"
                      aria-hidden
                    />
                  }
                  value="32+"
                  top="years of experience -"
                  bottom="founded in 2050 B.S."
                />
                <Stat
                  icon={
                    <Medal
                      className="mx-auto h-7 w-7 text-scarlet"
                      aria-hidden
                    />
                  }
                  value="200+"
                  top="Directly Employed"
                  bottom="Manpower"
                />
                <Stat
                  icon={
                    <Users
                      className="mx-auto h-7 w-7 text-scarlet"
                      aria-hidden
                    />
                  }
                  value="4500+"
                  top="Enrolled learners of this"
                  bottom="institution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            In the Words of Our Executives
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded bg-scarlet" />
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
            Our executive members bring forward the vision and leadership that
            shape our organization. Their voices reflect not only their
            experiences but also their commitment to excellence, innovation, and
            progress. Through their insights, we find inspiration to move
            forward with confidence and clarity.
          </p>
          <div className="relative mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-5xl isolate">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2
               -translate-x-1/2 -translate-y-1/2
               h-14 sm:h-16 w-screen bg-scarlet"
            />
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <Image
                src={Executives}
                alt="School executives"
                sizes="(min-width:1280px) 1024px, (min-width:640px) 90vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Stat({
  icon,
  value,
  top,
  bottom,
}: {
  icon: React.ReactNode;
  value: string;
  top: string;
  bottom: string;
}) {
  return (
    <div className="text-center px-2">
      {icon}
      <div
        className="mt-3 font-semibold text-slate-900
                      text-[1.625rem] sm:text-[1.75rem] lg:text-[1.875rem]"
      >
        {value}
      </div>
      <div className="mt-2 text-xs sm:text-[13px] leading-5 text-slate-500">
        {top} <br /> {bottom}
      </div>
    </div>
  );
}
