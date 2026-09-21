import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/prices.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Prices & Specials — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function PricesPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">
        <div className="prc-page">

          <h1 className="prc-heading">Prices &amp; Specials</h1>
          <div className="prc-accent-bar" />

          {/* ── Price cards ── */}
          <div className="prc-grid">

            {/* Self-Serve */}
            <div className="prc-card">
              <p className="prc-card-title-blue">Self-Serve Wash</p>
              <p className="prc-price">$18 - ALL SIZES</p>
              <p className="prc-desc">
                Tubs, towels, shampoo &amp; heated dryers included. No appointment needed.
              </p>
              <hr className="prc-divider" />
              <p className="prc-includes-label">What&apos;s included</p>
              <ul className="prc-includes prc-includes-blue">
                <li>Warm Hydro Massage Foaming Bath</li>
                <li>Scented Shampoo</li>
                <li>Blueberry Facial Scrub</li>
                <li>Ear Cleaner</li>
                <li>Scrubbers</li>
                <li>Towels</li>
                <li>Grooming Brushes &amp; Combs</li>
                <li>Nail Clippers</li>
                <li>Blow Dryers</li>
              </ul>
              <p className="prc-note">
                <strong>No appointment necessary.</strong> Last call is 30 minutes before closing.
              </p>
            </div>

            {/* Full-Serve */}
            <div className="prc-card">
              <p className="prc-card-title-orange">Full-Serve Wash</p>
              <p className="prc-price">$35 - $85</p>
              <p className="prc-desc">
                Bath, dry, brush &amp; nails — we do the work. Ask in-store for size-based pricing.
              </p>
              <hr className="prc-divider" />
              <p className="prc-includes-label">What&apos;s included</p>
              <ul className="prc-includes prc-includes-orange">
                <li>Warm Hydro Massage Foaming Bath</li>
                <li>Shampoo &amp; Conditioner</li>
                <li>Ears Cleaned</li>
                <li>Cage-Free Blow Dry &amp; Brush Out</li>
                <li>Nails Clipped</li>
              </ul>
              <p className="prc-note-warn">
                Additional charge of $5–$40 for larger breeds, long hair, matted, or difficult dogs. <span className="prc-note-warn-internal">We do not offer hair cutting or shaving services.</span>
              </p>
              <p className="prc-note">
                <strong>By appointment.</strong> Call{" "}
                <a href="tel:9166428700">916.642.8700</a> or book online.
              </p>
              <a
                href="https://splashhoundusa.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="prc-book-btn"
              >
                Book Appointment →
              </a>
            </div>

          </div>

          {/* ── Optional Upgrades ── */}
          <div className="prc-upgrades-section">
            <p className="prc-section-label">Optional Upgrades &amp; Add-Ons</p>
            <p className="prc-section-sub">
              Available with any wash — just ask us in-store.
            </p>

            <div className="prc-upgrades-grid">

              {/* Upgrade shampoos */}
              <div className="prc-upgrade-card">
                <p className="prc-upgrade-title">Specialty Shampoos</p>
                <ul className="prc-addon-list">
                  <li><span className="prc-addon-price">$1</span>Oatmeal Shampoo (Dry Skin, Dandruff)</li>
                  <li><span className="prc-addon-price">$1</span>Flea &amp; Tick Shampoo</li>
                  <li><span className="prc-addon-price">$1</span>Whitening &amp; Brightening Shampoo</li>
                  <li><span className="prc-addon-price">$1</span>Dark Hair Enhancing Shampoo</li>
                  <li><span className="prc-addon-price">$1</span>Odor Control Shampoo</li>
                  <li><span className="prc-addon-price">$1</span>Oatmeal Conditioner</li>
                  <li><span className="prc-addon-price">$1</span>Cream Rinse / Conditioner</li>
                  <li><span className="prc-addon-price">$5</span>Skunk Odor Treatment</li>
                  <li><span className="prc-addon-price">$5</span>Furminator® Shed-Less Treatment</li>
                </ul>
              </div>

              {/* Other add-ons */}
              <div className="prc-upgrade-card">
                <p className="prc-upgrade-title">Other Add-Ons</p>

                <div className="prc-addon-group">
                  <p className="prc-addon-group-title">Nail Trim</p>
                  <ul className="prc-addon-list">
                    <li><span className="prc-addon-price prc-addon-price-free">FREE</span>With Full-Service Bath</li>
                    <li><span className="prc-addon-price">$10</span>With Self-Service Bath</li>
                    <li><span className="prc-addon-price">$16</span>Nail Trim Only (no bath)</li>
                  </ul>
                </div>

                <div className="prc-addon-group">
                  <p className="prc-addon-group-title">Teeth Brushing</p>
                  <ul className="prc-addon-list">
                    <li><span className="prc-addon-price">$1</span>You-Do-It (includes toothbrush &amp; paste)</li>
                    <li><span className="prc-addon-price">$5</span>We-Do-It</li>
                  </ul>
                </div>

                <div className="prc-addon-group">
                  <p className="prc-addon-group-title">Anal Gland Expression</p>
                  <ul className="prc-addon-list">
                    <li><span className="prc-addon-price">$10</span>With Full or Self Serve Bath</li>
                    <li><span className="prc-addon-price">$16</span>Gland Expression Only (no bath)</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* ── Manicure Monday ── */}
          <div className="prc-monday">
            <div>
              <p className="prc-monday-eyebrow">Weekly Special</p>
              <p className="prc-monday-title">Manicure Monday</p>
              <p className="prc-monday-sub">
                $10 nail trim · Every Monday.
              </p>
            </div>
            <a href="/visit-us" className="prc-monday-btn">Visit Us →</a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
