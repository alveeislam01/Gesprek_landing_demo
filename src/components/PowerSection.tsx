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
        <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF' }}>
            <div className="container" style={{ maxWidth: '1280px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
                {/* Left Column: Headline */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <h2 style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            color: '#111827',
                            lineHeight: '1.2',
                            letterSpacing: '-0.02em',
                            maxWidth: '400px'
                        }}>
                            What Powers Every AI Phone Call
                        </h2>
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div style={{ flex: '1.5', minWidth: '300px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{ display: 'flex', gap: '32px', position: 'relative' }}>
                                {/* Timeline Connector Line */}
                                {index !== steps.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        left: '28px', // Center of the 56px circle
                                        top: '56px',
                                        bottom: '-48px', // Reach to the next item
                                        width: '2px',
                                        borderLeft: '2px dotted #E5E7EB',
                                        zIndex: 0
                                    }} />
                                )}

                                {/* Number Circle */}
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1E40AF', // Deep Blue
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    flexShrink: 0,
                                    zIndex: 1,
                                    position: 'relative',
                                    boxShadow: '0 4px 6px -1px rgba(30, 64, 175, 0.3)'
                                }}>
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div style={{ paddingTop: '8px' }}>
                                    <h3 style={{
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        color: '#111827',
                                        marginBottom: '12px',
                                        lineHeight: '1.3'
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        color: '#6B7280', // Grey 500
                                        lineHeight: '1.6'
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
