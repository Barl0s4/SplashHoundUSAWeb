import { Nunito } from "next/font/google";
import "../styles/shared.css";
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
        <div className="page-content">
          <h1 className="section-title">Full-Serve Wash</h1>
          <p className="offer-description">Content coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
