import React from 'react';

const PowerSection: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Multilingual AI Agent',
            description: 'Speaks naturally, handles interruptions, and switches languages mid-call - no IVR, no robotic pauses.'
        },
        {
            number: '02',
            title: 'LLM-Powered Understanding',
            description: 'Understands meaning, tone, and context to respond, clarify, and adjust the flow in real time.'
        },
        {
            number: '03',
            title: 'Smooth Handoff to Humans',
            description: 'When a lead shows intent, AI hands off instantly with full context-no repeats, no friction.'
        },
        {
            number: '04',
            title: 'Instant Post-Call Actions',
            description: 'Sends confirmations, reminders, messages, quotes, or summaries automatically right after the call.'
        },
        {
            number: '05',
            title: 'Smart Interruption Handling',
            description: 'Stays on track through noise, overlap, or sudden questions and adapts without breaking the flow.'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #F8FAFC 0%, #F0F9FF 50%, #FFFFFF 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(40px, 6vw, 80px)'
            }}>
                {/* Left Column: Headline */}
                <div style={{
                    flex: '1 1 300px',
                    minWidth: '280px'
                }}>
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 44px)',
                            fontWeight: 700,
                            color: '#0F172A',
                            lineHeight: '1.15',
                            letterSpacing: '-0.02em',
                            maxWidth: '380px',
                            fontFamily: '"Inter", sans-serif'
                        }}>
                            What Powers Every AI Phone Call
                        </h2>
                        <p style={{
                            fontSize: 'clamp(15px, 2vw, 17px)',
                            color: '#64748B',
                            lineHeight: 1.6,
                            marginTop: '20px',
                            maxWidth: '360px'
                        }}>
                            Built with cutting-edge technology for natural, intelligent conversations.
                        </p>
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div style={{ flex: '1.5 1 320px', minWidth: '300px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 32px)' }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                gap: 'clamp(16px, 3vw, 28px)',
                                position: 'relative',
                                padding: 'clamp(16px, 3vw, 24px)',
                                background: '#FFFFFF',
                                borderRadius: '20px',
                                border: '1px solid #E2E8F0',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#BAE6FD';
                                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(14, 165, 233, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E2E8F0';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                {/* Number Circle */}
                                <div style={{
                                    width: 'clamp(44px, 6vw, 52px)',
                                    height: 'clamp(44px, 6vw, 52px)',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 700,
                                    flexShrink: 0,
                                    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                                }}>
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 style={{
                                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                                        fontWeight: 600,
                                        color: '#0F172A',
                                        marginBottom: '8px',
                                        lineHeight: '1.3'
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(13px, 1.8vw, 15px)',
                                        color: '#64748B',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PowerSection;
