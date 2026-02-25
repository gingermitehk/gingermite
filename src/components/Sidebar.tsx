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

  const handleSidebarClick = (e: React.MouseEvent<HTMLElement>) => {
    // If collapsed, clicking anywhere opens it
    if (isCollapsed) {
      toggleSidebar();
      return;
    }

    // If open, only collapse when clicking on the sidebar toggle button area
    // (the middle space between top and bottom nav)
    const target = e.target as HTMLElement;
    const isClickableElement = target.closest('.nav-link, .logo, .sidebar-header, .sidebar-nav-top, .sidebar-nav-bottom, .sidebar-toggle');

    if (!isClickableElement) {
      toggleSidebar();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent sidebar click handler
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

  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent sidebar click handler
    toggleSidebar();
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
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${getSidebarColorClass()}`}
      id="sidebar"
      onClick={handleSidebarClick}
    >
      <Link to="/" className="sidebar-header" onClick={(e) => e.stopPropagation()}>
        <div className="logo">
          <span className="logo-img" aria-label="Gingermite Logo"></span>
          <h1>Gingermite</h1>
        </div>
      </Link>
      <nav className="sidebar-nav-top" onClick={(e) => e.stopPropagation()}>
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
          <span className="nav-text">
            Shop
            <svg className="external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </nav>

      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        onClick={handleToggleClick}
      >
        <svg className="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <nav className="sidebar-nav-bottom" onClick={(e) => e.stopPropagation()}>
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
