import React from 'react';

const Stats: React.FC = () => {
    const stats = [
        { value: '90%', label: 'Call Automation' },
        { value: '90%', label: 'Lower Manpower' },
        { value: '50%', label: 'Error Reduction' },
        { value: '60%', label: 'Cost Savings' },
        { value: '60%', label: 'Qualified Leads' },
        { value: '10X', label: 'Conversions' },
    ];

    return (
        <section style={{
            padding: '80px 20px',
            background: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 50%, #F0F9FF 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Sky blue background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1400px',
                height: '1400px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 44px)',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2',
                        fontFamily: '"Inter", sans-serif'
                    }}>
                        Fast-Track Business Success with AI Phone Calls
                    </h2>

                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        color: '#64748B',
                        fontWeight: 400,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Proven results that drive real business impact
                    </p>
                </div>

                <div className="responsive-grid-6" style={{
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: 'clamp(20px, 3vw, 32px) 16px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(186, 230, 253, 0.6)',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                            boxShadow: '0 4px 16px rgba(14, 165, 233, 0.06)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(14, 165, 233, 0.15)';
                                e.currentTarget.style.borderColor = '#0EA5E9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(14, 165, 233, 0.06)';
                                e.currentTarget.style.borderColor = 'rgba(186, 230, 253, 0.6)';
                            }}>
                            <div style={{
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '8px',
                                lineHeight: '1',
                                letterSpacing: '-0.02em'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: 'clamp(11px, 1.5vw, 13px)',
                                color: '#64748B',
                                lineHeight: '1.4',
                                fontWeight: 500,
                                letterSpacing: '0.01em'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;