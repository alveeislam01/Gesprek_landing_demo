import React from 'react';

const Stats: React.FC = () => {
    const stats = [
        { value: '90%', label: 'Inbound/Outbound Call Automation' },
        { value: '90%', label: 'Lower Manpower Requirement' },
        { value: '50%', label: 'Reduction in Errors & Inaccuracies' },
        { value: '60%', label: 'Reduction in Operational Costs' },
        { value: '60%', label: 'Increase in Sales Qualified Leads' },
        { value: '10X', label: 'Jump in Conversions' },
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
            <div className="container" style={{ maxWidth: '1280px' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '48px',
                    letterSpacing: '-0.02em',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Fast-Track Business Success with AI Phone Calls
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{
                            flex: '1',
                            minWidth: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0 40px',
                            borderRight: index !== stats.length - 1 ? '1px solid #E5E7EB' : 'none',
                            position: 'relative'
                        }}>
                            <div style={{
                                fontSize: '64px',
                                fontWeight: 800,
                                color: '#2563EB', // Bright Blue
                                marginBottom: '16px',
                                lineHeight: '1',
                                letterSpacing: '-0.02em'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '16px',
                                color: '#374151', // Grey 700
                                lineHeight: '1.4',
                                textAlign: 'center',
                                fontWeight: 500,
                                maxWidth: '160px'
                            }}>
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
