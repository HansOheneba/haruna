// app/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function WeddingPage() {
  const weddingDate = new Date("2025-12-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[900px] overflow-hidden">
        {/* Mobile Background */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat md:hidden"
          style={{ backgroundImage: "url(/assets/harunaMobi.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Desktop Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url(/assets/haruna.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-end pr-8 md:pr-16 pt-5">
          <div className="md:text-left text-right">
            <div className="font-script text-white mb-2">
              {/* Countdown stacked like text blocks */}

              <div className="text-2xl md:text-6xl font-bold">
                {timeLeft.days} Days
              </div>
              <div className="text-xl md:text-4xl font-bold">
                {timeLeft.hours} Hours
              </div>
              <div className="text-md md:text-xl font-bold">
                {timeLeft.minutes} Minutes
              </div>
            </div>

            <Link href={"/event-details"}>
              <button className="bg-white hover:bg-white/80 text-black md:px-6 md:py-2 p-2 rounded-full text-xs md:text-base font-medium shadow-md transition-colors">
                See Details →
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center text-gray-600 py-5 bg-white">
        <div className="text-lg font-serif tracking-widest text-stone-700/80">
          20 · Dec · 2025
        </div>
      </div>

      {/* Love Story Section */}
      <div className="p-4 sm:p-6 md:p-10">
        <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl mb-12 border border-amber-100">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-script text-xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-800 mb-4 sm:mb-6">
              Our Love Story
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-amber-800 to-lime-900 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="prose prose-xs sm:prose-sm md:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg md:text-xl font-light italic text-amber-700 mb-6 sm:mb-8">
              "Some love stories are written in the stars, but ours was written
              in stolen glances and shared laughter."
            </p>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
              <div className="space-y-3 sm:space-y-4">
                <p>
                  Our journey began in the most unexpected way - a chance
                  encounter that felt like destiny. From the very first moment
                  we met, there was something magical in the air, a connection
                  that transcended words and touched our hearts.
                </p>
                <p>
                  What started as friendship blossomed into something beautiful
                  and profound. Through late-night conversations, shared dreams,
                  and countless moments of pure joy, we discovered that we had
                  found our perfect match in each other.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p>
                  Every day with you feels like a new adventure, filled with
                  laughter, love, and endless possibilities. You've shown me
                  what it means to love unconditionally and to be loved in
                  return with such pure, genuine affection.
                </p>
                <p>
                  Today, as we celebrate our love surrounded by family and
                  friends, we're not just joining two lives together - we're
                  continuing a beautiful story that began with that first hello
                  and will last for all eternity.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-6 bg-gradient-to-r from-amber-50/30 to-lime-50/50 rounded-2xl">
              <p className="text-sm sm:text-base md:text-lg font-medium text-amber-900 italic">
                "In you, I've found the love of my life and my closest, truest
                friend. Here's to forever and always, my darling Haruna."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Story Header */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="relative inline-block text-center">
                {/* Background ghost text */}
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-black/10 select-none">
                  LOVE STORY
                </span>

                {/* Foreground heading */}
                <h2 className="font-script text-3xl text-amber-900 relative">
                  — Story —
                </h2>
              </div>
            </div>

            <br />
            <br />
            <br />
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 flex-1">
                This is Just the Beginning
              </h3>
            </div>
          </div>

          {/* Story Content */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join us as we celebrate our love story and the beginning of our
              journey together as husband and wife. We can't wait to share this
              special day with our family and friends who have supported us
              along the way.
            </p>
          </div>

          {/* RSVP Button */}
          <div className="mb-12">
            <a
              href="https://forms.gle/BsNE6FYTApMALS2d9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
                RSVP
              </button>
            </a>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-1">
                {timeLeft.days}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-1">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-1">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Minutes
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-1">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Seconds
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 ml-8 py-10">
            <div className="text-lg font-serif tracking-widest text-stone-700/80">
              20 · Dec · 2025
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
