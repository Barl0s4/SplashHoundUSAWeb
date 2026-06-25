"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header w-full text-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center">

        <nav
          aria-label="Main navigation"
          className={`site-nav ${open ? "nav-open" : ""}`}
        >
          <a href="/" className="nav-link">Home</a>
          <a href="/prices" className="nav-link">Prices</a>
          <a href="/pet-supply" className="nav-link">Pet Supply</a>
          <a href="/full-serve-wash" className="nav-link">Full-Serve Wash</a>
          <a href="/self-serve-wash" className="nav-link">Self-Serve Wash</a>
          <a href="/specials" className="nav-link">Specials</a>
          <span className="nav-separator" aria-hidden="true">|</span>
          <a href="/privacy" className="nav-link">Privacy</a>
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
