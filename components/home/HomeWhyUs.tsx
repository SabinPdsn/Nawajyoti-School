import React from "react";

export const HomeWhyUs = () => {
  return (
    <div className="bg-red-50 min-h-screen py-8 sm:py-12 lg:py-16 xl:py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Header Section */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
            <h1 className="text-scarlet font-bold text-sm sm:text-base lg:text-lg">Why Choose Our Story?</h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Building a Foundation for a lifetime of success
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-start lg:justify-end">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              We believe that education is a lifelong journey. We provide a
              supportive and challenging academic environment that prepares
              students to thrive in a rapidly changing world. Our focus is on
              nurturing critical thinking, creativity, and a passion for making
              a difference.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-scarlet h-80 sm:h-96 lg:h-[28rem] w-full md:w-1/3 text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16 rounded-lg shadow-lg">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              >
                <path d="M16 11c1.657 0 3-1.343 3-3S17.657 5 16 5s-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zm0 2c-2.673 0-8 1.337-8 4v3h10v-3c0-2.663-5.327-4-8-4zm8 0c-.29 0-.622.018-.982.049C16.472 13.967 18 14.956 18 16v4h6v-3c0-2.663-5.327-4-8-4z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase">The Power of</h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-3 sm:mb-4">Community</h3>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs">
              Being part of our school community means more than just sharing
              the same campus. We share a common purpose, a passion for
              learning, and a drive to build a supportive and inclusive
              environment where everyone feels they belong.
            </p>
          </div>
          <div className="bg-scarlet h-80 sm:h-96 lg:h-[28rem] w-full md:w-1/3 text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16 rounded-lg shadow-lg">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase">The Power of</h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-3 sm:mb-4">Learning</h3>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs">
              As education evolves, so do our teaching methods. We lead the way
              in innovative, research-based instruction that enables us to
              constantly engage students in a personalized learning journey that
              prepares them for a successful future.
            </p>
          </div>
          <div className="bg-scarlet h-80 sm:h-96 lg:h-[28rem] w-full md:w-1/3 text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 lg:py-16 rounded-lg shadow-lg">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={0}
                stroke="currentColor"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              >
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold uppercase">The Power of</h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-3 sm:mb-4">Creativity</h3>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-xs">
              Our innovative programs and dedicated faculty foster an
              environment where students can explore their passions, develop
              critical thinking skills, and express themselves freely. This
              encourages them to become confident problem-solvers and original
              thinkers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
