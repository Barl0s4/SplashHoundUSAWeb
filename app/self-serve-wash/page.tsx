import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/self-serve.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Self-Serve Wash — Splash Hound USA",
};

export default function SelfServeWashPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Banner ── */}
        <div className="ssw-banner">
          <h1 className="ssw-banner-title">Self-Serve Wash</h1>
          <p className="ssw-banner-sub">No appointment necessary · from $18 · all sizes</p>
          <div className="ssw-banner-wave">
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,18 1440,35 L1440,70 L0,70 Z" fill="#f2f7ee" />
            </svg>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="ssw-content">
          <div className="ssw-grid">

            {/* Left: photos */}
            <div className="ssw-images">
              <img
                src="/images/Dog4.jpeg"
                alt="Dog getting a bath at Splash Hound USA"
                className="ssw-img"
              />
              <img
                src="/images/Dog3.jpeg"
                alt="Before and after self-serve dog wash"
                className="ssw-img"
              />
            </div>

            {/* Right: copy */}
            <div className="ssw-text">
              <hr className="ssw-rule" />

              <p>
                If you love your dog but hate giving him a bath, then you&apos;ll love Splash Hound USA!
                Once you visit you&apos;ll know why our customers consistently rate us with{" "}
                <strong>FIVE stars on Yelp!</strong>
              </p>

              <p>
                Washing your dog could not be easier at Splash Hound USA. Both you and your pooch will
                love the comfort and ease of our waist-high tubs with walk-in entry for even the biggest
                dogs. There&apos;s lots of room to work on both sides of the tub, so bring the whole
                family for some fun with Fido!
              </p>

              <p>
                Our exclusively designed <strong>HydroSplash bathing wand </strong> penetrates through
                even the thickest coats — lifting your pet&apos;s fur and delivering a perfect mix of
                warm water and rich, foamy shampoo to move dirt and debris out of the coat. Your dog
                gets to enjoy a luxurious massage while you effortlessly clean, fluff and rinse!
              </p>

              <p>
                After a bath and towel dry, you can blow dry, groom and primp your pup at our convenient
                grooming station, where you&apos;ll find all the basic tools you need like combs,
                brushes, shedding tools and nail clippers — all included in your basic wash.{" "}
                <strong>No appointment is necessary</strong> for a self serve wash; and there is no time
                limit. Stop by soon and give your dog a great do-it-yourself wash!
              </p>

              <hr className="ssw-rule" />

              {/* Notice lives here now */}
              <div className="ssw-notice">
                ⏰ Last self wash of the day must begin 30 minutes before closing time
              </div>
            </div>

          </div>
        </div>


      </main>

      <Footer />
    </div>
  );
}
