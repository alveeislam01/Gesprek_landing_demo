import React, { useState } from 'react';
import '../index.css';
import logo from '../assets/logo.svg';

interface HeaderProps {
  onOpenDemo?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #0B0C10 0%, #0A0B0F 100%)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .header-nav-link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .header-nav-link:hover {
          color: #F5F7FA;
        }

        .header-cta {
          background: #6EF5B2;
          color: #0B0D10;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .header-cta:hover {
          background: #5EE3A4;
          transform: translateY(-1px);
        }

        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; gap: 32px; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }

        .mobile-menu {
          position: absolute;
          top: 72px;
          left: 0;
          right: 0;
          background: #0B0D10;
          padding: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .mobile-menu a {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
        .mobile-menu a:hover {
          color: #F5F7FA;
        }
      `}</style>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#F5F7FA'
        }}>
          <img src={logo} alt="Gesprek" style={{ height: '32px' }} />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          {['Solution', 'Integration', 'Resources'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="header-nav-link"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            className="header-cta desktop-nav"
            onClick={onOpenDemo}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="1.5" fill="black" />
              <circle cx="7.5" cy="2" r="1.5" fill="black" />
              <circle cx="13" cy="2" r="1.5" fill="black" />
              <circle cx="2" cy="7.5" r="1.5" fill="black" />
              <circle cx="7.5" cy="7.5" r="1.5" fill="black" />
              <circle cx="13" cy="7.5" r="1.5" fill="black" />
              <circle cx="2" cy="13" r="1.5" fill="black" />
              <circle cx="7.5" cy="13" r="1.5" fill="black" />
              <circle cx="13" cy="13" r="1.5" fill="black" />
            </svg>
            Book Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: '#F5F7FA',
              fontSize: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        mobileMenuOpen && (
          <div className="mobile-menu">
            {['Solution', 'Integration', 'Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="header-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDemo) onOpenDemo();
              }}
              style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="1.5" fill="black" />
                <circle cx="7.5" cy="2" r="1.5" fill="black" />
                <circle cx="13" cy="2" r="1.5" fill="black" />
                <circle cx="2" cy="7.5" r="1.5" fill="black" />
                <circle cx="7.5" cy="7.5" r="1.5" fill="black" />
                <circle cx="13" cy="7.5" r="1.5" fill="black" />
                <circle cx="2" cy="13" r="1.5" fill="black" />
                <circle cx="7.5" cy="13" r="1.5" fill="black" />
                <circle cx="13" cy="13" r="1.5" fill="black" />
              </svg>
              Book Demo
            </button>
          </div>
        )
      }
    </header >
  );
};

export default Header;
