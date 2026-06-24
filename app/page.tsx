import { Nunito } from "next/font/google";
import "./page.css";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Page() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>

      <Header />

      {/* ── Body ── */}
      <main id="main-content" className="flex-1">

        <section className="hero">
          <img src="images/Dog1.jpeg" className="hero-img" alt="Happy dog at Splash Hound" />
          <div className="hero-overlay" />
          <div className="hero-badge">
            <span className="hero-badge-label">Est. 2007</span>
            <div className="hero-badge-divider" />
            <span className="hero-badge-title">Dog Wash &amp; Pet Supply</span>
            <div className="hero-badge-divider" />
            <span className="hero-badge-label">Localy owned</span>
            <span className="hero-badge-label">All are welcome</span>
          </div>
          <div className="hero-wave">
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill="#f2f7ee" />
            </svg>
          </div>
        </section>

        <div className="page-content">
          <div className="offer-section">

            <div className="offer-text">
              <h1 className="section-title">Welcome to Splash Hound USA</h1>
              <p className="offer-description">
                We are a locally owned Pet Supply and Dog Wash with the BEST do-it-yourself dog
                bath around! We also offer biologically appropriate dog &amp; cat food for any
                pet&apos;s special needs, plus a unique variety of carefully selected toys, treats,
                supplements, grooming &amp; health aids, leashes, collars &amp; accessories.
              </p>
              <p className="offer-description">
                Our mission is to provide a comfortable, clean, &amp; welcoming facility, where
                our guests and their canines can get a great do-it-yourself dog wash and quality
                pet products at a great value. We pride ourselves in outstanding customer service
                and a true appreciation for our clients and the pets who make their lives happy.
              </p>
            </div>

            <div className="cards">
              <button className="card">
                <h2 className="card-title">Full Grooming</h2>
                <p className="card-body">Bath, dry, trim, and style — head to tail.</p>
              </button>
              <button className="card">
                <h2 className="card-title">Self-Wash Stations</h2>
                <p className="card-body">Use our tubs, towels, and dryers yourself.</p>
              </button>
              <button className="card">
                <h2 className="card-title">Nail &amp; Ear Care</h2>
                <p className="card-body">Quick add-ons to keep your pup comfortable.</p>
              </button>
              <button className="card">
                <h2 className="card-title">Pet Supply</h2>
                <p className="card-body">Shampoos, treats, accessories, and more.</p>
              </button>
            </div>

          </div>
        </div>

        <ReviewsSection />
        <LocationSection />
        <CookieBanner />
        <ScrollToTop />

      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
