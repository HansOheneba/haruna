"use client";

import React, { useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryImages = [
  {
    id: 1,
    src: "/assets/harunaMobi.jpg",
    thumb: "/assets/harunaMobi.jpg",
    size: "1920-1080",
    alt: "Wedding Photo 1",
    title: "Beautiful Moments",
  },
  {
    id: 2,
    src: "/assets/pic6.jpg",
    thumb: "/assets/pic6.jpg",
    size: "720-1280",
    alt: "Wedding Photo 2",
    title: "Love Story",
  },
  {
    id: 3,
    src: "/assets/pic1.JPG",
    thumb: "/assets/pic1.JPG",
    size: "1920-1080",
    alt: "Wedding Photo 3",
    title: "Special Moments",
  },
  {
    id: 4,
    src: "/assets/pic2.JPG",
    thumb: "/assets/pic2.JPG",
    size: "1920-1080",
    alt: "Wedding Photo 4",
    title: "Celebration",
  },
  {
    id: 5,
    src: "/assets/pic3.JPG",
    thumb: "/assets/pic3.JPG",
    size: "1920-1080",
    alt: "Wedding Photo 5",
    title: "Joy & Laughter",
  },
  {
    id: 6,
    src: "/assets/pic4.JPG",
    thumb: "/assets/pic4.JPG",
    size: "1920-1080",
    alt: "Wedding Photo 6",
    title: "Forever Together",
  },
  {
    id: 7,
    src: "/assets/pic5.JPG",
    thumb: "/assets/pic5.JPG",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 8,
    src: "/assets/gal1.jpeg",
    thumb: "/assets/gal1.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 9,
    src: "/assets/gal2.jpeg",
    thumb: "/assets/gal2.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 10,
    src: "/assets/gal3.jpeg",
    thumb: "/assets/gal3.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 11,
    src: "/assets/gal4.jpeg",
    thumb: "/assets/gal4.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 12,
    src: "/assets/gal5.jpeg",
    thumb: "/assets/gal5.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 13,
    src: "/assets/gal6.jpeg",
    thumb: "/assets/gal6.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 14,
    src: "/assets/gal6.jpeg",
    thumb: "/assets/gal6.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 15,
    src: "/assets/gal7.jpeg",
    thumb: "/assets/gal7.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 16,
    src: "/assets/gal8.jpeg",
    thumb: "/assets/gal8.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 17,
    src: "/assets/gal9.jpeg",
    thumb: "/assets/gal9.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
  {
    id: 18,
    src: "/assets/gal10.jpeg",
    thumb: "/assets/gal10.jpeg",
    size: "1920-1080",
    alt: "Wedding Photo 7",
    title: "Perfect Day",
  },
];

const GalleryPage = () => {
  const lightGalleryRef = useRef<any>(null);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGalleryRef.current = detail.instance;
    }
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header */}

     

        <div className="text-center mb-16">
          <div className="relative inline-block">
            <span className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold text-black/5 select-none whitespace-nowrap">
              GALLERY
            </span>
            <h1 className="font-script text-4xl md:text-5xl text-white relative mb-4">
              — Our Gallery —
            </h1>
          </div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Capturing precious moments and beautiful memories
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="mb-12">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            mode="lg-fade"
            thumbnail={true}
            animateThumb={true}
            zoomFromOrigin={false}
            allowMediaOverlap={true}
            toggleThumb={true}
            dynamic={false}
            hash={false}
            elementClassNames="masonry-gallery"
          >
            {galleryImages.map((image) => (
              <a
                key={image.id}
                href={image.src}
                data-lg-size={image.size}
                className="gallery-item group cursor-pointer"
                // data-sub-html={`<h4>${image.title}</h4><p>${image.alt}</p>`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    src={image.thumb}
                    // alt={image.alt}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-rose-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </LightGallery>
        </div>

        {/* Stats */}
        {/* <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">
                {galleryImages.length}
              </div>
              <div className="text-gray-600 font-medium">Beautiful Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium">Precious Memories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">1</div>
              <div className="text-gray-600 font-medium">Perfect Day</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .masonry-gallery {
          column-count: 3;
          column-gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        @media (max-width: 640px) {
          .masonry-gallery {
            column-count: 1;
          }
        }

        .gallery-item {
          display: inline-block;
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .lg-backdrop {
          background-color: rgba(0, 0, 0, 0.9);
        }

        .lg-toolbar {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            transparent
          );
        }

        .lg-thumb-outer {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .lg-sub-html {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: white;
          padding: 20px;
        }

        .lg-sub-html h4 {
          color: #f43f5e;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
