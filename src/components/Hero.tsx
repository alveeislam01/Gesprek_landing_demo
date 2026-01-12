import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #a5caff 0%, #ffffff 100%)',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                }}>

                    {/* Left Content */}
                    <div style={{ maxWidth: '600px' }}>
                        <h1 style={{
                            fontSize: '64px',
                            fontWeight: 700,
                            color: '#050505',
                            lineHeight: '1.1',
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                            fontFamily: '"Inter", sans-serif'
                        }}>
                            AI Phone Call Agents Built for High Volume Customer Conversations
                        </h1>

                        <p style={{
                            fontSize: '20px',
                            color: '#4B5563',
                            lineHeight: '1.6',
                            marginBottom: '40px',
                            maxWidth: '540px'
                        }}>
                            Seamlessly automate customer conversations with multilingual, human-like AI agents that engage instantly, qualify with precision, and resolve routine conversations at scale.
                        </p>

                        <button style={{
                            backgroundColor: '#111111',
                            color: 'white',
                            border: 'none',
                            padding: '16px 32px',
                            fontSize: '16px',
                            fontWeight: 600,
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Try It Yourself
                        </button>
                    </div>

                    {/* Right Content */}
                    <div style={{
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img
                            src="/src/assets/hero-image.png"
                            alt="Platform Hero Illustration"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                maxHeight: '550px',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))'
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
