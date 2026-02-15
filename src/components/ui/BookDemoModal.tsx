import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, User, Building2, Mail, Phone, Loader2, Clock } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './Calendar.css';

interface BookDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM"
];

const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
            alert(`Booking confirmed for ${format(selectedDate, 'MMM dd, yyyy')} at ${selectedTime}`);
            setSelectedDate(undefined);
            setSelectedTime(null);
        }, 1500);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)',
                    opacity: isAnimating ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    cursor: 'pointer'
                }}
            />

            {/* Modal Content - Wide Layout */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px', // Wider implementation
                backgroundColor: '#0B0D10',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '0',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                opacity: isAnimating ? 1 : 0,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                maxHeight: '90vh',
                overflowY: 'auto',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                overflow: 'hidden'
            }}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9CA3AF',
                        cursor: 'pointer',
                        zIndex: 20,
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#F5F7FA';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.color = '#9CA3AF';
                    }}
                >
                    <X size={18} />
                </button>

                {/* Left Column: Form Details */}
                <div style={{
                    padding: '24px', // Reduced from 40px
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '100%',
                    overflowY: 'auto'
                }}>
                    <div style={{ marginBottom: '20px' }}> {/* Reduced from 32px */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px', // Reduced from 48px
                            height: '40px', // Reduced from 48px
                            borderRadius: '10px',
                            backgroundColor: 'rgba(110, 245, 178, 0.1)',
                            color: '#6EF5B2',
                            marginBottom: '12px'
                        }}>
                            <CalendarIcon size={20} />
                        </div>
                        <h3 style={{
                            fontSize: '20px', // Reduced from 24px
                            fontWeight: '600',
                            color: '#F5F7FA',
                            marginBottom: '4px'
                        }}>
                            Book a Demo
                        </h3>
                        <p style={{
                            color: '#9CA3AF',
                            fontSize: '14px',
                            lineHeight: '1.4'
                        }}>
                            Schedule a call with our team.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}> {/* Reduced gap 20->16 */}
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <div className="input-wrapper">
                                <User size={16} className="input-icon" />
                                <input required type="text" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <div className="input-wrapper">
                                <Building2 size={16} className="input-icon" />
                                <input required type="text" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Work Email</label>
                            <div className="input-wrapper">
                                <Mail size={16} className="input-icon" />
                                <input required type="email" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <div className="input-wrapper">
                                <Phone size={16} className="input-icon" />
                                <input required type="tel" className="form-input" />
                            </div>
                        </div>

                        {/* Mobile-only Submit (visible if needed) */}
                        <div className="mobile-only-submit" style={{ display: 'none' }}>
                            {/* ... */}
                        </div>
                    </form>
                </div>

                {/* Right Column: Calendar & Time */}
                <div style={{
                    padding: '24px', // Reduced from 32px
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                    maxHeight: '100%'
                }}>
                    <h4 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#F5F7FA',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexShrink: 0
                    }}>
                        <Clock size={16} color="#6EF5B2" />
                        Select Date & Time
                    </h4>

                    {/* Calendar Container */}
                    <div style={{
                        marginBottom: '16px', // Reduced from 24px
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#0B0D10',
                        borderRadius: '16px',
                        padding: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: (selectedDate && selectedTime) ? '0 4px 20px rgba(110, 245, 178, 0.1)' : 'none',
                        flexShrink: 0
                    }}>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            showOutsideDays
                            disabled={{ before: new Date() }} // Disable past dates
                            style={{ margin: 0, fontSize: '0.9em' }} // Compact calendar
                        />
                    </div>

                    {/* Time Slots - Scrollable Area */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        flex: 1,
                        minHeight: 0, // Critical for nested flex scrolling
                        overflowY: 'auto',
                        paddingRight: '6px',
                        marginBottom: '16px'
                    }}>
                        <label className="form-label" style={{ position: 'sticky', top: 0, background: '#0B0D10', zIndex: 5, paddingBottom: '4px' }}>
                            Available Slots
                        </label>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', // Reduced min width
                            gap: '6px', // Reduced gap
                            paddingBottom: '4px'
                        }}>
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    style={{
                                        padding: '6px', // Reduced padding
                                        borderRadius: '8px',
                                        backgroundColor: selectedTime === time ? '#6EF5B2' : 'rgba(255, 255, 255, 0.05)',
                                        color: selectedTime === time ? '#0B0D10' : '#E6E8EB',
                                        border: selectedTime === time ? '1px solid #6EF5B2' : '1px solid rgba(255, 255, 255, 0.1)',
                                        fontSize: '12px', // Smaller font
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button (Desktop/Main) - Fixed at bottom */}
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !selectedDate || !selectedTime}
                        style={{
                            width: '100%',
                            padding: '12px', // Reduced from 16px
                            backgroundColor: (selectedDate && selectedTime) ? '#6EF5B2' : 'rgba(255, 255, 255, 0.05)',
                            color: (selectedDate && selectedTime) ? '#0B0D10' : '#6B7280',
                            border: (selectedDate && selectedTime) ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            fontSize: '15px',
                            fontWeight: '600',
                            cursor: (isSubmitting || !selectedDate || !selectedTime) ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            opacity: (isSubmitting || !selectedDate || !selectedTime) ? 0.7 : 1,
                            transition: 'all 0.2s',
                            boxShadow: (selectedDate && selectedTime) ? '0 4px 20px rgba(110, 245, 178, 0.2)' : 'none',
                            flexShrink: 0
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Booking...
                            </>
                        ) : (
                            (!selectedDate || !selectedTime) ? 'Select Date & Time to Confirm' : 'Confirm Booking'
                        )}
                    </button>

                    {(!selectedDate || !selectedTime) && (
                        <p style={{
                            textAlign: 'center',
                            fontSize: '12px',
                            color: '#9CA3AF',
                            marginTop: '8px',
                            flexShrink: 0
                        }}>
                            Please select a date and time to continue
                        </p>
                    )}
                </div>

                <style>{`
                    .form-group {
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                    }
                    .form-label {
                        font-size: 13px;
                        font-weight: 500;
                        color: #E6E8EB;
                        margin-left: 4px;
                        letter-spacing: 0.02em;
                    }
                    .input-wrapper {
                        position: relative;
                        display: flex;
                        align-items: center;
                    }
                    .input-icon {
                        position: absolute;
                        left: 14px;
                        color: #6B7280;
                        pointer-events: none;
                        transition: color 0.2s;
                        z-index: 10;
                    }
                    .form-input {
                        width: 100%;
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08); /* More subtle border */
                        border-radius: 10px;
                        padding: 12px 12px 12px 40px; /* Reduced padding */
                        color: #F5F7FA;
                        font-size: 14px;
                        font-family: inherit;
                        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                        outline: none;
                    }

                    .form-input:hover {
                         background: rgba(255, 255, 255, 0.05);
                         border-color: rgba(255, 255, 255, 0.15);
                    }

                    .form-input:focus {
                        border-color: #6EF5B2;
                        background: rgba(110, 245, 178, 0.03);
                        box-shadow: 0 0 0 1px #6EF5B2, 0 0 0 4px rgba(110, 245, 178, 0.1);
                    }

                    /* Focus within wrapper to color icon */
                    .input-wrapper:focus-within .input-icon {
                        color: #6EF5B2;
                    }

                    /* Scrollbar for times */
                    div::-webkit-scrollbar {
                        width: 4px;
                    }
                    div::-webkit-scrollbar-track {
                        background: rgba(255,255,255,0.02);
                        border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb {
                        background: rgba(255,255,255,0.1);
                        border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                        background: rgba(255,255,255,0.2);
                    }

                    @media (max-width: 768px) {
                        div[style*="gridTemplateColumns"] {
                            grid-template-columns: 1fr !important;
                            max-height: 85vh;
                            overflow-y: auto;
                        }
                        div[style*="borderRight"] {
                            border-right: none !important;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default BookDemoModal;
