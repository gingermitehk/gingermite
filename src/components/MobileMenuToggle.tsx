import { useState } from 'react';

const MobileMenuToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);

    const sidebar = document.getElementById('sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');

    if (sidebar) {
      if (newState) {
        sidebar.classList.add('mobile-open');
      } else {
        sidebar.classList.remove('mobile-open');
      }
    }

    if (backdrop) {
      if (newState) {
        backdrop.classList.add('active');
      } else {
        backdrop.classList.remove('active');
      }
    }
  };

  return (
    <>
      <button
        className={`mobile-menu-toggle ${isActive ? 'active' : ''}`}
        aria-label="Toggle mobile menu"
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`sidebar-backdrop ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
      />
    </>
  );
};

export default MobileMenuToggle;
