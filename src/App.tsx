import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MobileMenuToggle from './components/MobileMenuToggle';
import MediaHeader from './components/MediaHeader';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PressPage from './pages/PressPage';
import './App.css';
import './styles/components.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isHomePage && (
        <>
          <MediaHeader />
          <Hero />
        </>
      )}
      <div className="page-wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/press" element={<PressPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <MobileMenuToggle />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
