"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Event Details", href: "/event-details" },
    { name: "Registry", href: "/registry" },
    { name: "RSVP Form", href: "https://forms.gle/BsNE6FYTApMALS2d9" },
    { name: "Gallery", href: "/gallery" },
    { name: "Wedding Party", href: "/party" },
  ];

  return (
    <motion.footer
      className=" py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Names */}
          <div className="text-center">
            <h2 className="font-script text-3xl md:text-4xl text-gray-200 mb-2">
              Haruna & Nana Yaa
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-amber-950 to-amber-700 mx-auto"></div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full">
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-white">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-rose-500 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Decorative divider */}
          <div className="flex items-center space-x-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-200"></div>
            <motion.div
              className="text-white text-xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              💕
            </motion.div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-200"></div>
          </div>

          {/* Special Note */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-300 font-light italic">
              "Join us in celebrating the beginning of our forever"
            </p>
          </motion.div>

          {/* Social icons placeholder - you can add actual social links here */}
          {/* <div className="flex space-x-4 opacity-60">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 ${
                  index === 1 ? "bg-pink-300" : "bg-rose-300"
                } rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
}
