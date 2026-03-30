"use client";

import { useState } from "react";

const navLinks = ["FIND EVENTS", "MY EVENTS", "CREATE EVENT"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 border-b border-white/10 bg-[#0e0e0e]/85 backdrop-blur-md">
        
        {/* LEFT SIDE → Logo + Nav */}
        <div className="flex items-center gap-8">
          
          {/* Brand */}
          <span className="text-xl font-bold tracking-tight cursor-pointer">
            collegeflow<span className="text-[#B9FF66]">.</span>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-xs text-white/50 tracking-widest">
            {navLinks.map((link) => (
              <button
                key={link}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          
          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-1.5 text-xs border border-white/25 text-white hover:border-white transition-colors tracking-widest cursor-pointer">
              LOGIN
            </button>

            <button className="px-4 py-1.5 text-xs bg-[#B9FF66] text-black font-bold hover:bg-[#a8ee55] transition-colors tracking-widest cursor-pointer">
              SIGN UP
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`fixed top-[49px] left-0 right-0 z-40 md:hidden bg-[#0e0e0e]/95 backdrop-blur-md border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-left text-xs tracking-widest text-white/55 hover:text-white py-3 border-b border-white/6 last:border-0 transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {link}
            </button>
          ))}

          {/* Auth mobile */}
          <div className="flex gap-2 pt-4">
            <button className="flex-1 py-2 text-xs border border-white/20 text-white tracking-widest hover:border-white transition-colors cursor-pointer">
              LOGIN
            </button>

            <button className="flex-1 py-2 text-xs bg-[#B9FF66] text-black font-bold tracking-widest hover:bg-[#a8ee55] transition-colors cursor-pointer">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}