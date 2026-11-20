import { Nunito } from "next/font/google";
import "../styles/shared.css";
import "../styles/visit.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapEmbed from "../components/MapEmbed";
import { hours, specialHours, ThanksgivingHours } from "../data/hours";

export const metadata = {
  title: "Visit Us — Splash Hound USA",
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

// ThanksgivingHours
const specialDays = ["Wed", "Sat"];
// ^^^^^^^^^^

export default function VisitPage() {
  return (
    <div className={`flex flex-col min-h-screen ${nunito.className}`}>
      <Header />

      <main id="main-content" className="flex-1">
        <div className="vis-page">

          <h1 className="vis-heading">Visit Us</h1>
          <div className="vis-accent-bar" />

          <div className="vis-layout">

            {/* ── Map + Address ── */}
            <div className="vis-map-col">
              <div className="vis-map-wrap">
                <MapEmbed />
              </div>

              {/* Address & Contact */}
              <div className="vis-card vis-card-below-map">
                <p className="vis-card-title">Address &amp; Contact</p>
                <div className="vis-contact-list">
                  <div className="vis-contact-row">
                    <span className="vis-contact-icon">📍</span>
                    <span>1908 P St, Sacramento, CA 95811</span>
                  </div>
                  <div className="vis-contact-row">
                    <span className="vis-contact-icon">📞</span>
                    <a href="tel:9166428700" className="vis-contact-link">(916) 642-8700</a>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=1908+P+St,+Sacramento,+CA+95811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vis-directions-btn"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* ── Info ── */}
            <div className="vis-info-col">


              {/* Thankgivinghours */}
              <div className="vis-card-special">
                <p className="vis-card-title-special">Thanksgiving Hours 11/23 - 11/28</p>
                <table className="vis-hours-table">
                  <tbody>
                    {ThanksgivingHours.map(({ day, time }) => (

                      <tr key={day} className={`vis-hours-row${time === "Closed" ? " vis-hours-closed" : ""}${specialDays.includes(day) ? " vis-hours-highlight" : ""}`}>
                        <td className="vis-hours-day">{day}</td>
                        <td className="vis-hours-time">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hours */}
              <div className="vis-card">
                <p className="vis-card-title">Hours</p>
                <table className="vis-hours-table">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className={`vis-hours-row${time === "Closed" ? " vis-hours-closed" : ""}`}>
                        <td className="vis-hours-day">{day}</td>
                        <td className="vis-hours-time">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {specialHours.length > 0 && (
                  <>
                    <p className="vis-special-title">Upcoming Special Hours</p>
                    <table className="vis-hours-table">
                      <tbody>
                        {specialHours.map(({ date, time }) => (
                          <tr key={date} className={`vis-hours-row${time === "Closed" ? " vis-hours-closed" : ""}`}>
                            <td className="vis-hours-day">{date}</td>
                            <td className="vis-hours-time">{time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>

              {/* Book CTA */}
              <a
                href="https://splashhoundusa.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="vis-book-btn"
              >
                Book Appointment →
              </a>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
