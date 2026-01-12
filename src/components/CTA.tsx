import React from 'react';

const CTA: React.FC = () => {
    return (
        <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <div style={{
                    backgroundColor: '#111111', // Dark background
                    borderRadius: '24px',
                    padding: '64px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '40px',
                    boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.2)'
                }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            marginBottom: '16px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            And the Best Part?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#E5E7EB', // Light grey text
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            You can build and customize AI call flows for ANY scenario your business runs.
                        </p>
                    </div>

                    <button style={{
                        backgroundColor: '#FFFFFF',
                        color: '#111111',
                        border: 'none',
                        padding: '16px 32px',
                        fontSize: '16px',
                        fontWeight: 600,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        whiteSpace: 'nowrap'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        Try It Now!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
