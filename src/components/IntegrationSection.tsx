import React from 'react';
import { integrations } from './integrations/integrationLogos';

const IntegrationSection: React.FC = () => {
    // Inner ring: first 4, Outer ring: last 4
    const innerRing = integrations.slice(0, 4);
    const outerRing = integrations.slice(4, 8);

    return (
        <section
            id="integration"
            style={{
                backgroundColor: '#0B0D10',
                padding: '140px 0',
                color: '#ffffff',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                minHeight: '800px'
            }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '25%',
                transform: 'translate(-50%, -50%)',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, rgba(110, 245, 178, 0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

                    {/* Top Label */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            backgroundColor: 'rgba(110, 245, 178, 0.1)',
                            border: '1px solid rgba(110, 245, 178, 0.2)',
                            borderRadius: '999px',
                            color: '#6EF5B2',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}>
                            Integrations
                        </div>
                    </div>

                    <style>{`
                        .int-layout {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 60px;
                            align-items: center;
                        }
                        @media (max-width: 900px) {
                            .int-layout {
                                grid-template-columns: 1fr !important;
                                gap: 60px !important;
                            }
                            .orbit-container {
                                height: 400px !important;
                                transform: scale(0.7);
                            }
                        }
                        @media (max-width: 480px) {
                            .orbit-container {
                                transform: scale(0.5);
                                height: 320px !important;
                                margin-bottom: -40px;
                            }
                        }

                        .orbit-logo-item {
                            position: absolute;
                            width: 60px;
                            height: 60px;
                            background-color: #111318;
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 5;
                            box-shadow: 0 4px 24px rgba(0,0,0,0.5);
                            transform: translate(-50%, -50%);
                            animation: counter-spin-int 30s linear infinite;
                            overflow: hidden;
                            transition: border-color 0.3s ease;
                        }
                        .orbit-logo-item:hover {
                            border-color: rgba(110, 245, 178, 0.4);
                        }
                        .orbit-logo-item svg {
                            border-radius: 12px;
                        }

                        .orbit-ring-outer-int .orbit-logo-item {
                            animation: counter-spin-reverse-int 40s linear infinite;
                        }

                        @keyframes spin-int {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        @keyframes spin-reverse-int {
                            from { transform: rotate(360deg); }
                            to { transform: rotate(0deg); }
                        }
                        @keyframes counter-spin-int {
                            from { transform: translate(-50%, -50%) rotate(0deg); }
                            to { transform: translate(-50%, -50%) rotate(-360deg); }
                        }
                        @keyframes counter-spin-reverse-int {
                            from { transform: translate(-50%, -50%) rotate(-360deg); }
                            to { transform: translate(-50%, -50%) rotate(0deg); }
                        }

                        .int-logo-strip {
                            display: flex;
                            gap: 16px;
                            flex-wrap: wrap;
                            align-items: center;
                        }
                        @media (max-width: 900px) {
                            .int-logo-strip {
                                justify-content: center;
                            }
                        }
                        .int-logo-pill {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            padding: 8px 16px 8px 8px;
                            background: rgba(255, 255, 255, 0.04);
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-radius: 12px;
                            transition: border-color 0.2s ease;
                        }
                        .int-logo-pill:hover {
                            border-color: rgba(110, 245, 178, 0.25);
                        }
                    `}</style>

                    <div className="int-layout">
                        {/* Left: Orbit Animation */}
                        <div className="orbit-container" style={{
                            position: 'relative',
                            height: '540px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Central Node */}
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: '#0B0D10',
                                border: '2px solid rgba(110, 245, 178, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                boxShadow: '0 0 60px rgba(110, 245, 178, 0.2)',
                                position: 'relative'
                            }}>
                                <span style={{
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    letterSpacing: '-0.02em',
                                    color: '#F5F7FA'
                                }}>
                                    GESPREK
                                </span>
                            </div>

                            {/* Inner Ring */}
                            <div style={{
                                position: 'absolute',
                                width: '320px',
                                height: '320px',
                                border: '1px dashed rgba(255, 255, 255, 0.12)',
                                borderRadius: '50%',
                                animation: 'spin-int 30s linear infinite'
                            }}>
                                {innerRing.map((integration, idx) => {
                                    const positions = [
                                        { top: 0, left: '50%' },
                                        { top: '50%', left: '100%' },
                                        { top: '100%', left: '50%' },
                                        { top: '50%', left: 0 },
                                    ];
                                    const Logo = integration.logo;
                                    return (
                                        <div
                                            key={integration.name}
                                            className="orbit-logo-item"
                                            style={positions[idx] as React.CSSProperties}
                                            title={integration.name}
                                        >
                                            <Logo size={36} />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Outer Ring */}
                            <div className="orbit-ring-outer-int" style={{
                                position: 'absolute',
                                width: '500px',
                                height: '500px',
                                border: '1px dashed rgba(255, 255, 255, 0.06)',
                                borderRadius: '50%',
                                animation: 'spin-reverse-int 40s linear infinite'
                            }}>
                                {outerRing.map((integration, idx) => {
                                    const offset = Math.round(250 * Math.sin(Math.PI / 4));
                                    const positions = [
                                        { top: `calc(50% - ${offset}px)`, left: `calc(50% + ${offset}px)` },
                                        { top: `calc(50% + ${offset}px)`, left: `calc(50% + ${offset}px)` },
                                        { top: `calc(50% + ${offset}px)`, left: `calc(50% - ${offset}px)` },
                                        { top: `calc(50% - ${offset}px)`, left: `calc(50% - ${offset}px)` },
                                    ];
                                    const Logo = integration.logo;
                                    return (
                                        <div
                                            key={integration.name}
                                            className="orbit-logo-item"
                                            style={positions[idx] as React.CSSProperties}
                                            title={integration.name}
                                        >
                                            <Logo size={36} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div>
                            <h2 style={{
                                fontSize: 'clamp(40px, 5vw, 60px)',
                                fontWeight: '600',
                                color: '#F5F7FA',
                                lineHeight: '1.05',
                                letterSpacing: '-0.03em',
                                marginBottom: '24px'
                            }}>
                                Seamless <br />
                                <span style={{ color: '#6EF5B2' }}>Integrations</span>
                            </h2>

                            <p style={{
                                fontSize: '17px',
                                color: 'rgba(255, 255, 255, 0.5)',
                                lineHeight: '1.7',
                                marginBottom: '36px',
                                maxWidth: '480px'
                            }}>
                                Gesprek connects with your existing tools — CRMs, calendars, telephony providers, and field service platforms — so everything just works.
                            </p>

                            {/* Logo pills */}
                            <div className="int-logo-strip">
                                {integrations.map(integration => {
                                    const Logo = integration.logo;
                                    return (
                                        <div key={integration.name} className="int-logo-pill">
                                            <Logo size={28} />
                                            <span style={{
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                color: 'rgba(255, 255, 255, 0.7)',
                                            }}>
                                                {integration.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
