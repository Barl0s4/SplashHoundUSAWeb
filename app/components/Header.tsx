"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header w-full text-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center">

        <nav
          aria-label="Main navigation"
          className={`flex items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-w-sm opacity-100 mr-6" : "max-w-0 opacity-0 mr-0"
          }`}
        >
          <a href="/" className="nav-link">Home</a>
          <a href="#" className="nav-link">Prices</a>
          <a href="#" className="nav-link">Specials</a>
          <a href="/privacy" className="nav-link">Privacy</a>
          <span className="text-green-400 select-none" aria-hidden="true">|</span>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a href="/" className="brand-name" style={{ textDecoration: "none", color: "inherit" }}>
            Splash Hound USA
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="menu-btn"
          >
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

      </div>
    </header>
  );
}
