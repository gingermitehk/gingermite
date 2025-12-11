import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('sidebarCollapsed');
    const collapsed = stored === null || stored === 'true';
    setIsCollapsed(collapsed);
  }, []);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', String(newState));
  };

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

  // Determine sidebar color based on route
  const getSidebarColorClass = () => {
    switch (location.pathname) {
      case '/portfolio':
        return 'sidebar-portfolio';
      case '/about':
        return 'sidebar-about';
      case '/services':
        return 'sidebar-services';
      case '/contact':
        return 'sidebar-contact';
      case '/press':
        return 'sidebar-press';
      default:
        return 'sidebar-home';
    }
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${getSidebarColorClass()}`} id="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <img src="/media/logo.png" alt="Gingermite Logo" className="logo-img" />
          <h1>Gingermite</h1>
        </Link>
      </div>
      <nav className="sidebar-nav-top">
        <Link to="/about" className="nav-link">
          <span className="nav-text">About</span>
        </Link>
        <Link to="/portfolio" className="nav-link">
          <span className="nav-text">Portfolio</span>
        </Link>
        <Link to="/services" className="nav-link">
          <span className="nav-text">Services</span>
        </Link>
        <a href="#shop" className="nav-link" onClick={handleNavClick}>
          <span className="nav-text">Shop</span>
        </a>
      </nav>

      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
      >
        <svg className="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <nav className="sidebar-nav-bottom">
        <Link to="/press" className="nav-link">
          <span className="nav-text">Press</span>
        </Link>
        <Link to="/contact" className="nav-link">
          <span className="nav-text">Contact</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
