import React from "react";
import { client } from "@/sanity/lib/client";
import type { DownloadItemQueryResult, DownloadCategory } from "@/types/downloads";
import { Download, Calendar } from "lucide-react";

// Helper function to get file URL from Sanity asset reference
const getFileUrl = (assetRef: string): string => {
  if (!assetRef) return '';
  
  // Remove the file- prefix and -pdf suffix to get the asset ID
  const assetId = assetRef.replace('file-', '').replace(/-pdf$/, '');
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}.pdf`;
};

// Category color mapping
const getCategoryColor = (category: DownloadCategory): string => {
  const colors = {
    syllabus: 'bg-blue-100 text-blue-800',
    forms: 'bg-green-100 text-green-800',
    reports: 'bg-purple-100 text-purple-800',
    workshops: 'bg-orange-100 text-orange-800',
    books: 'bg-red-100 text-red-800',
    journals: 'bg-indigo-100 text-indigo-800',
    guidelines: 'bg-yellow-100 text-yellow-800',
    policies: 'bg-gray-100 text-gray-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

// Category display names
const getCategoryDisplayName = (category: DownloadCategory): string => {
  const names = {
    syllabus: 'Syllabus',
    forms: 'Forms',
    reports: 'Reports',
    workshops: 'Workshops',
    books: 'Books',
    journals: 'Journals',
    guidelines: 'Guidelines',
    policies: 'Policies',
  };
  return names[category] || category;
};

export default async function DownloadsPage() {
  // Fetch all download items from Sanity, ordered by order field then by date
  const downloadItems: DownloadItemQueryResult[] = await client.fetch(`
    *[_type == "downloads"] | order(order asc, date desc) {
      _id,
      name,
      description,
      category,
      date,
      file,
      order
    }
  `);

  if (!downloadItems || downloadItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Downloads
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  No downloads available at the moment.
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
                  Downloads
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Access important documents, forms, reports, and resources for students, parents, and staff.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Download className="w-4 h-4" />
              <span>{downloadItems.length} Downloads</span>
            </div>
          </div>

          {/* Downloads List */}
          <div className="space-y-4">
            {downloadItems.map((item) => {
              const fileUrl = getFileUrl(item.file.asset._ref);
              const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left side - Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}
                        >
                          {getCategoryDisplayName(item.category)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formattedDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Download button */}
                    <div className="flex-shrink-0">
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-scarlet text-white text-sm font-medium rounded-lg hover:bg-scarlet/90 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
