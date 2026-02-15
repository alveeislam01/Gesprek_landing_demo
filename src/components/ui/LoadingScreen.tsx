import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0B0D10',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            color: '#6EF5B2'
        }}>
            <Loader2 size={48} className="animate-spin" />
            <p style={{
                marginTop: '16px',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.05em'
            }}>
                Loading Gesprek...
            </p>
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
