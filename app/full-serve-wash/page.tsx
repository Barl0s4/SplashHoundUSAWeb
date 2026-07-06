import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/full-serve.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Full-Serve Wash — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function FullServeWashPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Service: photo left, info right ── */}
        <div className="fsw-service-section" style={{ paddingTop: "3rem" }}>
          <div className="fsw-service-grid">

            <div className="fsw-service-photo">
              <img
                src="/images/Grooming2.jpeg"
                alt="Professional grooming at Splash Hound USA"
                className="fsw-service-img"
              />
            </div>

            <div className="fsw-service-info">
              <span className="fsw-price-pill">Starting at $35</span>
              <h2 className="fsw-service-title">Full-Serve Wash</h2>
              <p className="fsw-service-lead">
                We handle everything — bath, dry, brush, and nails.
              </p>
              <ul className="fsw-checklist">
                <li><span className="fsw-check">✓</span> Full bath, brush-out &amp; blow-dry</li>
                <li><span className="fsw-check">✓</span> Deep conditioning &amp; mink oil coat conditioner</li>
                <li><span className="fsw-check">✓</span> Ears cleaned &amp; nails clipped</li>
                <li><span className="fsw-check">✓</span> Nail trim included</li>
                <li><span className="fsw-check">✓</span> Optional add-ons available in-store</li>
              </ul>
              <a
                href="https://splashhoundusa.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fsw-book-btn"
              >
                Book Appointment →
              </a>
            </div>

          </div>
        </div>

        {/* ── Detail copy ── */}
        <div className="fsw-detail-section">
          <hr className="fsw-rule" />

          <p>
            Our full service dog bath includes a gentle pre-cleansing shampoo, plus a second
            cleanse with shampoo selected for your pet&apos;s unique skin and coat needs.
            Followed by a deep conditioning treatment, cage-free blow-dry and mink oil coat
            conditioner. Also includes brush out, ears cleaned &amp; nails clipped and/or filed.
          </p>

          <p className="fsw-warn">
            We do not offer hair cutting, clipping or shaving services —
            just the best bath in town!
          </p>

          <img
            src="/images/Dog5.jpeg"
            alt="Happy dog after a full-serve wash at Splash Hound USA"
            className="fsw-extra-img"
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}
