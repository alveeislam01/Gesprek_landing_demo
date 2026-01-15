import React from 'react';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

const ComparisonSection: React.FC = () => {
    const comparisons = [
        {
            id: 1,
            problem: "New leads wait too long, and interest fades fast.",
            solution: "Speed that keeps intent alive.",
            metric: "<30 sec",
            metricLabel: "Response Time"
        },
        {
            id: 2,
            problem: "Early context disappears, and reps start cold.",
            solution: "Better context continuity across touchpoints.",
            metric: "90%",
            metricLabel: "Context Retention"
        },
        {
            id: 3,
            problem: "Follow-ups slip, and deals quietly lose momentum.",
            solution: "Follow-ups happen automatically.",
            metric: "85%",
            metricLabel: "Response Rate"
        },
        {
            id: 4,
            problem: "Volume spikes hit, and pipeline leaks grow.",
            solution: "Pipelines stay steady even in peak demand.",
            metric: "45%",
            metricLabel: "Efficiency Boost"
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px', padding: '0 16px' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 44px)',
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                        marginBottom: '16px',
                        fontFamily: '"Inter", sans-serif'
                    }}>
                        Choosing the Right First Step
                    </h2>
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        color: '#64748B',
                        lineHeight: 1.6,
                        maxWidth: '560px',
                        margin: '0 auto'
                    }}>
                        See the difference between relying solely on human bandwidth versus empowering your team with AI.
                    </p>
                </div>

                {/* Column Headers - Desktop Only */}
                <div className="hide-mobile" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 60px 1fr',
                    gap: '24px',
                    marginBottom: '24px',
                    alignItems: 'center',
                    padding: '0 16px'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
                        borderRadius: '12px',
                        padding: '14px 20px',
                        textAlign: 'center',
                        border: '1px solid #FECACA'
                    }}>
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#DC2626',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}>
                            <AlertCircle size={14} />
                            The Problem
                        </span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                            boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)'
                        }}>
                            <ArrowRight size={18} color="#FFFFFF" />
                        </div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                        borderRadius: '12px',
                        padding: '14px 20px',
                        textAlign: 'center',
                        border: '1px solid #BAE6FD'
                    }}>
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#0369A1',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}>
                            <Sparkles size={14} />
                            AI Solution
                        </span>
                    </div>
                </div>

                {/* Comparison Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px' }}>
                    {comparisons.map((item) => (
                        <div key={item.id}>
                            {/* Desktop Layout */}
                            <div className="hide-mobile" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 60px 1fr',
                                gap: '24px',
                                alignItems: 'stretch'
                            }}>
                                {/* Problem Card */}
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    border: '1px solid #F1F5F9',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: '#FEF2F2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '16px',
                                        flexShrink: 0
                                    }}>
                                        <AlertCircle size={18} color="#EF4444" />
                                    </div>
                                    <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Connector */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: '50%',
                                        width: '2px',
                                        borderLeft: '2px dashed #E2E8F0',
                                        transform: 'translateX(-50%)'
                                    }} />
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: '#FFFFFF',
                                        border: '2px solid #E2E8F0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        zIndex: 1
                                    }}>
                                        <ArrowRight size={14} color="#94A3B8" />
                                    </div>
                                </div>

                                {/* Solution Card */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    border: '1px solid #BAE6FD',
                                    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '16px'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: '15px', color: '#0F172A', fontWeight: 500, lineHeight: 1.5, margin: '0 0 4px 0' }}>
                                            {item.solution}
                                        </p>
                                        <span style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                                            {item.metricLabel}
                                        </span>
                                    </div>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                        borderRadius: '10px',
                                        padding: '10px 16px',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 10px rgba(14, 165, 233, 0.25)'
                                    }}>
                                        <span style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                                            {item.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Layout - Stacked Cards */}
                            <div className="show-mobile" style={{
                                display: 'none',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                {/* Problem */}
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '14px',
                                    padding: '16px',
                                    border: '1px solid #FEE2E2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: '#FEF2F2',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <AlertCircle size={16} color="#EF4444" />
                                    </div>
                                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.4, margin: 0 }}>
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <ArrowRight size={14} color="#FFFFFF" style={{ transform: 'rotate(90deg)' }} />
                                    </div>
                                </div>

                                {/* Solution */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
                                    borderRadius: '14px',
                                    padding: '16px',
                                    border: '1px solid #BAE6FD',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '12px'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: '14px', color: '#0F172A', fontWeight: 500, lineHeight: 1.4, margin: '0 0 2px 0' }}>
                                            {item.solution}
                                        </p>
                                        <span style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {item.metricLabel}
                                        </span>
                                    </div>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        flexShrink: 0
                                    }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                                            {item.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'center', marginTop: '56px', padding: '0 16px' }}>
                    <button style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'clamp(14px, 2vw, 16px) clamp(24px, 4vw, 32px)',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(14, 165, 233, 0.35)',
                        transition: 'all 0.2s ease',
                        gap: '8px'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 28px rgba(14, 165, 233, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(14, 165, 233, 0.35)';
                        }}
                    >
                        Start Automating Now
                        <ArrowRight size={18} />
                    </button>
                    <p style={{
                        marginTop: '16px',
                        fontSize: '13px',
                        color: '#94A3B8'
                    }}>
                        No credit card required · Free 14-day trial
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
