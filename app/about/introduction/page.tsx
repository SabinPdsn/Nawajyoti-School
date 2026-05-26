import React from "react";
import { client } from "@/sanity/lib/client";
import type { AboutQueryResult } from "@/types/about";
import { PortableText, type PortableTextReactComponents } from "@portabletext/react";

export default async function AboutIntroductionPage() {
  // Fetch about content from Sanity
  const aboutContent: AboutQueryResult | null = await client.fetch(`
    *[_type == "about"][0] {
      _id,
      title,
      introduction
    }
  `);

  if (!aboutContent) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    About Us
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  About content is not available at the moment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Custom components for rich text rendering
  const components: Partial<PortableTextReactComponents> = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-6">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 mt-4">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 mb-4">
          {children}
        </p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-scarlet pl-4 py-2 my-6 italic text-gray-600 bg-gray-50">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base lg:text-lg text-gray-700">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-sm sm:text-base lg:text-lg text-gray-700">
          {children}
        </ol>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-800">{children}</em>
      ),
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-scarlet hover:text-scarlet/80 underline transition-colors duration-200"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="px-4">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="relative mb-10 lg:mb-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  About Us
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Learn more about our school, our mission, and our commitment to education.
              </p>
            </div>
          </div>

          {/* Rich Text Content */}
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <PortableText
                value={aboutContent.introduction}
                components={components}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
