import React from "react";
import { client } from "@/sanity/lib/client";
import type { StaffQueryResult } from "@/types/staff";
import { Mail, Phone, Users } from "lucide-react";

export default async function AboutStaffsPage() {
  // Fetch all staff members from Sanity, ordered by order field then by name
  const staffMembers: StaffQueryResult[] = await client.fetch(`
    *[_type == "staff"] | order(order asc, name asc) {
      _id,
      name,
      designation,
      department,
      contactNumber,
      email,
      order
    }
  `);

  if (!staffMembers || staffMembers.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Our Staff
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  No staff information available at the moment.
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
                  Our Staff
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Meet our dedicated team of educators and staff members who are committed to providing quality education.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{staffMembers.length} Staff Members</span>
            </div>
          </div>

          {/* Staff Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Designation
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Department
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {staffMembers.map((staff) => (
                    <tr key={staff._id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {staff.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {staff.designation}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {staff.department}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`tel:${staff.contactNumber}`}
                          className="inline-flex items-center gap-1 text-sm text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                        >
                          <Phone className="w-3 h-3" />
                          {staff.contactNumber}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${staff.email}`}
                          className="inline-flex items-center gap-1 text-sm text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                        >
                          <Mail className="w-3 h-3" />
                          {staff.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              {staffMembers.map((staff) => (
                <div
                  key={staff._id}
                  className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {staff.name}
                      </h3>
                      <p className="text-sm text-gray-600">{staff.designation}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {staff.department}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={`tel:${staff.contactNumber}`}
                        className="flex items-center gap-2 text-sm text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4" />
                        {staff.contactNumber}
                      </a>
                      <a
                        href={`mailto:${staff.email}`}
                        className="flex items-center gap-2 text-sm text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                        {staff.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
