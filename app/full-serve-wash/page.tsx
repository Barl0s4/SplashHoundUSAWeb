import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/full-serve.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Full-Serve Wash — Splash Hound USA",
};

export default function FullServeWashPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Banner ── */}
        <div className="fsw-banner">
          <h1 className="fsw-banner-title">Full-Serve Wash</h1>
          <p className="fsw-banner-sub">
            Appointments only &nbsp;·&nbsp; call{" "}
            <a href="tel:9166428700" className="fsw-banner-phone">916.642.8700</a>
          </p>
          <div className="fsw-banner-wave">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill="#eff6ff" />
            </svg>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="fsw-content">
          <div className="fsw-grid">

            {/* Left: photos + book button */}
            <div className="fsw-images">
              <img
                src="/images/Dog3.jpeg"
                alt="Before and after full-serve dog wash"
                className="fsw-img"
              />
              <img
                src="/images/Dog5.jpeg"
                alt="Groomer washing a Dalmatian at Splash Hound USA"
                className="fsw-img"
              />
            </div>

            {/* Right: button, description, warning, image */}
            <div className="fsw-text">
              <a href="https://splashhoundusa.setmore.com" target="_blank" rel="noopener noreferrer" className="fsw-book-btn">Book Appointment →</a>

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

              <hr className="fsw-rule" />

              <img
                src="/images/Dog6.jpeg"
                alt="Professional groomer bathing a terrier at Splash Hound USA"
                className="fsw-img"
              />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
