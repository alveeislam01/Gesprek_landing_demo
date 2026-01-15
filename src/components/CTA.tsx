import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section style={{ padding: 'clamp(48px, 8vw, 80px) 0', backgroundColor: '#FFFFFF' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 50%, #075985 100%)',
                    borderRadius: 'clamp(20px, 3vw, 28px)',
                    padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'clamp(24px, 4vw, 40px)',
                    boxShadow: '0 24px 48px -12px rgba(2, 132, 199, 0.35)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decorations */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-50%',
                        left: '-10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ maxWidth: '550px', position: 'relative', zIndex: 1, flex: '1 1 300px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            marginBottom: '16px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2',
                            fontFamily: '"Inter", sans-serif'
                        }}>
                            And the Best Part?
                        </h2>
                        <p style={{
                            fontSize: 'clamp(15px, 2vw, 18px)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            You can build and customize AI call flows for ANY scenario your business runs.
                        </p>
                    </div>

                    <button style={{
                        backgroundColor: '#FFFFFF',
                        color: '#0284C7',
                        border: 'none',
                        padding: 'clamp(14px, 2vw, 18px) clamp(24px, 4vw, 36px)',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 600,
                        borderRadius: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                        position: 'relative',
                        zIndex: 1,
                        flexShrink: 0
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                        }}
                    >
                        Try It Now
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
