import React from 'react';

const FeatureGridSection: React.FC = () => {
    const features = [
        {
            number: '01',
            title: 'Automated CRM Updates',
            description: 'Every important detail — budget, preference, timeline, objections, sentiment, and action items is extracted and logged instantly. No manual notes. No missed data.',
        },
        {
            number: '02',
            title: 'Automated Follow-ups',
            description: 'AI sets reminders, books callbacks, and sends messages based on the customer\'s needs or next steps, always on time.',
        },
        {
            number: '03',
            title: 'Automated Campaign Actions',
            description: 'Triggered WhatsApp messages, SMS alerts, emails, and internal notifications happen instantly based on call outcomes.',
        },
        {
            number: '04',
            title: 'Lead Interest Scoring',
            description: 'AI scores lead automatically by analyzing signals and intent detected in the conversation. Your team sees exactly who to prioritize.',
        },
        {
            number: '05',
            title: 'Customer Sentiment Detection',
            description: 'AI identifies satisfaction, frustration, hesitation, or delight — helping you understand how customers feel without surveys.',
        },
        {
            number: '06',
            title: 'AI Call Summary',
            description: 'A concise, accurate summary of the full call — key points, decisions, objections, commitments, and next steps included. Perfect for reps, managers, and workflows that depend on speed.',
        },
    ];

    return (
        <section style={{
            backgroundColor: '#0B0D10',
            padding: '140px 0',
            color: '#ffffff',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            position: 'relative',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            overflow: 'hidden',
        }}>
            {/* Decorative gradient blobs */}
            <div style={{
                position: 'absolute',
                top: '-120px', left: '-100px',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(110, 245, 178, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                filter: 'blur(60px)',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-80px', right: '-60px',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(69, 183, 209, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                filter: 'blur(60px)',
            }} />

            <style>{`
                .aftercall-layout {
                    display: grid;
                    grid-template-columns: 340px 1fr;
                    gap: 64px;
                    align-items: start;
                }
                @media (max-width: 1024px) {
                    .aftercall-layout {
                        grid-template-columns: 1fr;
                        gap: 48px;
                    }
                    .aftercall-sidebar {
                        margin-bottom: 24px;
                    }
                }

                .aftercall-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }
                @media (max-width: 640px) {
                    .aftercall-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .aftercall-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 16px;
                    padding: 32px 28px;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    position: relative;
                    overflow: hidden;
                }
                .aftercall-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(135deg, rgba(110, 245, 178, 0.04) 0%, transparent 50%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .aftercall-card:hover {
                    border-color: rgba(110, 245, 178, 0.2);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(110, 245, 178, 0.08);
                }
                .aftercall-card:hover::before {
                    opacity: 1;
                }
                .aftercall-card:hover .card-number {
                    color: #6EF5B2;
                    text-shadow: 0 0 20px rgba(110, 245, 178, 0.3);
                }

                .heading-accent-line {
                    width: 48px;
                    height: 3px;
                    background: linear-gradient(90deg, #6EF5B2, rgba(110, 245, 178, 0.2));
                    border-radius: 2px;
                    margin-bottom: 28px;
                }

                @media (max-width: 1024px) {
                    .aftercall-sidebar {
                        position: static !important;
                        top: auto !important;
                    }
                }
            `}</style>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
                position: 'relative',
                zIndex: 1,
            }}>
                <div className="aftercall-layout">
                    {/* Left — Sticky heading */}
                    <div className="aftercall-sidebar" style={{
                        position: 'sticky',
                        top: '120px',
                    }}>
                        <div className="heading-accent-line" />

                        <h2 style={{
                            fontSize: 'clamp(28px, 3.5vw, 40px)',
                            fontWeight: 700,
                            color: '#F5F7FA',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.2,
                            margin: '0 0 20px 0',
                        }}>
                            What Happens After the Call Ends
                        </h2>

                        <p style={{
                            fontSize: '15px',
                            color: 'rgba(255, 255, 255, 0.45)',
                            lineHeight: 1.7,
                            margin: '0 0 32px 0',
                        }}>
                            Every call triggers a chain of intelligent automations — so your team can focus on closing, not logging.
                        </p>

                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: '999px',
                            background: 'rgba(110, 245, 178, 0.08)',
                            border: '1px solid rgba(110, 245, 178, 0.15)',
                            color: '#6EF5B2',
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                        }}>
                            <span style={{
                                width: '6px', height: '6px',
                                borderRadius: '50%',
                                background: '#6EF5B2',
                                boxShadow: '0 0 8px rgba(110, 245, 178, 0.5)',
                            }} />
                            Fully Automated
                        </div>
                    </div>

                    {/* Right — Cards */}
                    <div className="aftercall-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="aftercall-card">
                                {/* Number */}
                                <div className="card-number" style={{
                                    fontSize: '32px',
                                    fontWeight: 800,
                                    color: 'rgba(255, 255, 255, 0.08)',
                                    letterSpacing: '-0.04em',
                                    lineHeight: 1,
                                    marginBottom: '16px',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {feature.number}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    color: '#F5F7FA',
                                    marginBottom: '12px',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.01em',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '13.5px',
                                    color: 'rgba(255, 255, 255, 0.42)',
                                    lineHeight: 1.7,
                                    margin: 0,
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
