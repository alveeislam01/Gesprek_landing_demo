import React from 'react';
import { Target, Calendar, HelpCircle, Phone } from 'lucide-react';

const Capabilities: React.FC = () => {
    const features = [
        {
            icon: <Target size={32} color="#111827" strokeWidth={1.5} />,
            title: 'Lead Qualification & Intent Detection',
            description: 'AI listens for intent, urgency, objection cues, budget signals, and readiness to move. It filters noise and surfaces the leads worth acting on - before your team even picks up the phone.'
        },
        {
            icon: <Calendar size={32} color="#111827" strokeWidth={1.5} />,
            title: 'Instant Bookings & Scheduling',
            description: 'The AI books demos, appointments, visits, or callbacks instantly. It sends reminders automatically, cutting no-shows and ensuring smooth coordination without human effort.'
        },
        {
            icon: <HelpCircle size={32} color="#111827" strokeWidth={1.5} />,
            title: '24/7 Inquiry Handling',
            description: 'From pricing to product questions, AI gives consistent, clear answers at any hour. It removes queues, reduces dropped inquiries, and supports global audiences in multiple languages.'
        },
        {
            icon: <Phone size={32} color="#111827" strokeWidth={1.5} />,
            title: 'Follow-Ups That Never Slip',
            description: 'Automate follow-ups with personalized calls, keeping customers engaged and informed at every stage of their journey.'
        }
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#F9FAFB' }}> {/* Light grey/blue finish like image */}
            <div className="container" style={{ maxWidth: '1280px' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '60px',
                    letterSpacing: '-0.02em',
                    fontFamily: '"Inter", sans-serif'
                }}>
                    What AI Phone Calls Can Do in the Real World
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px',
                    justifyContent: 'center'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            height: '100%',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
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
                                marginBottom: '32px',
                                backgroundColor: 'transparent' // Image shows white/transparent bg for icon box
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                color: '#111827',
                                marginBottom: '16px',
                                lineHeight: '1.3',
                                letterSpacing: '-0.01em'
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                fontSize: '16px',
                                color: '#6B7280', // Text-gray-500
                                lineHeight: '1.6',
                                fontWeight: 400
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
