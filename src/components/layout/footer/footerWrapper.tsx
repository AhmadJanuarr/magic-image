"use client";

import { useState, useEffect } from "react";

export const FooterWrapper = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full py-8 px-6 border-t border-accent/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-accent">MagicImage</h3>
          <p className="text-sm text-gray-600 max-w-md dark:text-dark-primary">
            Transform and convert your images easily with our powerful image conversion tool. Fast, free, and no
            registration required.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-dark-primary">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm text-gray-600 dark:text-dark-primary hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm text-gray-600 dark:text-dark-primary hover:text-accent transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-sm text-gray-600 dark:text-dark-primary hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-dark-primary">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                href="mailto:ahmadjanuaramri2015@gmail.com"
                className="text-sm text-gray-600 dark:text-dark-primary hover:text-accent transition-colors"
              >
                Email Us
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AhmadJanuarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-dark-primary hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="col-span-1 md:col-span-4 pt-6 mt-6 border-t border-accent/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-600 dark:text-dark-primary">
              © {currentYear || "2025"} MagicImage v{process.env.NEXT_PUBLIC_VERSION_APP}
            </p>
            <p className="text-sm text-gray-500 dark:text-dark-primary">Built with by Ahmad Januar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
