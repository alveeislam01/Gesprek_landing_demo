import { useEffect, useRef, useState } from 'react';

const Stats = () => {
    const stats = [
        { value: '90%', label: 'Call Automation', color: '#4ECDC4' },
        { value: '90%', label: 'Reduced Manpower', color: '#45B7D1' },
        { value: '50%', label: 'Fewer Errors', color: '#F38181' },
        { value: '60%', label: 'Cost Reduction', color: '#F7DC6F' },
        { value: '60%', label: 'More Qualified Leads', color: '#BB8FCE' },
        { value: '10X', label: 'Higher Conversions', color: '#6EF7B3' },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                background: '#0B0D10',
                padding: '120px 24px',
                overflow: 'hidden',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
            }}
        >
            {/* Subtle Dotted Grid Background */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.05,
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: 700,
                        color: '#F5F7FA',
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                        lineHeight: 1.15,
                        fontFamily: '"Inter", sans-serif',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Fast-Track Business Success<br />with AI Phone Calls
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 1.5vw, 18px)',
                        color: 'rgba(255, 255, 255, 0.55)',
                        fontWeight: 400,
                        maxWidth: '560px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        Proven results that drive real business impact — scalable, efficient, and cost-effective.
                    </p>
                </div>

                {/* Stats Strip */}
                <style>{`
                    .stats-strip {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        border: 1px solid rgba(255, 255, 255, 0.06);
                        border-radius: 20px;
                        background: linear-gradient(145deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.008) 100%);
                        backdrop-filter: blur(8px);
                        overflow: hidden;
                    }

                    @media (max-width: 1024px) {
                        .stats-strip { grid-template-columns: repeat(3, 1fr) !important; }
                    }
                    @media (max-width: 640px) {
                        .stats-strip { 
                            grid-template-columns: 1fr !important;
                            border-radius: 16px; 
                        }
                    }

                    .stat-item {
                        padding: 36px 20px;
                        text-align: center;
                        position: relative;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }

                    .stat-item.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    /* Vertical dividers */
                    .stat-item:not(:last-child)::after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 20%;
                        height: 60%;
                        width: 1px;
                        background: rgba(255, 255, 255, 0.06);
                    }

                    /* Remove right border on last item of each row on smaller screens */
                    @media (max-width: 1024px) {
                        .stat-item:nth-child(3n)::after { display: none; }
                    }
                    @media (max-width: 640px) {
                        .stat-item::after { display: none; } /* Remove all vertical dividers on mobile */
                        .stat-item { border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
                        .stat-item:last-child { border-bottom: none; }
                    }

                    .stat-item:hover {
                        background: rgba(255, 255, 255, 0.03);
                    }

                    .stat-item:hover .stat-val {
                        transform: scale(1.05);
                    }

                    .stat-val {
                        font-size: clamp(32px, 3vw, 40px);
                        font-weight: 800;
                        color: #FFFFFF;
                        letter-spacing: -0.04em;
                        line-height: 1;
                        margin-bottom: 8px;
                        font-family: 'Inter', sans-serif;
                        transition: transform 0.3s ease;
                    }

                    .stat-lbl {
                        font-size: 11px;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 0.45);
                        letter-spacing: 0.14em;
                        text-transform: uppercase;
                        line-height: 1.4;
                        font-family: 'Inter', sans-serif;
                    }

                    .stat-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        margin: 0 auto 14px;
                        opacity: 0.7;
                        transition: opacity 0.3s ease, box-shadow 0.3s ease;
                    }

                    .stat-item:hover .stat-dot {
                        opacity: 1;
                    }
                `}</style>

                <div className="stats-strip">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-item ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <div
                                className="stat-dot"
                                style={{
                                    background: stat.color,
                                    boxShadow: `0 0 12px ${stat.color}40`,
                                }}
                            />
                            <div className="stat-val">
                                {stat.value}
                            </div>
                            <div className="stat-lbl">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;