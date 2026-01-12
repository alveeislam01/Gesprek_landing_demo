import React from 'react';

const AfterCallSection: React.FC = () => {
    const cards = [
        {
            number: '01.',
            title: 'Automated CRM Updates',
            description: 'Every important detail - budget, preference, timeline, questions, sentiment, and action items is extracted and logged instantly. No manual notes. No missed data.'
        },
        {
            number: '02.',
            title: 'Automated Follow-ups',
            description: 'AI sets reminders, books callbacks, and sends messages based on the customer\'s needs or next steps, always on time.'
        },
        {
            number: '03.',
            title: 'Automated Campaign Actions',
            description: 'Triggered WhatsApp messages, SMS alerts, emails, and internal notifications happen instantly based on call outcomes.'
        },
        {
            number: '04.',
            title: 'Lead Interest Scoring',
            description: 'AI scores lead automatically by analyzing signals and intent detected in the conversation. Your team sees exactly who to prioritize.'
        },
        {
            number: '05.',
            title: 'Customer Sentiment Detection',
            description: 'AI identifies satisfaction, frustration, hesitation, or delight - helping you understand how customers feel without surveys.'
        },
        {
            number: '06.',
            title: 'AI Call Summary',
            description: 'A concise, accurate summary of the full call - key points, decisions, objections, commitments, and next steps included. Perfect for reps, managers, and workflows that depend on speed.'
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
                    What Happens After the Call Ends
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '32px',
                    justifyContent: 'center'
                }}>
                    {cards.map((card, index) => (
                        <div key={index} style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E7EB',
                            borderRadius: '24px',
                            padding: '40px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            height: '100%',
                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#D1D5DB';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#E5E7EB';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#111827',
                                marginBottom: '16px'
                            }}>
                                {card.number}
                            </div>

                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                color: '#111827',
                                marginBottom: '16px',
                                lineHeight: '1.3'
                            }}>
                                {card.title}
                            </h3>

                            <p style={{
                                fontSize: '16px',
                                color: '#6B7280', // Grey 500
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
