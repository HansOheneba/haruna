"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What should I wear?",
    answer:
      "We recommend elegant attire. Dress code details will be shared soon.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Please check your invitation for guest details. This will be confirmed individually.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, ample parking is available at the TRANQUILLUS venue.",
  },
  {
    question: "Will there be vegetarian options?",
    answer:
      "Yes, we'll have a variety of meal options including vegetarian dishes.",
  },
];

// Helper to download an .ics calendar file
const downloadICS = () => {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Wedding of Haruna & Nanayaa
DTSTART:20251220T133000Z
DTEND:20251220T180000Z
LOCATION:TRANQUILLUS, Accra
DESCRIPTION:Join us in celebrating Haruna & Nanayaa's wedding!
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "haruna_nanayaa_wedding.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const WeddingDetails = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-4xl mx-auto mt-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">
            
          </h1>
          <div className="text-3xl md:text-4xl font-light text-stone-600 tracking-wider">
            12 · 20 · 2025
          </div>
        </motion.div>

        {/* Main Details Card */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Reception Details */}
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-6">
                Reception Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-stone-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-800">Date</p>
                    <p className="text-stone-600">
                      Saturday, December 20th, 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-stone-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-800">Time</p>
                    <p className="text-stone-600">1:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-stone-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-800">Location</p>
                    <p className="text-stone-600">TRANQUILLUS</p>
                    <p className="text-stone-500 text-sm">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <button
                onClick={downloadICS}
                className="mt-8 w-full md:w-auto bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Add to Calendar
              </button>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-6">
                Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                  <span className="font-medium text-stone-800">1:30 PM</span>
                  <span className="text-stone-600">Ceremony</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                  <span className="font-medium text-stone-800">3:00 PM</span>
                  <span className="text-stone-600">Reception & Lunch</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                  <span className="font-medium text-stone-800">7:00 PM</span>
                  <span className="text-stone-600">After Party</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-6 border-b border-stone-100">
            <h3 className="font-serif text-2xl text-stone-800">Location</h3>
            <p className="text-stone-600 mt-1">TRANQUILLUS, Accra</p>
          </div>
          <div className="h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4915.301761276331!2d-0.20646620000000002!3d5.7912154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf77594ec0bfb1%3A0x2c20fe1bf48793ac!2sTRANQUILLUS!5e1!3m2!1sen!2sgh!4v1755354694562!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl text-stone-800 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-stone-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors duration-200"
                >
                  <span className="font-medium text-stone-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-stone-600 border-t border-stone-100">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default WeddingDetails;
