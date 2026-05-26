import Image from "next/image";
import React from "react";

export const HomeMissionVision = () => {
  return (
    <div className="min-h-screen pb-8 sm:pb-12 lg:pb-16 xl:pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left side text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center order-1 lg:order-1">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="relative">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-20">
                Our Missions & Vision
              </h1>
              {/* Scarlet underline */}
              <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet"></div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
                Our mission is to provide quality education that nurtures
                creativity, curiosity, and confidence. We aim to help every
                student discover their potential while building strong values of
                respect, integrity, and responsibility. By fostering both academic
                and personal growth, we prepare students to lead meaningful and
                successful lives.
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
                Our vision is to become a model school in Nepal that inspires
                future-ready learners and leaders. We seek to create a safe,
                inclusive, and supportive environment where students thrive
                academically, socially, and emotionally. With innovation and
                compassion, we aim to shape individuals who can contribute
                positively to the world.
              </p>
            </div>
          </div>
        </div>

        {/* Right side images */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <div className="flex justify-center lg:justify-end items-center gap-2 sm:gap-3 lg:gap-4">
            {/* First column */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <div className="overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/images/school1.jpg"
                  alt="School image 1"
                  width={400}
                  height={300}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/images/school3.jpg"
                  alt="School image 3"
                  width={400}
                  height={300}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Second column - offset downward */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-8">
              <div className="overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/images/school2.jpg"
                  alt="School image 2"
                  width={400}
                  height={300}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/images/school4.jpg"
                  alt="School image 4"
                  width={400}
                  height={300}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
