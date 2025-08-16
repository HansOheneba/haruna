// app/page.tsx
"use client";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[800px] overflow-hidden">
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
        <div className="relative h-full flex items-center justify-end pr-8 md:pr-16">
          <div className="text-right">
            <div className="font-script text-rose-500 mb-4">
              <div className="text-3xl md:text-4xl">Our</div>
              <div className="text-5xl md:text-6xl font-bold">Love</div>
              <div className="text-5xl md:text-6xl font-bold">Story</div>
            </div>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Read →
            </button>
          </div>
        </div>
      </section>

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
                <h2 className="font-script text-3xl text-rose-500 relative">
                  — Story —
                </h2>
              </div>
            </div>

            <br />
            <br />
            <br />
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 flex-1">
                Now We Will Get Married
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
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              RSVP
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-rose-500 mb-1">
                {timeLeft.days}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-rose-500 mb-1">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-rose-500 mb-1">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Minutes
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-rose-500 mb-1">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Seconds
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 ml-8 py-10">
            <div className="text-sm">20th Dec 2025</div>
          </div>
        </div>
      </section>
    </div>
  );
}
