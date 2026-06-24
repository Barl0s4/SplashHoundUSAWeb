import { hours, specialHours } from "../data/hours";
import MapEmbed from "./MapEmbed";

export default function LocationSection() {
  return (
    <>
      {/* Reverse wave — transitions from dark reviews section back to light */}
      <div className="wave-divider-reverse">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,35 C360,0 720,70 1080,35 C1260,18 1380,55 1440,35 L1440,70 L0,70 Z"
            fill="#f2f7ee"
          />
        </svg>
      </div>

      <section className="location-section">
        <div className="location-inner">

          <div className="map-col">
            <h2 className="location-title">Find Us</h2>
            <p className="location-address">1908 P St, Sacramento, CA 95811</p>
            <p className="location-address">(916) 642-8700</p>
            <div className="map-wrapper">
              <MapEmbed />
            </div>
          </div>

          <div className="hours-col">
            <h2 className="location-title">Hours</h2>
            <table className="hours-table">
              <tbody>
                {hours.map(({ day, time }) => (
                  <tr key={day} className={`hours-row${time === "Closed" ? " hours-closed" : ""}`}>
                    <td className="hours-day">{day}</td>
                    <td className="hours-time">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="special-hours-title">Upcoming Special Hours</h3>
            <table className="hours-table">
              <tbody>
                {specialHours.map(({ date, time }) => (
                  <tr key={date} className={`hours-row${time === "Closed" ? " hours-closed" : ""}`}>
                    <td className="hours-day">{date}</td>
                    <td className="hours-time">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
}
