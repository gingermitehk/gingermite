import { Link } from 'react-router-dom';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 20;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="content-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Gingermite</h3>
            <p>Mother & Son Floral Studio</p>
          </div>
          <div className="footer-contact">
            <p>hello@gingermite.com</p>
            <p>(555) 123-4567</p>
          </div>
          <div className="footer-links">
            <Link to="/portfolio">Portfolio</Link>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <span className="copyright-wrapper">
              <span className="copyright-symbol">
                &copy;
              </span>
              <a href="https://brixton.zip" target="_blank" rel="noopener noreferrer" className="copyright-tooltip">
                <span className="tooltip-line-1">Development & Design</span>
                <span className="tooltip-line-2">brixton.zip</span>
              </a>
            </span> 2025 Gingermite Floral Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
