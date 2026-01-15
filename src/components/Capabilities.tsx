import React from 'react';
import { Target, Calendar, HelpCircle, Phone } from 'lucide-react';

const Capabilities: React.FC = () => {
    const features = [
        {
            icon: <Target size={28} color="#0EA5E9" strokeWidth={1.5} />,
            title: 'Lead Qualification & Intent Detection',
            description: 'AI listens for intent, urgency, objection cues, budget signals, and readiness to move. It filters noise and surfaces the leads worth acting on.'
        },
        {
            icon: <Calendar size={28} color="#0EA5E9" strokeWidth={1.5} />,
            title: 'Instant Bookings & Scheduling',
            description: 'The AI books demos, appointments, visits, or callbacks instantly. It sends reminders automatically, cutting no-shows and ensuring smooth coordination.'
        },
        {
            icon: <HelpCircle size={28} color="#0EA5E9" strokeWidth={1.5} />,
            title: '24/7 Inquiry Handling',
            description: 'From pricing to product questions, AI gives consistent, clear answers at any hour. It removes queues and supports global audiences in multiple languages.'
        },
        {
            icon: <Phone size={28} color="#0EA5E9" strokeWidth={1.5} />,
            title: 'Follow-Ups That Never Slip',
            description: 'Automate follow-ups with personalized calls, keeping customers engaged and informed at every stage of their journey.'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                        What AI Phone Calls Can Do
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        color: '#64748B',
                        lineHeight: 1.6
                    }}>
                        Real capabilities that drive real business results
                    </p>
                </div>

                <div className="responsive-grid-2" style={{ padding: '0 16px' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: 'clamp(24px, 4vw, 36px)',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(14, 165, 233, 0.1)';
                                e.currentTarget.style.borderColor = '#BAE6FD';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                                e.currentTarget.style.borderColor = '#E2E8F0';
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                                border: '1px solid #BAE6FD',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                color: '#0F172A',
                                marginBottom: '12px',
                                lineHeight: '1.3',
                                letterSpacing: '-0.01em'
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                fontSize: 'clamp(14px, 1.8vw, 15px)',
                                color: '#64748B',
                                lineHeight: '1.7'
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
