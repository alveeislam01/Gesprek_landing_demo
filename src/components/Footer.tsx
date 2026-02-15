import React from 'react';
import { Twitter, Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    const linkStyle: React.CSSProperties = {
        fontSize: '14px',
        color: '#94A3B8',
        textDecoration: 'none',
        transition: 'color 0.2s ease'
    };

    const socialStyle: React.CSSProperties = {
        color: '#94A3B8',
        transition: 'color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: 'rgba(14, 165, 233, 0.05)',
        border: '1px solid rgba(14, 165, 233, 0.1)'
    };

    return (
        <footer style={{
            background: '#0B0D10',
            padding: 'clamp(48px, 8vw, 80px) 0 clamp(24px, 4vw, 40px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 'clamp(32px, 5vw, 60px)',
                    marginBottom: 'clamp(40px, 6vw, 60px)'
                }}>
                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', gridColumn: 'span 1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px' }}>G</span>
                            </div>
                            <span style={{ fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#F5F7FA', letterSpacing: '-0.02em' }}>Gesprek.ai</span>
                        </div>
                        <p style={{ fontSize: 'clamp(13px, 1.8vw, 14px)', color: '#94A3B8', lineHeight: '1.7', maxWidth: '260px' }}>
                            Human-like AI phone agents that handle calls, qualify leads, and schedule appointments 24/7.
                        </p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <a href="#" style={socialStyle} aria-label="Twitter"
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)'}
                            >
                                <Twitter size={18} />
                            </a>
                            <a href="#" style={socialStyle} aria-label="LinkedIn"
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)'}
                            >
                                <Linkedin size={18} />
                            </a>
                            <a href="#" style={socialStyle} aria-label="GitHub"
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)'}
                            >
                                <Github size={18} />
                            </a>
                            <a href="#" style={socialStyle} aria-label="Website"
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)'}
                            >
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#0EA5E9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={linkStyle}>Features</a></li>
                            <li><a href="#integration" style={linkStyle}>Integrations</a></li>
                            <li><a href="#" style={linkStyle}>Pricing</a></li>
                            <li><a href="#" style={linkStyle}>Changelog</a></li>
                            <li><a href="#" style={linkStyle}>Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#0EA5E9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={linkStyle}>About</a></li>
                            <li><a href="#" style={linkStyle}>Blog</a></li>
                            <li><a href="#" style={linkStyle}>Careers</a></li>
                            <li><a href="#" style={linkStyle}>Customers</a></li>
                            <li><a href="#" style={linkStyle}>Brand</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#0EA5E9', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
                            <li><a href="#" style={linkStyle}>Terms of Service</a></li>
                            <li><a href="#" style={linkStyle}>Security</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '28px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    flexWrap: 'wrap',
                    gap: '16px'
                }} className="footer-bottom">
                    <p style={{ fontSize: 'clamp(12px, 1.5vw, 13px)', color: '#94A3B8', margin: 0 }}>
                        © {new Date().getFullYear()} Gesprek.ai Inc. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <span style={{
                            fontSize: 'clamp(12px, 1.5vw, 13px)',
                            color: '#64748B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></span>
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .container > div:first-child {
                        text-align: center;
                        justify-items: center;
                    }
                    .container > div:first-child > div:first-child { /* Brand column */
                        align-items: center;
                        margin-bottom: 24px;
                        grid-column: span 2; /* Make brand span full width if using 2 columns */
                    }
                    /* Ensure grid lines up for mobile links */
                    .container > div:first-child { /* Main grid */
                        grid-template-columns: 1fr;
                        gap: 40px !important;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 20px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
