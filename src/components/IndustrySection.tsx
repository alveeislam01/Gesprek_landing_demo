import React from 'react';
import { Activity, GraduationCap, Home, CheckCircle2 } from 'lucide-react';

const IndustrySection: React.FC = () => {
    const industries = [
        {
            icon: <Activity size={32} color="#2563EB" />, // Blue for Healthcare
            title: 'Healthcare',
            description: [
                'Automated appointment confirmations and reschedules.',
                'Pre-visit instructions and follow-up calls are sent instantly.',
                'Handles billing, reports, and status queries 24/7.',
                'Full auditability across all communication channels.'
            ]
        },
        {
            icon: <GraduationCap size={32} color="#2563EB" />,
            title: 'EdTech',
            description: [
                'Immediate qualification of new inquiries.',
                'Automated demo confirmations and trial follow-ups.',
                'Timely fee reminders at scale.',
                'Consistent counselling information across teams.'
            ]
        },
        {
            icon: <Home size={32} color="#2563EB" />,
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
        <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '60px',
                    letterSpacing: '-0.02em'
                }}>
                    Built for Your Industry
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '32px',
                    justifyContent: 'center'
                }}>
                    {industries.map((industry, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E7EB',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#38BDF8'; // Sky Blue Border
                                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(56, 189, 248, 0.4)'; // Skyblow glow
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#E5E7EB';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                border: '1px solid #E5E7EB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                backgroundColor: '#F9FAFB'
                            }}>
                                {industry.icon}
                            </div>

                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#111827',
                                marginBottom: '24px',
                            }}>
                                {industry.title}
                            </h3>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}>
                                {industry.description.map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        fontSize: '16px',
                                        color: '#4B5563',
                                        lineHeight: '1.5'
                                    }}>
                                        <CheckCircle2 size={20} color="#111827" fill="#111827" stroke="#FFFFFF" style={{ flexShrink: 0, marginTop: '2px' }} />
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
