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
    { name: "RSVP Form", href: "https://forms.gle/BsNE6FYTApMALS2d9" },
    { name: "Gallery", href: "/gallery" },
    { name: "Wedding Party", href: "/party" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <nav
        className="
          bg-white/60 backdrop-blur-md
          border-b border-white/30
          shadow-sm
        "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo / Names */}
            <h1 className="font-serif text-lg md:text-xl text-[#1B1856] tracking-wide italic">
              Haruna & Nana Yaa
            </h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-light text-[#1B1856]">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`
                        relative transition-colors duration-200
                        hover:text-[#C2A469]
                        ${isActive ? "text-[#C2A469]" : "text-[#1B1856]"}
                      `}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C2A469] to-[#E6D7A3]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1B1856]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                      className={`
                        block py-2 px-4 text-sm font-medium rounded-lg
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#F8F5EF] text-[#C2A469]"
                            : "text-[#1B1856] hover:bg-[#FAF8F3]"
                        }
                      `}
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
