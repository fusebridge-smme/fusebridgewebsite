"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-smoky-black text-vanilla shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/">
          <Image
            src="fav/fuse-bridge-logo.svg"
            alt="Fuse Bridge Logo"
            width={30}
            height={30}
          />
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-xl nav-link-transition"
              data-text={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="h-6 w-6 flex items-center justify-center text-vanilla"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-smoky-black shadow-2xl z-50 p-8 md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button (HiX) */}
        <div className="flex justify-end p-0 mb-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="h-6 w-6 flex items-center justify-center text-vanilla"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mt-4 flex flex-col items-end space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-xl nav-link-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Closes the menu when clicked non-menu area */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 bg-black/60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </header>
  );
}
