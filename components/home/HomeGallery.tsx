import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { GalleryQueryResult } from '@/types/gallery'

export const HomeGallery = async () => {
  // Fetch gallery items from Sanity (limit to 8 for homepage)
  const galleryItems: GalleryQueryResult[] = await client.fetch(`
    *[_type == "gallery"] | order(order asc, name asc) [0...8] {
      _id,
      name,
      image {
        asset,
        alt
      },
      description,
      order
    }
  `)


  if (!galleryItems || galleryItems.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600">No gallery items available yet.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="relative mb-10 lg:mb-20">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Our Gallery
              </h2>
              <div className="absolute left-0 top-full mt-2 sm:mt-3 lg:mt-4 w-12 sm:w-14 lg:w-16 h-0.5 sm:h-1 bg-scarlet" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700 max-w-2xl">
              Explore our school through these beautiful moments and memories
            </p>
          </div>
          <div className="flex items-center">
            <a 
              href="/gallery" 
              className="text-scarlet hover:text-scarlet/80 font-medium text-sm sm:text-base transition-colors duration-300"
            >
              View all →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => {
            const imageBuilder = item.image?.asset ? urlFor(item.image) : null
            const imageUrl = imageBuilder ? 
              imageBuilder.width(400).height(400).quality(80).url() : 
              null
            
            return (
              <div
                key={item._id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={item.image?.alt || item.name}
                      fill
                      className="object-cover transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>
              
                <div className="absolute inset-0 bg-transparent hover:bg-black/20 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
