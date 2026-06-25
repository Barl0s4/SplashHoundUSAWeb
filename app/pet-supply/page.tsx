import { Nunito } from "next/font/google";
import "../styles/shared.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Pet Supply — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function PetSupplyPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />
      <main id="main-content" className="flex-1">
        <div className="page-content">
          <h1 className="section-title">Pet Supply</h1>
          <p className="offer-description">Content coming soon.</p>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
