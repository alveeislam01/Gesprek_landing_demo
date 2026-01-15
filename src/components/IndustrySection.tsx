import React from 'react';
import { Activity, GraduationCap, Home, CheckCircle2 } from 'lucide-react';

const IndustrySection: React.FC = () => {
    const industries = [
        {
            icon: <Activity size={28} color="#0EA5E9" />,
            title: 'Healthcare',
            description: [
                'Automated appointment confirmations and reschedules.',
                'Pre-visit instructions and follow-up calls are sent instantly.',
                'Handles billing, reports, and status queries 24/7.',
                'Full auditability across all communication channels.'
            ]
        },
        {
            icon: <GraduationCap size={28} color="#0EA5E9" />,
            title: 'EdTech',
            description: [
                'Immediate qualification of new inquiries.',
                'Automated demo confirmations and trial follow-ups.',
                'Timely fee reminders at scale.',
                'Consistent counselling information across teams.'
            ]
        },
        {
            icon: <Home size={28} color="#0EA5E9" />,
            title: 'Home Services',
            description: [
                'Immediate lead callbacks and job scheduling.',
                'Quote follow-ups and reminders automated.',
                'Service confirmations and reschedules handled seamlessly.',
                'Post-visit review requests and status updates sent automatically.'
            ]
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px', padding: '0 16px' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 44px)',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                        fontFamily: '"Inter", sans-serif',
                        lineHeight: 1.2
                    }}>
                        Built for Your Industry
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        color: '#64748B',
                        lineHeight: 1.6
                    }}>
                        Tailored AI solutions for every sector
                    </p>
                </div>

                <div className="responsive-grid-3" style={{ padding: '0 16px' }}>
                    {industries.map((industry, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '24px',
                            padding: 'clamp(24px, 4vw, 36px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#0EA5E9';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-6px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#E2E8F0';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                                border: '1px solid #BAE6FD',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                {industry.icon}
                            </div>

                            <h3 style={{
                                fontSize: 'clamp(20px, 3vw, 24px)',
                                fontWeight: 700,
                                color: '#0F172A',
                                marginBottom: '20px',
                            }}>
                                {industry.title}
                            </h3>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px'
                            }}>
                                {industry.description.map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        fontSize: 'clamp(13px, 1.8vw, 14px)',
                                        color: '#475569',
                                        lineHeight: '1.5'
                                    }}>
                                        <CheckCircle2 size={18} color="#0EA5E9" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;
