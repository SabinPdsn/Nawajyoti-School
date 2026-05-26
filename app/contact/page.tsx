import React from "react";
import { client } from "@/sanity/lib/client";
import type { ContactQueryResult } from "@/types/contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default async function ContactPage() {
  // Fetch contact information from Sanity
  const contactInfo: ContactQueryResult | null = await client.fetch(`
    *[_type == "contact"][0] {
      _id,
      email,
      contactNumbers,
      googleMapsLink,
      address
    }
  `);

  if (!contactInfo) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="relative mb-10 lg:mb-20">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                    Contact Us
                  </h1>
                  <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                  Contact information is not available at the moment.
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
                  Contact Us
                </h1>
                <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
                Get in touch with us. We&apos;re here to help and answer any questions you may have.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-scarlet" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-scarlet" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone Numbers</h3>
                    <div className="space-y-3">
                      {contactInfo.contactNumbers.map((contact, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <span className="text-sm font-medium text-gray-600 min-w-[120px]">
                            {contact.label}:
                          </span>
                          <a
                            href={`tel:${contact.number}`}
                            className="text-scarlet hover:text-scarlet/80 transition-colors duration-200"
                          >
                            {contact.number}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              {contactInfo.address && (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-scarlet" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-700 leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Office Hours */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-scarlet" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Sunday - Thursday:</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={contactInfo.googleMapsLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-scarlet rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <p className="text-scarlet-100 mb-4">
                  Have a question? Feel free to reach out to us through any of the contact methods above.
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block w-full bg-white text-scarlet text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    Send Email
                  </a>
                  {contactInfo.contactNumbers.length > 0 && (
                    <a
                      href={`tel:${contactInfo.contactNumbers[0].number}`}
                      className="block w-full bg-white/20 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200"
                    >
                      Call Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
