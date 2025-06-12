"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HeaderWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-gray-100 bg-white backdrop-blur-sm z-50 top-0 left-0 sticky lg:relative">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo/new-logo-transparant.png"
            alt="Magic Image"
            width={45}
            height={45}
            className="hover:opacity-90 transition-opacity"
          />
          <span className="font-medium text-gray-800">Magic Image</span>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-500">Need help?</span>
          <Link
            href="/contact"
            className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-full"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden z-40">
            <div className="px-4 py-3 space-y-3">
              <span className="block text-gray-500">Need help?</span>
              <Link
                href="/contact"
                className="block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-full text-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
