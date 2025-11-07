// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
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

      {/* Hero Content */}
      <section className="relative h-[93vh] w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black">
        {/* Background Watermark Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Wedding Background"
            fill
            className="object-cover opacity-100 blur-xs"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 font-script flex flex-col items-center justify-center px-4">
          {/* Names */}
          <h1 className=" text-4xl md:text-7xl font-bold text-white leading-tight tracking-wider">
            NANA YAA <br className="block" /> DUAH
          </h1>
          <p className="text-white text-3xl md:text-3xl italic my-2">&amp;</p>
          <h1 className=" text-4xl md:text-7xl font-bold text-white leading-tight tracking-wider mb-8">
            HARUNA <br className="hidden md:block" /> SULEMANA
          </h1>

          {/* Countdown */}
          <div className="text-white mb-6 space-x-2 flex justify-center items-center">
            <p className="text-md font-medium">{timeLeft.days} Days</p>
            <p className="text-md font-medium">{timeLeft.hours} Hours</p>
            <p className="text-md font-medium">{timeLeft.minutes} Minutes</p>
          </div>

          {/* Button */}
          <Link href="/event-details">
            <button className="bg-white hover:bg-white/80 text-black md:px-6 md:py-2 p-2 rounded-full text-xs md:text-base font-medium shadow-md transition-colors">
              See Details →
            </button>
          </Link>
        </div>
      </section>

      <div className="text-center text-gray-600 py-5 bg-white">
        <div className="text-lg font-serif tracking-widest text-stone-700/80">
          20 · Dec · 2025
        </div>
      </div>
      {/* Love Story Section */}
      <div className="p-4 sm:p-6 md:p-10">
        <div className="max-w-4xl mx-auto text-center bg-amber-50/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl mb-12 border border-amber-200">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-serif tracking-wide text-xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-900 mb-4 sm:mb-6">
              How Did We Get Here?
            </h2>
            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-amber-900 to-lime-800 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="prose prose-xs sm:prose-sm md:prose-base lg:prose-lg max-w-none text-left text-stone-800 leading-relaxed">
            <p className="text-base sm:text-lg md:text-xl font-light italic text-amber-700 mb-6 sm:mb-8 text-center">
              "What started out as a shot in the dark with a harmless text
              message turned out to be the unfolding of a love story that only
              God could have written."
            </p>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <p>
                What started out as a shot in the dark with a harmless text
                message turned out to be the unfolding of a love story that only
                God could have written. <br /> Nana Yaa first caught Haruna’s eye over
                a year before they would ever meet when Nicolette, a mutual
                friend, posted a photo of Nana Yaa on her WhatsApp status. “This
                your friend fine oo”, he remarked jokingly, and that was all it
                was then - a quip between friends. But a year later, when the
                same girl made another appearance on Nicolette’s WhatsApp
                status, the sentiment graduated to a genuine request to be
                “linked up“ with this beauty. Nicolette’s reaction to his
                request, however, was what really piqued his interest. Her
                earnest and emphatic cautions to Haruna to not “mess things up”,
                all while singing Nana Yaa's praises, got him curious as to what
                manner of woman this lady really was. And on the other side of
                the link up, Nana Yaa miraculously gave Nicolette the go-ahead
                for her contact to be given to Haruna. <br /> Neither of the two
                could’ve guessed that this was the beginning of a beautiful
                journey of friendship and love, a deep connection that they
                never saw coming. From their very first date to the many
                memories since, the late-night car rides and endless
                conversations, the evidence is undeniable that this story was
                written with a Purpose by the Author Himself.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 p-4 sm:p-6">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-900 italic text-center">
                ... a story of LOVE and PURPOSE,
                <br />
                <span className="tracking-widest">#SealedWithLove</span>.
              </p>
              <p className="mt-3 text-amber-700 font-medium text-center">
                #LETTHEFUNBEGIN!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          {/* <div className="mb-8">
            <div className="flex justify-center">
              <div className="relative inline-block text-center">
               
                <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-black/10 select-none">
                  LOVE STORY
                </span>

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
          </div> */}

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
