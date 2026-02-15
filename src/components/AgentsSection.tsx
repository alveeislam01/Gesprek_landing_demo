import React, { useState, useEffect, useRef } from 'react';
import { Play, Stethoscope, Thermometer, ConciergeBell, PhoneIncoming, UserCheck, Calendar, MessageSquare, ClipboardCheck, Settings, Truck, Utensils, Clock, ArrowRight } from 'lucide-react';

const AgentsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Healthcare');
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const categories = ['Healthcare', 'HVAC', 'Hospitality'];

    const agents = {
        'Healthcare': {
            title: 'Healthcare Agent',
            tag: 'Medical Office',
            description: 'Handles patient intake, scheduling, and triage with HIPAA-compliant security.',
            icon: <Stethoscope size={32} style={{ color: '#059669' }} />,
            phone: '+1 (555) 123-4567',
            steps: [
                { icon: <PhoneIncoming size={20} />, title: 'Inbound Call', desc: 'Patient calls to schedule a check-up.' },
                { icon: <UserCheck size={20} />, title: 'Verification', desc: 'AI verifies identity via DOB and phone number.' },
                { icon: <Calendar size={20} />, title: 'Scheduling', desc: 'Checks doctor availability and books slot.' },
                { icon: <ClipboardCheck size={20} />, title: 'EHR Sync', desc: 'Updates patient record in Epic/Cerner.' },
                { icon: <MessageSquare size={20} />, title: 'Confirmation', desc: 'Sends SMS confirmation & call summary.' }
            ]
        },
        'HVAC': {
            title: 'HVAC Support Agent',
            tag: 'Field Services',
            description: 'Qualifies leads, schedules emergency repairs, and dispatches technicians.',
            icon: <Thermometer size={32} style={{ color: '#059669' }} />,
            phone: '+1 (555) 987-6543',
            steps: [
                { icon: <PhoneIncoming size={20} />, title: 'Inbound Call', desc: 'Customer reports AC not cooling.' },
                { icon: <Settings size={20} />, title: 'Diagnostics', desc: 'AI asks about unit age and specific issues.' },
                { icon: <Calendar size={20} />, title: 'Scheduling', desc: 'Finds nearest available technician slot.' },
                { icon: <Truck size={20} />, title: 'Dispatch', desc: 'Alerts crew via ServiceTitan integration.' },
                { icon: <MessageSquare size={20} />, title: 'Wrap Up', desc: 'Sends arrival window and technician bio.' }
            ]
        },
        'Hospitality': {
            title: 'Hospitality Concierge',
            tag: 'Guest Services',
            description: 'Elevates guest experience by handling room service and concierge requests.',
            icon: <ConciergeBell size={32} style={{ color: '#059669' }} />,
            phone: '+1 (555) 456-7890',
            steps: [
                { icon: <PhoneIncoming size={20} />, title: 'Guest Call', desc: 'Guest calls from Room 305.' },
                { icon: <UserCheck size={20} />, title: 'Personalization', desc: 'AI greets guest by name.' },
                { icon: <Utensils size={20} />, title: 'Service Order', desc: 'Takes order for club sandwich and fries.' },
                { icon: <Clock size={20} />, title: 'Coordination', desc: 'Creates ticket for kitchen with timing.' },
                { icon: <MessageSquare size={20} />, title: 'Confirmation', desc: 'Confirms 25-minute delivery time.' }
            ]
        }
    };

    const currentAgent = agents[activeTab as keyof typeof agents];

    // Auto-rotation logic
    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(() => {
                setActiveTab(prev => {
                    const currentIndex = categories.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % categories.length;
                    return categories[nextIndex];
                });
            }, 8000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, activeTab]);

    const handleTabClick = (category: string) => {
        setActiveTab(category);
    };

    return (
        <section
            id="solution"
            style={{
                backgroundColor: '#0B0D10',
                padding: '80px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                fontFamily: '"Outfit", sans-serif',
                position: 'relative',
                minHeight: '800px',
                overflow: 'hidden'
            }}>
            {/* Dot Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container agents-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

                <div className="agents-content-wrapper" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 0.4fr) 1.5fr',
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    {/* Left Column: Title & Tabs */}
                    <div className="agents-left-column" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div className="agents-header-section">
                            <div style={{
                                display: 'inline-block',
                                padding: '6px 12px',
                                backgroundColor: 'rgba(110, 245, 178, 0.1)',
                                border: '1px solid rgba(110, 245, 178, 0.2)',
                                borderRadius: '999px',
                                color: '#6EF5B2',
                                fontSize: '12px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                marginBottom: '16px'
                            }}>
                                Workflow Demo
                            </div>
                            <h2 className="agents-title" style={{
                                fontFamily: '"Outfit", sans-serif',
                                fontSize: '40px',
                                fontWeight: '600',
                                marginBottom: '16px',
                                color: '#F5F7FA',
                                letterSpacing: '-0.03em',
                                lineHeight: '1.1'
                            }}>
                                AI That <span className="title-break"><br /></span>
                                <span style={{ color: '#9CA3AF' }}>Adapt</span>
                            </h2>
                            <p className="agents-description" style={{
                                color: '#9CA3AF',
                                fontSize: '16px',
                                lineHeight: '1.5',
                                maxWidth: '300px'
                            }}>
                                Select an industry to see how our agents handle complex workflows.
                            </p>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="agents-tabs-container" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleTabClick(category)}
                                    className="agents-tab-button"
                                    style={{
                                        width: '100%',
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        backgroundColor: activeTab === category ? 'rgba(110, 245, 178, 0.08)' : 'transparent',
                                        border: activeTab === category ? '1px solid rgba(110, 245, 178, 0.3)' : '1px solid transparent',
                                        color: activeTab === category ? '#6EF5B2' : '#6B7280',
                                        fontSize: '16px',
                                        fontWeight: activeTab === category ? '600' : '500',
                                        textAlign: 'left',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {category}
                                    {activeTab === category && <ArrowRight size={16} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Agent Card */}
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="agent-card-container"
                        style={{
                            borderRadius: '24px',
                            padding: '0',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            backgroundColor: 'rgba(11, 13, 16, 0.7)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'grid',
                            gridTemplateColumns: 'minmax(280px, 0.4fr) 0.6fr',
                            minHeight: '480px',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Internal Left: Agent Persona */}
                        <div className="agent-card-internal-left" style={{
                            padding: '40px',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div className="agent-info-wrapper">
                                <div className="agent-icon-box" style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    backgroundColor: 'rgba(110, 245, 178, 0.1)',
                                    border: '1px solid rgba(110, 245, 178, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#6EF5B2',
                                    boxShadow: '0 0 30px rgba(110, 245, 178, 0.1)',
                                    marginBottom: '32px'
                                }}>
                                    {React.isValidElement(currentAgent.icon) ? React.cloneElement(currentAgent.icon as React.ReactElement<any>, { size: 32 }) : currentAgent.icon}
                                </div>

                                <div className="animate-fade-in-up agent-text-content" key={`${activeTab}-info`}>
                                    <h3 style={{
                                        fontSize: '28px',
                                        fontWeight: '700',
                                        color: '#F9FAFB',
                                        marginBottom: '12px',
                                        lineHeight: '1.2'
                                    }}>
                                        {currentAgent.title}
                                    </h3>
                                    <div className="agent-tags" style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#9CA3AF',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}>{currentAgent.tag}</span>
                                        <span style={{
                                            fontSize: '12px',
                                            color: '#6EF5B2',
                                            backgroundColor: 'rgba(110, 245, 178, 0.08)',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(110, 245, 178, 0.2)'
                                        }}>Voice AI</span>
                                    </div>
                                    <p style={{ color: '#D1D5DB', fontSize: '15px', lineHeight: '1.6' }}>
                                        {currentAgent.description}
                                    </p>
                                </div>
                            </div>

                            <button className="demo-button" style={{
                                marginTop: '32px',
                                padding: '12px 24px',
                                backgroundColor: '#6EF5B2',
                                color: '#0B0D10',
                                border: 'none',
                                borderRadius: '999px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.2s ease',
                                width: '100%'
                            }}>
                                <Play size={16} fill="currentColor" />
                                Listen to Demo
                            </button>
                        </div>

                        {/* Internal Right: Workflow Steps */}
                        <div className="agent-card-internal-right" style={{
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <h4 style={{
                                color: '#6EF5B2',
                                fontSize: '11px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '24px'
                            }}>
                                Live Call Breakdown
                            </h4>

                            <div className="animate-fade-in-up workflow-steps" key={`${activeTab}-steps`} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}>
                                {currentAgent.steps.map((step, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '16px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        <div style={{
                                            color: '#6EF5B2',
                                            opacity: 0.8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<any>, { size: 18 }) : step.icon}
                                        </div>
                                        <div>
                                            <h5 style={{ color: '#F3F4F6', fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>
                                                {step.title}
                                            </h5>
                                            <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0, lineHeight: '1.3' }}>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <style>{`
          .no-scrollbar::-webkit-scrollbar {
              display: none;
          }
          .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
          
          /* Tablet Styles */
          @media (max-width: 1024px) {
            .agents-content-wrapper {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
            }
            .agent-card-container {
                grid-template-columns: 1fr !important;
                min-height: auto !important;
            }
            .agent-card-internal-left {
                border-right: none !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
            }
          }
          
          /* Mobile Styles */
          @media (max-width: 768px) {
            /* Container adjustments */
            .agents-container {
                padding: 0 16px !important;
            }
            
            #solution {
                padding: 48px 0 !important;
                min-height: auto !important;
            }
            
            /* Left column - center everything */
            .agents-left-column {
                gap: 24px !important;
            }
            
            .agents-header-section {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .agents-header-section > div:first-child {
                /* Workflow Demo badge */
                margin-bottom: 12px !important;
            }
            
            .agents-title {
                font-size: 32px !important;
                text-align: center;
                margin-bottom: 12px !important;
            }
            
            .agents-title .title-break {
                display: none;
            }
            
            .agents-description {
                text-align: center;
                margin: 0 auto;
                max-width: 100% !important;
                padding: 0 16px;
            }
            
            /* Horizontal scrolling tabs */
            .agents-tabs-container {
                flex-direction: row !important;
                overflow-x: auto;
                gap: 8px !important;
                padding-bottom: 4px;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
                margin-top: 8px !important;
                justify-content: center !important;
            }
            
            .agents-tabs-container::-webkit-scrollbar {
                display: none;
            }
            
            .agents-tab-button {
                min-width: 120px !important;
                width: auto !important;
                flex-shrink: 0;
                white-space: nowrap;
                padding: 12px 20px !important;
                font-size: 14px !important;
                justify-content: center !important;
            }
            
            .agents-tab-button svg {
                display: none;
            }
            
            /* Agent Card Container */
            .agent-card-container {
                border: 1px solid rgba(110, 245, 178, 0.2) !important;
                box-shadow: 0 10px 40px -10px rgba(110, 245, 178, 0.15) !important;
                width: 100% !important;
                max-width: 100% !important;
            }
            
            /* Agent Card Left Section - Center all content */
            .agent-card-internal-left {
                padding: 32px 24px !important;
                align-items: center !important;
                text-align: center !important;
            }
            
            .agent-info-wrapper {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                width: 100% !important;
            }
            
            .agent-icon-box {
                margin-left: auto !important;
                margin-right: auto !important;
                margin-bottom: 24px !important;
            }
            
            .agent-text-content {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                width: 100% !important;
            }
            
            .agent-text-content h3 {
                text-align: center !important;
                font-size: 24px !important;
            }
            
            .agent-tags {
                justify-content: center !important;
                width: 100% !important;
            }
            
            .agent-text-content p {
                text-align: center !important;
            }
            
            .demo-button {
                margin-top: 24px !important;
            }
            
            /* Agent Card Right Section */
            .agent-card-internal-right {
                padding: 32px 24px !important;
            }
            
            .agent-card-internal-right h4 {
                text-align: center !important;
                margin-bottom: 20px !important;
            }
            
            /* Workflow steps adjustments */
            .workflow-steps {
                gap: 12px !important;
            }
            
            .workflow-steps > div {
                padding: 14px !important;
                gap: 12px !important;
            }
            
            .workflow-steps h5 {
                font-size: 13px !important;
            }
            
            .workflow-steps p {
                font-size: 12px !important;
            }
          }
          
          /* Small mobile devices */
          @media (max-width: 480px) {
            .agents-title {
                font-size: 28px !important;
            }
            
            .agent-card-internal-left,
            .agent-card-internal-right {
                padding: 24px 20px !important;
            }
          }
        `}</style>
        </section>
    );
};

export default AgentsSection;