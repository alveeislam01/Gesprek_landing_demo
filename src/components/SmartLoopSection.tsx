import React from 'react';
import { Infinity, ChevronRight } from 'lucide-react';

const SmartLoopSection: React.FC = () => {
    return (
        <section style={{ padding: '40px 0', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
            <div className="container" style={{
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                position: 'relative'
            }}>
                {/* Left Side: Text */}
                <div style={{ flex: '0 0 35%', maxWidth: '400px', zIndex: 10 }}>
                    <h2 style={{
                        fontSize: '48px',
                        fontWeight: 700,
                        color: '#111827',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        fontFamily: '"Inter", sans-serif',
                        marginBottom: '16px'
                    }}>
                        And the Loop Only Gets Smarter
                    </h2>
                </div>

                {/* Right Side: Diagram */}
                <div style={{
                    flex: '1',
                    height: '650px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Diagram Wrapper - Size constrained to largest ring for easy relative positioning */}
                    <div style={{
                        position: 'relative',
                        width: '650px',
                        height: '650px',
                    }}>
                        {/* Concentric Rings (Centered in Wrapper) */}

                        {/* Inner Ring (d=280) */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            border: '1px dashed #E5E7EB',
                            zIndex: 1
                        }}></div>

                        {/* Middle Ring (d=460) */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '460px',
                            height: '460px',
                            borderRadius: '50%',
                            border: '1px dashed #E5E7EB',
                            zIndex: 1
                        }}></div>

                        {/* Outer Ring (d=640) */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '640px',
                            height: '640px',
                            borderRadius: '50%',
                            border: '1px dashed #E5E7EB',
                            zIndex: 1
                        }}></div>

                        {/* Center Node */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '88px',
                            height: '88px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
                            zIndex: 10
                        }}>
                            <Infinity size={44} color="#FFFFFF" />
                        </div>

                        {/* Arrows - Positioned exactly on rings */}

                        {/* Arrow 1: Top Right (Outer Ring) - 45 degrees */}
                        {/* Outer Ring Radius = 320px, Center = 325px
                            At 45°: x = 325 + 320*cos(45°) = 325 + 226 = 551px from left
                                    y = 325 - 320*sin(45°) = 325 - 226 = 99px from top
                        */}
                        <div style={{
                            position: 'absolute',
                            top: '81px',
                            left: '533px',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#111827',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            transform: 'rotate(45deg)'
                        }}>
                            <ChevronRight size={18} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        {/* Arrow 2: Bottom (Outer Ring) - 270 degrees (6 o'clock) */}
                        {/* At 270°: x = center, y = 325 + 320 = 645px from top */}
                        <div style={{
                            position: 'absolute',
                            top: '627px',
                            left: '50%',
                            transform: 'translateX(-50%) rotate(90deg)',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#111827',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5
                        }}>
                            <ChevronRight size={18} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        {/* Arrow 3: Left (Middle Ring) - 180 degrees (9 o'clock) */}
                        {/* Middle Ring Radius = 230px
                            At 180°: x = 325 - 230 = 95px from left, y = center
                        */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '77px',
                            transform: 'translateY(-50%) rotate(180deg)',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#111827',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5
                        }}>
                            <ChevronRight size={18} color="#FFFFFF" strokeWidth={3} />
                        </div>

                        {/* Cards - Positioned relative to wrapper */}

                        {/* Automate - Top Left */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            left: '0px',
                            width: '240px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
                            border: '1px solid #F3F4F6',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Automate</h3>
                            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                                AI handles the outreach — calling instantly, qualifying interest, and sending follow-ups.
                            </p>
                        </div>

                        {/* Analyse - Right */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-20px',
                            transform: 'translateY(-50%)',
                            width: '240px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
                            border: '1px solid #F3F4F6',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Analyse</h3>
                            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                                Every call is understood for intent and outcomes, then logged cleanly.
                            </p>
                        </div>

                        {/* Improve - Bottom Left */}
                        <div style={{
                            position: 'absolute',
                            bottom: '60px',
                            left: '40px',
                            width: '240px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
                            border: '1px solid #F3F4F6',
                            zIndex: 20
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Improve</h3>
                            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
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