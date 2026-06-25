export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 720,5 1080,38 C1260,52 1380,12 1440,28 L1440,70 L0,70 Z" fill="#0f2744" />
        </svg>
      </div>

      <div className="footer-body">

        {/* Brand + contact */}
        <div className="footer-col">
          <p className="footer-brand">Splash Hound USA</p>
          <p className="footer-tagline">Locally owned &amp; operated</p>
          <address className="footer-address">
            1908 P St<br />
            Sacramento, CA 95811
          </address>
          <a href="tel:9166428700" className="footer-phone">(916) 642-8700</a>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <p className="footer-col-title">Quick Links</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/prices">Prices</a>
            <a href="/self-serve-wash">Self-Serve Wash</a>
            <a href="/full-serve-wash">Full-Serve Wash</a>
            <a href="/pet-supply">Pet Supply</a>
          </nav>
        </div>

      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
