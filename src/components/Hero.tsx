import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (!hasRunRef.current) {
            hasRunRef.current = true;
            setTimeout(() => setMounted(true), 0);
        }
    }, []);

    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            padding: 'clamp(80px, 12vh, 120px) 0 clamp(48px, 8vh, 80px)'
        }}>

            {/* Ambient Background Blobs */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

                    @keyframes float-smooth {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                    }

                    @keyframes float-delayed {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }

                    @keyframes core-pulse {
                        0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
                        70% { box-shadow: 0 0 0 30px rgba(14, 165, 233, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
                    }

                    @keyframes flow-line {
                        to { stroke-dashoffset: 0; }
                    }

                    @keyframes wave-smooth {
                        0%, 100% { height: 8px; }
                        50% { height: 24px; }
                    }

                    .glass-card {
                        background: rgba(255, 255, 255, 0.7);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 255, 255, 0.8);
                        box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.15);
                    }

                    .hero-text-enter {
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .hero-text-active {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .connection-path {
                        stroke-dasharray: 10;
                        stroke-dashoffset: 200;
                        animation: flow-line 2s linear infinite;
                    }

                    /* Hide animation on mobile */
                    @media (max-width: 900px) {
                        .hero-animation-wrapper {
                            display: none !important;
                        }
                        .hero-grid {
                            grid-template-columns: 1fr !important;
                            text-align: center;
                        }
                        .hero-content {
                            align-items: center !important;
                        }
                        .hero-buttons {
                            justify-content: center !important;
                        }
                    }
                `}
            </style>

            <div className="hero-grid" style={{
                maxWidth: '1280px',
                width: '100%',
                padding: '0 clamp(16px, 4vw, 24px)',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 6vw, 60px)',
                alignItems: 'center'
            }}>

                {/* --- LEFT: Content --- */}
                <div className={`hero-content hero-text-enter ${mounted ? 'hero-text-active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.6)',
                        borderRadius: '100px',
                        marginBottom: 'clamp(20px, 4vw, 32px)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                    }}>
                        <span style={{ width: '8px', height: '8px', background: '#0EA5E9', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: 600, color: '#0369A1' }}>AI Voice Agent v2.0</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(36px, 7vw, 60px)',
                        fontWeight: 800,
                        color: '#0F172A',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        marginBottom: 'clamp(16px, 3vw, 24px)'
                    }}>
                        Human-like calling.<br />
                        <span style={{ color: '#0284C7' }}>Infinite scale.</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(16px, 2.2vw, 20px)',
                        color: '#475569',
                        lineHeight: '1.6',
                        marginBottom: 'clamp(32px, 5vw, 48px)',
                        maxWidth: '540px'
                    }}>
                        Engage customers instantly with AI agents that listen, understand, and resolve requests in real-time.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: '#0284C7',
                            color: 'white',
                            padding: 'clamp(14px, 2vw, 18px) clamp(24px, 4vw, 36px)',
                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                            fontWeight: 600,
                            borderRadius: '12px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.4)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Start Free Trial
                        </button>
                    </div>
                </div>

                {/* --- RIGHT: Animation (hidden on mobile via CSS) --- */}
                <div className="hero-animation-wrapper" style={{
                    position: 'relative',
                    height: 'clamp(400px, 50vw, 600px)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/* CONNECTION LINES */}
                    <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, overflow: 'visible' }}>
                        <path d="M 120 300 C 200 300, 220 300, 300 300" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <path d="M 120 300 C 200 300, 220 300, 300 300" stroke="#0EA5E9" strokeWidth="3" fill="none" className="connection-path" />
                        <path d="M 300 300 C 380 300, 380 180, 480 180" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <path d="M 300 300 C 380 300, 380 180, 480 180" stroke="#0EA5E9" strokeWidth="3" fill="none" className="connection-path" style={{ animationDelay: '0.5s' }} />
                        <path d="M 300 300 C 380 300, 380 420, 480 420" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <path d="M 300 300 C 380 300, 380 420, 480 420" stroke="#0EA5E9" strokeWidth="3" fill="none" className="connection-path" style={{ animationDelay: '0.8s' }} />
                    </svg>

                    {/* CENTER: AI CORE */}
                    <div style={{
                        position: 'absolute',
                        zIndex: 10,
                        animation: 'float-smooth 6s ease-in-out infinite'
                    }}>
                        <div style={{
                            width: 'clamp(80px, 12vw, 120px)',
                            height: 'clamp(80px, 12vw, 120px)',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 60px rgba(14, 165, 233, 0.3)',
                            position: 'relative',
                            animation: 'core-pulse 3s infinite'
                        }}>
                            <div style={{
                                width: 'clamp(56px, 8vw, 80px)',
                                height: 'clamp(56px, 8vw, 80px)',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.4)'
                            }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14h-1v-2h1v2zm0-4h-1V7h1v5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* LEFT CARD: Incoming Call */}
                    <div className="glass-card" style={{
                        position: 'absolute',
                        left: '0',
                        top: '42%',
                        padding: '16px 20px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        zIndex: 20,
                        animation: 'float-delayed 5s ease-in-out infinite'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: '#E0F2FE',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}>
                            👩‍💼
                        </div>
                        <div>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Incoming Call</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '24px', marginTop: '4px' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} style={{
                                        width: '4px',
                                        background: '#0EA5E9',
                                        borderRadius: '2px',
                                        animation: `wave-smooth 1.2s ease-in-out infinite ${i * 0.1}s`
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TOP RIGHT CARD: Intent */}
                    <div className="glass-card" style={{
                        position: 'absolute',
                        right: '0',
                        top: '20%',
                        padding: '16px',
                        borderRadius: '16px',
                        width: '180px',
                        zIndex: 20,
                        animation: 'float-delayed 7s ease-in-out infinite 1s'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>INTENT DETECTED</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F0F9FF', padding: '8px', borderRadius: '8px' }}>
                            <div style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></div>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A' }}>Schedule Demo</span>
                        </div>
                    </div>

                    {/* BOTTOM RIGHT CARD: CRM Updated */}
                    <div className="glass-card" style={{
                        position: 'absolute',
                        right: '20px',
                        bottom: '20%',
                        padding: '12px 16px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        zIndex: 20,
                        animation: 'float-smooth 6s ease-in-out infinite 2s'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>CRM Updated</div>
                            <div style={{ fontSize: '11px', color: '#64748B' }}>Just now</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;