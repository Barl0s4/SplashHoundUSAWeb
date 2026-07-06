import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/services.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Services — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function ServicesPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">
        <div className="svc-page">

          <h1 className="svc-heading">Our Services</h1>
          <div className="svc-accent-bar" />

          {/* ── Self-Serve Wash ── */}
          <div className="svc-row">
            <div className="svc-photo-col">
              <img
                src="/images/Dog1.jpeg"
                alt="Self-serve dog wash bay at Splash Hound USA"
                className="svc-photo"
              />
            </div>
            <div className="svc-info-col">
              <div className="svc-pill-blue">STARTING AT $18</div>
              <h2 className="svc-title">Self-Serve Wash</h2>
              <p className="svc-desc">
                Use our tubs, towels &amp; dryers — no appointment needed. Just walk in!
              </p>
              <ul className="svc-checklist">
                <li><span className="svc-check-blue">✓</span> Raised tubs, no bending or kneeling</li>
                <li><span className="svc-check-blue">✓</span> Shampoo, towels &amp; heated dryers provided</li>
                <li><span className="svc-check-blue">✓</span> Aprons available — we handle the mess</li>
                <li><span className="svc-check-blue">✓</span> Mink oil coat conditioner included</li>
              </ul>
              <p className="svc-note">
                ⏰ Last call is 30 minutes before closing.
              </p>
            </div>
          </div>

          {/* ── Full-Serve Wash ── */}
          <div className="svc-row">
            <div className="svc-photo-col">
              <img
                src="/images/Grooming2.jpeg"
                alt="Professional groomer with dog at Splash Hound USA"
                className="svc-photo"
              />
            </div>
            <div className="svc-info-col">
              <div className="svc-pill-orange">STARTING AT $35</div>
              <h2 className="svc-title">Full-Serve Wash</h2>
              <p className="svc-desc">
                We handle everything — bath, dry, brush, and nails.
              </p>
              <ul className="svc-checklist">
                <li><span className="svc-check-orange">✓</span> Full bath, brush-out &amp; blow-dry</li>
                <li><span className="svc-check-orange">✓</span> Deep conditioning &amp; mink oil coat conditioner</li>
                <li><span className="svc-check-orange">✓</span> Ears cleaned &amp; nails clipped</li>
                <li><span className="svc-check-orange">✓</span> Optional add-ons available in-store</li>
              </ul>
              <a
                href="https://splashhoundusa.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-book-btn"
              >
                Book Appointment →
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
