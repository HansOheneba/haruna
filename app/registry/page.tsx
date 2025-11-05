"use client";
import { motion } from "framer-motion";
import { Gift, Phone, Check } from "lucide-react";
import { useState } from "react";

const WeddingRegistry = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => setCopied(null), 2000);
  };

  const momoNumbers = [
    { number: "0209581240", provider: "Telecel Cash" },
    { number: "0557382234", provider: "MTN MoMo" },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto mt-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-white font-playfair mb-4 pt-10">
            Wedding Registry
          </h1>
          <p className="text-md text-white max-w-2xl mx-auto italic">
            “We’d love your presence. But if you insist on a present… cash folds
            easier than bedsheets.”
          </p>
        </motion.div>

        {/* Registry Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Gift className="w-12 h-12 text-rose-500 mx-auto mb-6" />

          <h3 className="font-playfair text-2xl text-stone-800 mb-4">
            A Simple Way to Share Your Love
          </h3>

          <p className="text-stone-600 mb-8 leading-relaxed">
            Instead of gifts wrapped in bows and ribbons, we've kept things
            simple with cash. You may send your cash gift via mobile money. If
            you'd like to bless us in this way, just tap a number below to copy
            it.
          </p>

          <div className="space-y-6 mb-8">
            {momoNumbers.map(({ number, provider }) => (
              <div key={number} className="text-center">
                <button
                  onClick={() => handleCopy(number)}
                  className="flex items-center justify-center gap-3 mx-auto px-4 py-2 rounded-md hover:bg-stone-50 transition-colors duration-200"
                >
                  {copied === number ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Phone className="w-5 h-5 text-stone-500" />
                  )}
                  <span className="font-medium text-stone-800">{number}</span>
                </button>
                <p className="text-sm text-stone-500 mt-1">{provider}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-stone-500 mb-6 italic">
            Tap or click on a number to copy it easily.
          </p>

          <p className="text-stone-600 mb-4 leading-relaxed">
            Alternatively, you may present your cash gift at the gift station at
            the wedding venue. Envelopes will be made available.
          </p>

          <p className="text-sm text-stone-500 italic">
            Thank you for your love and thoughtfulness — it truly means the
            world to us.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingRegistry;
