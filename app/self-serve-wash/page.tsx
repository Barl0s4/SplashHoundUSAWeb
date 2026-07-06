import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/self-serve.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Self-Serve Wash — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function SelfServeWashPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Page Heading ── */}
        <div className="page-content" style={{ paddingBottom: "0" }}>
          <h1 className="section-title">Our Services</h1>
        </div>

        {/* ── Service: photo left, info right ── */}
        <div className="ssw-service-section">
          <div className="ssw-service-grid">

            <img
              src="/images/Dog4.jpeg"
              alt="Dog enjoying a bath at Splash Hound USA"
              className="ssw-service-img"
            />

            <div>
              <span className="ssw-price-pill">Starting at $18</span>
              <h2 className="ssw-service-title">Self-Serve Wash</h2>
              <p className="ssw-service-lead">
                Use our tubs, towels &amp; dryers — no appointment needed. Just walk in!
              </p>
              <ul className="ssw-checklist">
                <li><span className="ssw-check">✓</span> Waist-high tubs with walk-in entry — no bending or kneeling</li>
                <li><span className="ssw-check">✓</span> Scented shampoo, towels &amp; heated dryers included</li>
                <li><span className="ssw-check">✓</span> Blueberry facial scrub &amp; ear cleaner provided</li>
                <li><span className="ssw-check">✓</span> Grooming brushes, combs &amp; nail clippers on hand</li>
                <li><span className="ssw-check">✓</span> Aprons available — we handle the mess</li>
                <li><span className="ssw-check">✓</span> No time limit — stay as long as you need</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Detail copy ── */}
        <div className="ssw-detail-section">
          <hr className="ssw-rule" />

          <p>
            Washing your dog could not be easier at Splash Hound USA. Both you and your pooch will
            love the comfort and ease of our waist-high tubs with walk-in entry for even the biggest
            dogs. There&apos;s lots of room to work on both sides of the tub, so bring the whole
            family for some fun with Fido!
          </p>

          <p>
            Our exclusively designed <strong>HydroSplash bathing wand</strong> penetrates through
            even the thickest coats — lifting your pet&apos;s fur and delivering a perfect mix of
            warm water and rich, foamy shampoo to move dirt and debris out of the coat. Your dog
            gets to enjoy a luxurious massage while you effortlessly clean, fluff and rinse!
          </p>

          <p>
            After a bath and towel dry, you can blow dry, groom and primp your pup at our convenient
            grooming station, where you&apos;ll find all the basic tools you need like combs,
            brushes, shedding tools and nail clippers — all included in your basic wash.{" "}
            <strong>No appointment is necessary</strong> for a self-serve wash; and there is no time
            limit. Stop by soon and give your dog a great do-it-yourself wash!
          </p>

          <img
            src="/images/Grooming1.jpeg"
            alt="Self-serve dog wash tubs at Splash Hound USA"
            className="ssw-service-img"
            style={{ marginTop: "2rem" }}
          />

          <div className="ssw-notice">
            ⏰ Last self wash of the day must begin 30 minutes before closing time
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
