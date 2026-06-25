import { Nunito } from "next/font/google";
import "../page.css";
import Header from "../components/Header";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Self-Serve Wash — Splash Hound USA",
};

export default function SelfServeWashPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />
      <main id="main-content" className="flex-1">
        <div className="page-content">
          <h1 className="section-title">Self-Serve Wash</h1>
          <p className="offer-description">Content coming soon.</p>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
          <div className="footer-links"><a href="/privacy">Privacy Policy</a></div>
        </div>
      </footer>
    </div>
  );
}
