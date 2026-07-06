import { Nunito } from "next/font/google";
import "./styles/shared.css";
import "./styles/home.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Page() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>

      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-inner">

            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="hero-dot" aria-hidden="true" />
                Est. 2007 · Locally Owned · All Are Welcome
              </div>
              <h1 className="hero-headline">Dog Wash &amp;<br />Pet Supply</h1>
              <p className="hero-sub">
                A comfortable, clean, welcoming spot for do-it-yourself dog washes
                and quality pet products — at a great value.
              </p>
              <div className="hero-actions">
                <a
                  href="https://splashhoundusa.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Appointment →
                </a>
                <a href="/prices" className="btn-outline">See Pricing</a>
              </div>
            </div>

            <div className="hero-image-wrap" aria-hidden="true">
              <img src="/images/Logo_Version2.png" alt="Happy dog at Splash Hound" className="hero-img-circle" />
            </div>

          </div>
        </section>

        {/* ── Welcome + Cards ── */}
        <div className="page-content">
          <div className="offer-section">

            <div className="offer-text">
              <h2 className="section-title">Welcome to Splash Hound USA</h2>
              <p className="offer-description">
                We are a locally owned Pet Supply and Dog Wash with the BEST do-it-yourself dog
                bath around! We offer biologically appropriate dog &amp; cat food for any
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

            <div className="cards-col">
              <a href="https://splashhoundusa.setmore.com" target="_blank" rel="noopener noreferrer" className="home-book-btn">
                Book Appointment →
              </a>
              <div className="cards">
                <a href="/self-serve-wash" className="card">
                  <div className="card-badge card-badge-blue">S</div>
                  <h2 className="card-title">Self-Serve Wash</h2>
                  <p className="card-body">Use our tubs, towels &amp; dryers — from $18, no appointment needed.</p>
                </a>
                <a href="/full-serve-wash" className="card">
                  <div className="card-badge card-badge-blue">F</div>
                  <h2 className="card-title">Full-Serve Wash</h2>
                  <p className="card-body">We handle everything — bath, dry, brush, and nails. Starting at $35.</p>
                </a>
                <a href="/prices" className="card">
                  <div className="card-badge card-badge-peach">$</div>
                  <h2 className="card-title">Prices &amp; Specials</h2>
                  <p className="card-body">Transparent pricing plus weekly deals like Manicure Monday.</p>
                </a>
              </div>
            </div>

          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
