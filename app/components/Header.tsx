"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Pricing & Specials" },
  { href: "/visit-us", label: "Visit Us" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current?.contains(e.target as Node) ||
        btnRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function isActive(href: string) {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="site-header">
        <a href="/" aria-label="Splash Hound USA — Home" className="header-logo-link">
          <img src="/images/Logo_Version2.png" alt="Splash Hound USA" className="header-logo" />
        </a>

        <nav aria-label="Main navigation" className="site-nav">
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-link${isActive(href) ? " nav-link-active" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <a
            href="https://splashhoundusa.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            Book Appointment →
          </a>
          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="menu-btn"
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </header>

      <div ref={menuRef} className={`mobile-nav${open ? " mobile-nav-open" : ""}`} aria-hidden={!open}>
        {NAV_ITEMS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="mobile-nav-link"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a
          href="https://splashhoundusa.setmore.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav-cta"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          Book Appointment →
        </a>
      </div>
    </>
  );
}
