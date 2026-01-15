import React from 'react';
import { Infinity as InfinityIcon, ChevronRight } from 'lucide-react';

const SmartLoopSection: React.FC = () => {
    return (
        <section style={{
            padding: 'clamp(48px, 8vw, 80px) 0',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 50%, #FFFFFF 100%)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'clamp(32px, 5vw, 40px)',
                position: 'relative'
            }}>
                {/* Left Side: Text */}
                <div style={{ flex: '1 1 280px', minWidth: '260px', zIndex: 10, padding: '0 16px' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 44px)',
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em',
                        fontFamily: '"Inter", sans-serif',
                        marginBottom: '20px',
                        maxWidth: '400px'
                    }}>
                        And the Loop Only Gets Smarter
                    </h2>
                    <p style={{
                        fontSize: 'clamp(15px, 2vw, 17px)',
                        color: '#64748B',
                        lineHeight: 1.6,
                        maxWidth: '360px'
                    }}>
                        Every interaction makes the AI more effective at driving results.
                    </p>

                    {/* Mobile Cards - Show on smaller screens */}
                    <div className="show-mobile" style={{ display: 'none', marginTop: '32px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { title: 'Automate', desc: 'AI handles outreach — calling, qualifying, and following up.' },
                                { title: 'Analyse', desc: 'Every call is understood for intent and logged cleanly.' },
                                { title: 'Improve', desc: 'What works gets applied to the next call automatically.' }
                            ].map((card, i) => (
                                <div key={i} style={{
                                    background: '#FFFFFF',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    border: '1px solid #BAE6FD',
                                    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.08)'
                                }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{card.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Diagram - Hide on mobile */}
                <div className="hide-mobile" style={{
                    flex: '1 1 400px',
                    minHeight: '500px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Diagram Wrapper */}
                    <div style={{
                        position: 'relative',
                        width: 'min(500px, 100%)',
                        height: '500px',
                    }}>
                        {/* Concentric Rings */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '220px',
                            height: '220px',
                            borderRadius: '50%',
                            border: '2px dashed rgba(14, 165, 233, 0.4)',
                            zIndex: 1
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '350px',
                            height: '350px',
                            borderRadius: '50%',
                            border: '2px dashed rgba(14, 165, 233, 0.3)',
                            zIndex: 1
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '480px',
                            height: '480px',
                            borderRadius: '50%',
                            border: '2px dashed rgba(14, 165, 233, 0.2)',
                            zIndex: 1
                        }}></div>

                        {/* Center Node */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 12px 28px rgba(14, 165, 233, 0.35)',
                            zIndex: 10
                        }}>
                            <InfinityIcon size={36} color="#FFFFFF" />
                        </div>

                        {/* Arrows on rings */}
                        <div style={{
                            position: 'absolute',
                            top: '50px',
                            right: '50px',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            transform: 'rotate(-45deg)',
                            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                        }}>
                            <ChevronRight size={14} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: '8px',
                            left: '50%',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            transform: 'translateX(-50%) rotate(180deg)',
                            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                        }}>
                            <ChevronRight size={14} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50px',
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            transform: 'translateY(-50%) rotate(90deg)',
                            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                        }}>
                            <ChevronRight size={14} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        {/* Cards */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '0',
                            width: '180px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '14px',
                            padding: '16px',
                            boxShadow: '0 8px 24px rgba(14, 165, 233, 0.1)',
                            border: '1px solid #BAE6FD',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Automate</h3>
                            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4', margin: 0 }}>
                                AI handles outreach — calling, qualifying, and following up.
                            </p>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translateY(-50%)',
                            width: '180px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '14px',
                            padding: '16px',
                            boxShadow: '0 8px 24px rgba(14, 165, 233, 0.1)',
                            border: '1px solid #BAE6FD',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Analyse</h3>
                            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4', margin: 0 }}>
                                Every call is understood for intent and logged cleanly.
                            </p>
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '20px',
                            width: '180px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '14px',
                            padding: '16px',
                            boxShadow: '0 8px 24px rgba(14, 165, 233, 0.1)',
                            border: '1px solid #BAE6FD',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>Improve</h3>
                            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4', margin: 0 }}>
                                What works gets applied to the next call automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartLoopSection;