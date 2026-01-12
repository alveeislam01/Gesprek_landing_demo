import React from 'react';
import { Twitter, Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#F9FAFB', padding: '80px 0 40px', borderTop: '1px solid #E5E7EB' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    marginBottom: '64px'
                }}>
                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '24px', height: '24px', background: '#050505', borderRadius: '50%' }}></div>
                            <span style={{ fontWeight: 700, fontSize: '18px', color: '#111827', letterSpacing: '-0.02em' }}>Gesprek.ai</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                            Human-like AI phone agents that handle calls, qualify leads, and schedule appointments 24/7.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="#" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="#" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} aria-label="Website">
                                <Globe size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Features</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Integrations</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Pricing</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Changelog</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>About</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Careers</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Customers</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Brand</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Privacy Policy</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Terms of Service</a></li>
                            <li><a href="#" style={{ fontSize: '14px', color: '#4B5563', textDecoration: 'none' }}>Security</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '32px',
                    borderTop: '1px solid #E5E7EB',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
                        © {new Date().getFullYear()} Gesprek.ai Inc. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <span style={{ fontSize: '14px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></span>
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
