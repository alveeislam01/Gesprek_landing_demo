import React, { useState, useEffect } from 'react';

interface FloatingCallButtonProps {
    onClick: () => void;
}

const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <React.Fragment>
            <button
                onClick={onClick}
                className={`floating-call-btn ${isVisible ? 'visible' : ''}`}
                style={{
                    position: 'fixed',
                    bottom: '32px',
                    right: '32px',
                    zIndex: 999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 28px',
                    backgroundColor: '#6EF5B2', // Brand Green
                    color: '#0B0D10',
                    border: 'none',
                    borderRadius: '999px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(110, 245, 178, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    opacity: 0,
                    transform: 'translateY(20px) scale(0.9)',
                    pointerEvents: 'none'
                }}
            >
                {/* Numpad Icon from Hero */}
                <svg width="20" height="20" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="2.5" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="2.5" r="2.5" fill="currentColor" />
                    <circle cx="2.5" cy="10" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="10" r="2.5" fill="currentColor" />
                    <circle cx="2.5" cy="17.5" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="17.5" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="17.5" r="2.5" fill="currentColor" />
                    <circle cx="2.5" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="2.5" cy="32.5" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="32.5" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="32.5" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="40" r="2.5" fill="currentColor" />
                    <circle cx="2.5" cy="47.5" r="2.5" fill="currentColor" />
                    <circle cx="10" cy="47.5" r="2.5" fill="currentColor" />
                    <circle cx="17.5" cy="47.5" r="2.5" fill="currentColor" />
                </svg>
                Make a call now
            </button>
            <style>{`
                .floating-call-btn.visible {
                    opacity: 1 !important;
                    transform: translateY(0) scale(1) !important;
                    pointer-events: auto !important;
                }
                .floating-call-btn:hover {
                    transform: translateY(-4px) scale(1.02) !important !important; /* Force override inline styles on hover */
                    background-color: #5EE3A4 !important;
                }
                /* Mobile: Adjust position */
                @media (max-width: 768px) {
                    .floating-call-btn {
                        bottom: 24px !important;
                        right: 24px !important;
                        padding: 14px 24px !important;
                        font-size: 15px !important;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

export default FloatingCallButton;
