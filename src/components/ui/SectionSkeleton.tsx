import React from 'react';

interface SectionSkeletonProps {
    height?: string;
    className?: string;
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ height = '600px', className = '' }) => {
    return (
        <div
            className={`skeleton-container ${className}`}
            style={{
                width: '100%',
                height,
                backgroundColor: '#0B0D10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div className="skeleton-pulse" style={{
                width: '100%',
                height: '100%',
                opacity: 0.05,
                background: 'linear-gradient(90deg, #0B0D10 25%, #1F2937 50%, #0B0D10 75%)',
                backgroundSize: '200% 100%',
                animation: 'skeleton-loading 1.5s infinite'
            }} />
        </div>
    );
};

export default SectionSkeleton;
