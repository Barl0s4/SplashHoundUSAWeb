import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/prices.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Prices — Splash Hound USA",
};

export default function PricesPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />
      <main id="main-content" className="flex-1">

        {/* ── Banner ── */}
        <div className="prices-banner">
          <h1 className="prices-banner-title">Our Prices</h1>
          <p className="prices-banner-sub">Transparent pricing, no surprises</p>
          <div className="prices-banner-wave">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill="#f2f7ee" />
            </svg>
          </div>
        </div>

        {/* ── Main Services ── */}
        <div className="prices-section">
          <div className="prices-grid">

            {/* Self-Serve */}
            <div className="price-card">
              <h2 className="price-card-title">Self-Serve Wash</h2>
              <div className="price-headline">
                <span className="price-amount">$18</span>
                <span className="price-desc">Basic Self Wash — All Sizes</span>
              </div>
              <p className="price-includes-label">Includes:</p>
              <ul className="price-includes">
                <li>Warm Hydro Massage Foaming Bath</li>
                <li>Scented Shampoo</li>
                <li>Blueberry Facial Scrub</li>
                <li>Ear Cleaner</li>
                <li>Massaging Scrubbies</li>
                <li>Towels</li>
                <li>Grooming Brushes &amp; Combs</li>
                <li>Nail Clippers</li>
              </ul>
              <p className="price-note">
                <strong>No appointment necessary</strong> for Self-Serve Dog Wash.<br />
                Last wash 30 minutes before closing &amp; must be completed by closing.
              </p>
            </div>

            {/* Full-Serve */}
            <div className="price-card">
              <h2 className="price-card-title">Full-Serve Wash</h2>
              <div className="price-headline">
                <div className="price-row">
                  <span className="price-amount">$35</span>
                  <span className="price-desc">Dogs 20 lbs. &amp; under</span>
                </div>
                <div className="price-row">
                  <span className="price-amount">$40–$80</span>
                  <span className="price-desc">Dogs 21 lbs. &amp; over</span>
                </div>
              </div>
              <p className="price-includes-label">Includes:</p>
              <ul className="price-includes">
                <li>Warm Hydro Massage Foaming Bath</li>
                <li>Shampoo</li>
                <li>Conditioning Rinse</li>
                <li>Ears Cleaned</li>
                <li>Blow Dry</li>
                <li>Brush Out</li>
                <li>Nails Clipped</li>
              </ul>
              <p className="price-note-warn">
                An additional charge of $5–$40 will apply for larger breeds, long hair, matted,
                aggressive or difficult dogs.<br />
                We do not offer hair cutting or shaving services.
              </p>
              <p className="price-note">
                <strong>Appointments only.</strong><br />
                Please call:{" "}
                <a href="tel:9166428700" className="price-phone">916.642.8700</a>
              </p>
              <button className="book-btn">Book Appointment</button>
            </div>

          </div>
        </div>

        {/* ── Specials ── */}
        <div className="specials-section">
          <h2 className="specials-heading">Specials</h2>
          <div className="prices-grid">

            <div className="special-card">
              <span className="special-day">Manicure Monday</span>
              <p className="special-offer">$8 Nail Trim</p>
              <p className="special-fine">Valid every Monday</p>
              <p className="special-fine">No coupon needed</p>
            </div>

            <div className="special-card">
              <span className="special-day">Double-Dog Wednesday</span>
              <p className="special-offer">Buy one get one half price!</p>
              <p className="special-fine">Valid for self-serve dog wash only.</p>
              <p className="special-fine">Not valid with any offer.</p>
            </div>

          </div>
        </div>

        {/* ── Wave to add-ons ── */}
        <div className="wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,20 C360,60 720,5 1080,35 C1260,50 1380,10 1440,25 L1440,70 L0,70 Z" fill="#1a4731" />
          </svg>
        </div>

        {/* ── Add-Ons ── */}
        <div className="add-ons-section">
          <div className="add-ons-inner">
            <div className="prices-grid">

              {/* Optional Upgrades */}
              <div className="add-on-card">
                <h2 className="add-on-title">Optional Upgrades</h2>
                <p className="add-on-sub">For your pup&apos;s special needs:</p>
                <ul className="add-on-list">
                  <li><span className="add-on-price">$1</span>Oatmeal Shampoo (Dry Skin, Dandruff)</li>
                  <li><span className="add-on-price">$1</span>Flea &amp; Tick Shampoo</li>
                  <li><span className="add-on-price">$1</span>Whitening &amp; Brightening Shampoo</li>
                  <li><span className="add-on-price">$1</span>Dark Hair Enhancing Shampoo</li>
                  <li><span className="add-on-price">$1</span>Medicated Shampoo (Hot Spots)</li>
                  <li><span className="add-on-price">$1</span>Odor Control Shampoo</li>
                  <li><span className="add-on-price">$1</span>Oatmeal Conditioner</li>
                  <li><span className="add-on-price">$1</span>Cream Rinse/Conditioner</li>
                  <li><span className="add-on-price">$5</span>Skunk Odor Treatment</li>
                  <li><span className="add-on-price">$5</span>Furminator® Shed-Less Treatment</li>
                </ul>
              </div>

              {/* Other Add-Ons */}
              <div className="add-on-card">
                <h2 className="add-on-title">Other Add-Ons</h2>

                <div className="add-on-group">
                  <h3 className="add-on-group-title">Nail Trim</h3>
                  <ul className="add-on-list">
                    <li><span className="add-on-price add-on-price-free">FREE</span>With Full-Service Bath</li>
                    <li><span className="add-on-price">$8</span>With Self-Service Bath</li>
                    <li><span className="add-on-price">$14</span>Nail Trim Only (no bath)</li>
                  </ul>
                </div>

                <div className="add-on-group">
                  <h3 className="add-on-group-title">Teeth Brushing</h3>
                  <ul className="add-on-list">
                    <li><span className="add-on-price">$1</span>You-Do-It (includes toothbrush &amp; paste)</li>
                    <li><span className="add-on-price">$4</span>We-Do-It</li>
                  </ul>
                </div>

                <div className="add-on-group">
                  <h3 className="add-on-group-title">Anal Gland Expression</h3>
                  <ul className="add-on-list">
                    <li><span className="add-on-price">$8</span>With Full or Self Serve Bath</li>
                    <li><span className="add-on-price">$14</span>Gland Expression Only (no bath)</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Wave back to cream ── */}
        <div className="wave-divider-reverse" aria-hidden="true">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,35 C360,5 720,55 1080,25 C1260,10 1380,50 1440,30 L1440,0 L0,0 Z" fill="#f2f7ee" />
          </svg>
        </div>


      </main>
      <Footer />
    </div>
  );
}
