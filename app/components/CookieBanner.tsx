"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("splash-cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const respond = (choice: "accepted" | "declined") => {
    localStorage.setItem("splash-cookie-consent", choice);
    window.dispatchEvent(new Event("splash-cookie-update"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to display Google Maps on this site. See our{" "}
        <a href="/privacy" className="cookie-link">Privacy Policy</a> for details.
      </p>
      <div className="cookie-actions">
        <button onClick={() => respond("declined")} className="cookie-btn-decline">
          Decline
        </button>
        <button onClick={() => respond("accepted")} className="cookie-btn-accept">
          Accept
        </button>
      </div>
    </div>
  );
}
