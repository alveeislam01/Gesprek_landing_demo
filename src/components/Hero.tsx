import React, { useState, useEffect, useRef, useCallback } from 'react';

const ROTATING_PHRASES = [
    'that handles all of your calls',
    'that handles all of your missed calls',
    'that books appointments for you',
    'that never misses a lead',
    'that works 24/7 for you',
];

const ROTATION_INTERVAL = 3000; // ms between phrase changes
const FADE_DURATION = 500;      // ms for fade animation

const Hero: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (!hasRunRef.current) {
            hasRunRef.current = true;
            setTimeout(() => setMounted(true), 0);
        }
    }, []);

    const rotatePhrases = useCallback(() => {
        setIsFading(true);
        setTimeout(() => {
            setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
            setIsFading(false);
        }, FADE_DURATION);
    }, []);

    useEffect(() => {
        const interval = setInterval(rotatePhrases, ROTATION_INTERVAL);
        return () => clearInterval(interval);
    }, [rotatePhrases]);

    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: '#0B0D10',
            fontFamily: '"Outfit", -apple-system, sans-serif',
            padding: '80px 24px 100px',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
        }}>

            {/* Dotted Grid Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                zIndex: 0
            }} />

            <style>
                {`

                    .hero-text-enter {
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .hero-text-active {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .hero-rotating-text {
                        display: inline-block;
                        transition: opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease;
                    }
                    .hero-rotating-text.fading {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    .hero-rotating-text.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .hero-btn-primary {
                        background: #6EF5B2;
                        color: #0B0D10;
                        font-size: 16px;
                        font-weight: 500;
                        padding: 14px 28px;
                        border-radius: 999px;
                        border: none;
                        cursor: pointer;
                        transition: background 0.2s ease, transform 0.2s ease;
                    }
                    .hero-btn-primary:hover {
                        background: #5EE3A4;
                        transform: translateY(-1px);
                    }

                    .hero-btn-secondary {
                        background: transparent;
                        color: #E6E8EB;
                        font-size: 16px;
                        font-weight: 500;
                        padding: 14px 28px;
                        border-radius: 999px;
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        cursor: pointer;
                        transition: border-color 0.2s ease, transform 0.2s ease;
                    }
                    .hero-btn-secondary:hover {
                        border-color: rgba(255, 255, 255, 0.30);
                        transform: translateY(-1px);
                    }

                    /* Mobile: Stack buttons vertically */
                    @media (max-width: 768px) {
                        .hero-buttons {
                            flex-direction: column !important;
                            gap: 12px !important;
                        }
                        .hero-buttons button {
                            width: 100%;
                            justify-content: center;
                        }
                        .hero-heading {
                            font-size: 48px !important;
                        }
                        br {
                            display: none;
                        }
                    }

                    @media (max-width: 480px) {
                        .hero-heading {
                            font-size: 36px !important;
                            margin-bottom: 24px !important;
                        }
                        .hero-section-inner {
                            padding: 0 16px !important;
                        }
                    }
                `}
            </style>

            <div className="hero-section-inner" style={{
                maxWidth: '1100px',
                width: '100%',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>

                {/* Content */}
                <div className={`hero-text-enter ${mounted ? 'hero-text-active' : ''}`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h1 className="hero-heading" style={{
                        fontFamily: '"Inter Tight", sans-serif',
                        fontSize: '72px',
                        fontWeight: 500,
                        color: '#F5F7FA',
                        lineHeight: 1.1,
                        letterSpacing: '-0.04em',
                        marginBottom: '40px',
                        margin: 0
                    }}>
                        Conversational Voice Agent{' '}
                        <br />
                        for your business{' '}
                        <br />
                        <span
                            className={`hero-rotating-text ${isFading ? 'fading' : 'visible'}`}
                            style={{ color: '#6EF5B2' }}
                        >
                            {ROTATING_PHRASES[phraseIndex]}
                        </span>
                    </h1>

                    {/* Button Group */}
                    <div className="hero-buttons" style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: '40px'
                    }}>
                        <button className="hero-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                                <circle cx="10" cy="2.5" r="2.5" fill="black" />
                                <circle cx="17.5" cy="2.5" r="2.5" fill="black" />
                                <circle cx="2.5" cy="10" r="2.5" fill="black" />
                                <circle cx="10" cy="10" r="2.5" fill="black" />
                                <circle cx="17.5" cy="10" r="2.5" fill="black" />
                                <circle cx="2.5" cy="17.5" r="2.5" fill="black" />
                                <circle cx="10" cy="17.5" r="2.5" fill="black" />
                                <circle cx="17.5" cy="17.5" r="2.5" fill="black" />
                                <circle cx="2.5" cy="25" r="2.5" fill="black" />
                                <circle cx="10" cy="25" r="2.5" fill="black" />
                                <circle cx="17.5" cy="25" r="2.5" fill="black" />
                                <circle cx="2.5" cy="32.5" r="2.5" fill="black" />
                                <circle cx="10" cy="32.5" r="2.5" fill="black" />
                                <circle cx="17.5" cy="32.5" r="2.5" fill="black" />
                                <circle cx="10" cy="40" r="2.5" fill="black" />
                                <circle cx="2.5" cy="47.5" r="2.5" fill="black" />
                                <circle cx="10" cy="47.5" r="2.5" fill="black" />
                                <circle cx="17.5" cy="47.5" r="2.5" fill="black" />
                            </svg>
                            Make a call now
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;