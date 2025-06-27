"use client";

import { useState } from "react";
import { PiList, PiMoon, PiSun, PiX } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/themes/useTheme";

export const HeaderWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <header className="w-full py-4 px-4 md:px-8 border-b border-accent/10 bg-background dark:bg-background-dark  backdrop-blur-sm z-50 transition-all duration-500">
        <div className="mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => (window.location.href = "/")}
          >
            <div className="relative">
              <Image
                src="/logo/new-logo-transparant.png"
                alt="Magic Image"
                width={45}
                height={45}
                className="hover:scale-105 transition-all duration-300 dark:invert"
              />
              <div className="absolute -bottom-1 -right-1 bg-accent text-[10px] text-white px-1.5 rounded-full">
                v{process.env.NEXT_PUBLIC_VERSION_APP}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent group-hover:to-accent transition-all duration-300">
                Magic Image
              </span>
              <span className="text-xs text-gray-500 dark:text-dark-primary">Image Converter</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <button onClick={() => toggleTheme()} className="p-2 cursor-pointer flex justify-center w-full md:hidden">
              {theme === "light" ? (
                <PiSun className="text-accent text-2xl dark:text-dark-primary" />
              ) : (
                <PiMoon className="text-accent text-2xl dark:text-dark-primary" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <PiX className="text-accent text-2xl" /> : <PiList className="text-accent text-2xl" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button onClick={() => toggleTheme()} className="p-2 cursor-pointer">
                {theme === "light" ? (
                  <PiSun className="text-accent text-2xl" />
                ) : (
                  <PiMoon className="text-accent text-2xl" />
                )}
              </button>
            </div>
            <span className="text-gray-500">Need help?</span>
            <Link
              href="https://wa.me/6281234567890"
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
            className="fixed top-[73px] left-0 right-0 bg-background dark:bg-background-dark border-b border-gray-100 md:hidden z-40"
          >
            <div className="px-4 py-3 space-y-3">
              <span className="block text-gray-500 dark:text-dark-primary">Need help?</span>

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
