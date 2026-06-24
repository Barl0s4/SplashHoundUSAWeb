"use client";

import { useEffect, useState } from "react";

export default function MapEmbed() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem("splash-cookie-consent"));
    const handler = () => setConsent(localStorage.getItem("splash-cookie-consent"));
    window.addEventListener("splash-cookie-update", handler);
    return () => window.removeEventListener("splash-cookie-update", handler);
  }, []);

  if (consent === "accepted") {
    return (
      <iframe
        src="https://maps.google.com/maps?q=1908+P+St,+Sacramento,+CA+95811&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Splash Hound USA on Google Maps"
      />
    );
  }

  return (
    <div className="map-placeholder">
      <p className="map-placeholder-text">
        Map not shown — cookies {consent === "declined" ? "declined" : "not yet accepted"}.
      </p>
      <a
        href="https://maps.google.com/?q=1908+P+St,+Sacramento,+CA+95811"
        target="_blank"
        rel="noopener noreferrer"
        className="map-placeholder-link"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
