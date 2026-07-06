export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-body">

        {/* Brand */}
        <div className="footer-col">
          <p className="footer-brand">Splash Hound USA</p>
          <p className="footer-tagline">Locally owned since 2007.<br />All are welcome.</p>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <p className="footer-col-title">Explore</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/self-serve-wash">Self-Serve Wash</a>
            <a href="/full-serve-wash">Full-Serve Wash</a>
            <a href="/prices">Prices &amp; Specials</a>
          </nav>
        </div>

        {/* Visit */}
        <div className="footer-col">
          <p className="footer-col-title">Visit Us</p>
          <address className="footer-address">
            1908 P St<br />
            Sacramento, CA 95811
          </address>
          <a href="tel:9166428700" className="footer-phone">(916) 642-8700</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
