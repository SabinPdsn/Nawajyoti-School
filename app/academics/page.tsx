import React from "react";
import { client } from "@/sanity/lib/client";
import type { AcademicProgramQueryResult } from "@/types/academics";
import { FileText, Clock, GraduationCap } from "lucide-react";

// Helper function to get file URL from Sanity asset reference
const getFileUrl = (assetRef: string): string => {
  if (!assetRef) return '';
  
  // Remove the file- prefix and -pdf suffix to get the asset ID
  const assetId = assetRef.replace('file-', '').replace(/-pdf$/, '');
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}.pdf`;
};

export default async function AcademicsPage() {
  // Fetch all academic programs from Sanity, ordered by order field then by name
  const academicPrograms: AcademicProgramQueryResult[] = await client.fetch(`
    *[_type == "academics"] | order(order asc, name asc) {
      _id,
      name,
      description,
      years,
      attachments,
      order
    }
  `);

  if (!academicPrograms || academicPrograms.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Academic Programs
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  No academic programs available at the moment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="px-4">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="relative mb-10 lg:mb-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Academic Programs
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Explore our comprehensive range of academic programs designed to provide quality education and prepare students for their future careers.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <GraduationCap className="w-4 h-4" />
              <span>{academicPrograms.length} Programs</span>
            </div>
          </div>

          {/* Academic Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicPrograms.map((program) => (
              <div
                key={program._id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <div className="space-y-4">
                  {/* Program Header */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {program.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{program.years} year{program.years > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Attachments */}
                  {program.attachments && program.attachments.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Documents
                      </h4>
                      <div className="space-y-2">
                        {program.attachments.map((attachment, index) => {
                          const fileUrl = getFileUrl(attachment.asset._ref);
                          return (
                            <a
                              key={index}
                              href={fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                            >
                              <FileText className="w-4 h-4" />
                              <span>{attachment.title || `Document ${index + 1}`}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
