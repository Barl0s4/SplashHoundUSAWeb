import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/privacy.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Privacy Policy — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function PrivacyPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>

      <Header />

      <main id="main-content" className="flex-1">
        <div className="page-content" style={{ maxWidth: "52rem" }}>
          <h1 className="section-title" style={{ marginBottom: "0.25rem" }}>Privacy Policy</h1>
          <p style={{ fontSize: "0.85rem", color: "#78716c", marginBottom: "2rem" }}>
            Effective date: June 1, 2025 &nbsp;·&nbsp; Splash Hound USA, Sacramento, CA
          </p>

          <div className="privacy-body">
            <section className="privacy-section">
              <h2>What We Collect</h2>
              <p>
                Splash Hound USA does not directly collect, store, or process any personal information
                through this website. We do not run contact forms, user accounts, or payment processing
                on this site.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Google Maps</h2>
              <p>
                With your consent, we embed a Google Maps iframe to display our store location. When
                loaded, Google may collect data including your IP address and browser information in
                accordance with{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google&apos;s Privacy Policy
                </a>. You may decline cookie consent on this site to prevent the map from loading.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Yelp Links</h2>
              <p>
                This site contains links to our Yelp business page. Clicking these links takes you to
                Yelp&apos;s platform, which has its own privacy practices. Please review{" "}
                <a href="https://www.yelp.com/tos/privacy_policy" target="_blank" rel="noopener noreferrer">
                  Yelp&apos;s Privacy Policy
                </a>{" "}
                for details.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Cookies</h2>
              <p>
                We store a single cookie preference in your browser&apos;s local storage to remember
                whether you accepted or declined Google Maps cookies. No tracking or advertising cookies
                are set by this website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>California Residents (CCPA)</h2>
              <p>
                We do not sell personal information. If you are a California resident and have questions
                about your rights under the California Consumer Privacy Act, please contact us directly.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Children&apos;s Privacy</h2>
              <p>
                This website is not directed at children under 13. We do not knowingly collect
                information from children.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach us at our store:
              </p>
              <p>
                <strong>Splash Hound USA</strong><br />
                1908 P St, Sacramento, CA 95811
              </p>
            </section>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
