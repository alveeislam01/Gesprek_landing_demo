import React from 'react';
import { Database, RefreshCw, MessageSquare, TrendingUp, Heart, FileText } from 'lucide-react';

const AfterCallSection: React.FC = () => {
    const cards = [
        {
            icon: <Database size={24} color="#0EA5E9" />,
            title: 'Automated CRM Updates',
            description: 'Every important detail - budget, preference, timeline, questions, sentiment, and action items is extracted and logged instantly.'
        },
        {
            icon: <RefreshCw size={24} color="#0EA5E9" />,
            title: 'Automated Follow-ups',
            description: 'AI sets reminders, books callbacks, and sends messages based on the customer\'s needs or next steps, always on time.'
        },
        {
            icon: <MessageSquare size={24} color="#0EA5E9" />,
            title: 'Automated Campaign Actions',
            description: 'Triggered WhatsApp messages, SMS alerts, emails, and internal notifications happen instantly based on call outcomes.'
        },
        {
            icon: <TrendingUp size={24} color="#0EA5E9" />,
            title: 'Lead Interest Scoring',
            description: 'AI scores lead automatically by analyzing signals and intent detected in the conversation. Your team sees exactly who to prioritize.'
        },
        {
            icon: <Heart size={24} color="#0EA5E9" />,
            title: 'Customer Sentiment Detection',
            description: 'AI identifies satisfaction, frustration, hesitation, or delight - helping you understand how customers feel without surveys.'
        },
        {
            icon: <FileText size={24} color="#0EA5E9" />,
            title: 'AI Call Summary',
            description: 'A concise, accurate summary of the full call - key points, decisions, objections, commitments, and next steps included.'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)'
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
                        What Happens After the Call Ends
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        color: '#64748B',
                        lineHeight: 1.6
                    }}>
                        Every call triggers intelligent automation to keep your pipeline moving
                    </p>
                </div>

                <div className="responsive-grid-3" style={{ padding: '0 16px' }}>
                    {cards.map((card, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '20px',
                            padding: 'clamp(24px, 4vw, 32px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#BAE6FD';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(14, 165, 233, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#E2E8F0';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                                border: '1px solid #BAE6FD',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px'
                            }}>
                                {card.icon}
                            </div>

                            <h3 style={{
                                fontSize: 'clamp(16px, 2.2vw, 18px)',
                                fontWeight: 600,
                                color: '#0F172A',
                                marginBottom: '10px',
                                lineHeight: '1.3'
                            }}>
                                {card.title}
                            </h3>

                            <p style={{
                                fontSize: 'clamp(13px, 1.8vw, 14px)',
                                color: '#64748B',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AfterCallSection;
