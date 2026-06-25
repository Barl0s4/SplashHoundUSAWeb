export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 720,5 1080,38 C1260,52 1380,12 1440,28 L1440,70 L0,70 Z" fill="#14532d" />
        </svg>
      </div>
      <div className="footer-inner">
        <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
