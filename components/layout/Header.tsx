"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Event Details", href: "/event-details" },
    { name: "Registry", href: "/registry" },
    { name: "RSVP Form", href: "/rsvp" },
    { name: "Gallery", href: "/gallery" },
    { name: "Wedding Party", href: "/party" },
  ];

  return (
    <header className="shadow-sm fixed top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Couple Names */}
        <div className="text-center py-2 bg-transparent">
          <h1 className="font-script text-2xl md:text-3xl text-rose-500">
            Haruna & Nanayaa
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="
    bg-gradient-to-br from-white/20 to-white/5
    backdrop-blur-sm
    shadow-lg 
  
    [box-shadow:inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.25)]
     md:py-1
  "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-wrap justify-center items-center gap-8 text-sm font-medium mix-blend-difference w-full">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`hover:text-rose-500 transition-colors pb-1 ${
                        isActive
                          ? "border-b-2"
                          : "border-b-2 border-transparent"
                      }`}
                      style={isActive ? { borderBottomColor: "#e86438" } : {}}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-rose-500 transition-colors ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} color="#e86438" /> : <Menu size={24} color="#e86438" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="py-2 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`block py-2 px-4 text-sm font-medium text-black hover:text-rose-500 hover:bg-rose-50 transition-colors rounded ${
                        isActive ? "text-rose-500 border border-gray-300" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
