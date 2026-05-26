import React from "react";
import { client } from "@/sanity/lib/client";
import type { NoticeQueryResult } from "@/types/notice";
import { Paperclip, Pin } from "lucide-react";

// Helper function to generate Sanity file URLs
const getFileUrl = (assetRef: string) => {
  if (!assetRef) return "";

  // Sanity file URLs follow this pattern:
  // https://cdn.sanity.io/files/{projectId}/{dataset}/{fileId}.{extension}
  // The assetRef format is: file-{fileId}-{extension}

  const parts = assetRef.split("-");
  if (parts.length < 3) return "";

  const fileId = parts[1];
  const extension = parts.slice(2).join("-"); // Handle extensions with hyphens

  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileId}.${extension}`;
};

export default async function NoticePage() {
  // Fetch all notices from Sanity, ordered by pinned first, then by date
  const notices: NoticeQueryResult[] = await client.fetch(`
    *[_type == "notice"] | order(pinned desc, datePosted desc) {
      _id,
      title,
      description,
      attachment {
        asset,
        description
      },
      pinned,
      datePosted,
      category
    }
  `);

  // Separate pinned and regular notices
  const pinnedNotices = notices.filter((notice) => notice.pinned);
  const regularNotices = notices.filter((notice) => !notice.pinned);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "emergency":
        return "text-red-700 bg-red-100";
      case "examination":
        return "text-purple-700 bg-purple-100";
      case "academic":
        return "text-blue-700 bg-blue-100";
      case "event":
        return "text-green-700 bg-green-100";
      case "holiday":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const NoticeCard = ({ notice }: { notice: NoticeQueryResult }) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        {/* Left side - Title and Description */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {notice.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(
                    notice.category
                  )}`}
                >
                  {notice.category.charAt(0).toUpperCase() +
                    notice.category.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{notice.description}</p>

          <div className="text-sm text-gray-500">
            Posted on {formatDate(notice.datePosted)}
          </div>
        </div>

        {/* Right side - View Attachment */}
        {notice.attachment && (
          <div className="flex-shrink-0">
            <a
              href={getFileUrl(notice.attachment.asset._ref)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-scarlet text-white text-sm font-medium rounded-lg hover:bg-scarlet/90 transition-colors duration-200"
            >
              <Paperclip className="w-4 h-4" />
              View Attachment
            </a>
          </div>
        )}
      </div>
    </div>
  );

  if (!notices || notices.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Notice Board
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  No notices available at the moment.
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
                  Notice Board
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Stay updated with the latest announcements and important
                information from our school.
              </p>
            </div>
          </div>

          {/* Pinned Notices Section */}
          {pinnedNotices.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Pin className="w-6 h-6 text-scarlet" />
                Pinned Notices
              </h2>
              <div className="space-y-4">
                {pinnedNotices.map((notice) => (
                  <NoticeCard key={notice._id} notice={notice} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Notices Section */}
          {regularNotices.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Notices
              </h2>
              <div className="space-y-4">
                {regularNotices.map((notice) => (
                  <NoticeCard key={notice._id} notice={notice} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
