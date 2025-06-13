"use client";

import { useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeaderWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 px-4 md:px-8 border-b border-gray-100 bg-white backdrop-blur-sm z-50 top-0 left-0 sticky">
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <PiX className="text-accent text-2xl" /> : <PiList className="text-accent text-2xl" />}
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
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 bg-white border-b border-gray-100 md:hidden z-40"
          >
            <div className="px-4 py-3 space-y-3">
              <span className="block text-gray-500">Need help?</span>
              <Link
                href="/contact"
                className="block px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-full text-center"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
