import React, { useState, useEffect } from 'react';
import '../index.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(229, 231, 235, 0.5)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div className="logo" style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px', color: '#050505' }}>
          <div style={{ width: '24px', height: '24px', background: '#050505', borderRadius: '50%' }}></div>
          <span>Gesprek.ai</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; gap: 32px; align-items: center; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {['Solutions', 'Integrations', 'Resources'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '14px',
                color: '#4B5563', // Grey 600
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#050505'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#signin"
            className="desktop-nav"
            style={{
              fontSize: '14px',
              color: '#050505',
              fontWeight: 500
            }}
          >
            Sign in
          </a>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#050505',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '99px',
              transition: 'transform 0.1s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#050505', fontSize: '24px' }}
          >
            {mobileMenuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            background: 'white',
            padding: '24px',
            borderBottom: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          {['Solutions', 'Integrations', 'Resources', 'Sign in'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ fontSize: '16px', fontWeight: 500, color: '#050505' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
