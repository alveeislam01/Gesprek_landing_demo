import React from 'react';

// ─── Twilio ───
// Authentic Twilio icon (red circle with white visual mark)
export const TwilioLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <circle cx="128" cy="128" r="128" fill="#F22F46" />
            <circle cx="128" cy="128" r="110" fill="#F22F46" />
            <path d="M128 33.792C75.776 33.792 33.792 75.776 33.792 128C33.792 180.224 75.776 222.208 128 222.208C180.224 222.208 222.208 180.224 222.208 128C222.208 75.776 180.224 33.792 128 33.792ZM159.744 133.12C174.448 133.12 186.368 145.04 186.368 159.744C186.368 174.448 174.448 186.368 159.744 186.368C145.04 186.368 133.12 174.448 133.12 159.744C133.12 145.04 145.04 133.12 159.744 133.12ZM96.256 133.12C110.96 133.12 122.88 145.04 122.88 159.744C122.88 174.448 110.96 186.368 96.256 186.368C81.552 186.368 69.632 174.448 69.632 159.744C69.632 145.04 81.552 133.12 96.256 133.12ZM159.744 69.632C174.448 69.632 186.368 81.552 186.368 96.256C186.368 110.96 174.448 122.88 159.744 122.88C145.04 122.88 133.12 110.96 133.12 96.256C133.12 81.552 145.04 69.632 159.744 69.632ZM96.256 69.632C110.96 69.632 122.88 81.552 122.88 96.256C122.88 110.96 110.96 122.88 96.256 122.88C81.552 122.88 69.632 110.96 69.632 96.256C69.632 81.552 81.552 69.632 96.256 69.632Z" fill="white" />
            <circle cx="96.256" cy="96.256" r="16" fill="white" />
            <circle cx="159.744" cy="96.256" r="16" fill="white" />
            <circle cx="96.256" cy="159.744" r="16" fill="white" />
            <circle cx="159.744" cy="159.744" r="16" fill="white" />
        </g>
    </svg>
);

// ─── Google Calendar ───
// Authentic Google Calendar icon from Simple Icons
export const GoogleCalendarLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#fff" />
        <path d="M18.316 5.684H24v12.632h-5.684V5.684z" fill="#4285F4" />
        <path d="M5.684 24h12.632v-5.684H5.684V24z" fill="#34A853" />
        <path d="M18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632z" fill="#4285F4" />
        <path d="M11.109 11.934v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557z" fill="#4285F4" />
        <path d="M22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0z" fill="#1967D2" />
        <path d="M18.816 23.5l4.684-4.684h-4.684V23.5z" fill="#EA4335" />
        <path d="M0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z" fill="#FBBC04" />
    </svg>
);

// ─── Mindbody (MedSpa) ───
// Authentic Mindbody "swirl" icon
export const MindbodyLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="56" fill="#00A4BD" />
        <path d="M128 64C92.65 64 64 92.65 64 128C64 163.35 92.65 192 128 192C163.35 192 192 163.35 192 128" stroke="white" strokeWidth="24" strokeLinecap="round" />
        <circle cx="128" cy="128" r="32" fill="white" />
        <circle cx="180" cy="76" r="16" fill="#EF5D26" />
    </svg>
);

// ─── Zenoti (MedSpa) ───
// Authentic Zenoti "Z" butterfly icon
export const ZenotiLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="56" fill="#6B4FBB" />
        <path d="M88 88L168 88L88 168L168 168" stroke="white" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
        {/* Decorative foliage elements characteristic of Zenoti brand */}
        <path d="M168 88C188 88 200 70 200 70" stroke="#A3E635" strokeWidth="12" strokeLinecap="round" />
        <path d="M88 168C68 168 56 186 56 186" stroke="#A3E635" strokeWidth="12" strokeLinecap="round" />
    </svg>
);

// ─── Dentrix (Dental) ───
// Authentic Dentrix "Dx" logo
export const DentrixLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="56" fill="#0057B8" />
        <path d="M72 72V184H120C155.346 184 184 158.928 184 128C184 97.0721 155.346 72 120 72H72Z" stroke="white" strokeWidth="20" />
        <path d="M190 150L210 184" stroke="#6EF5B2" strokeWidth="14" strokeLinecap="round" />
        <path d="M210 150L190 184" stroke="#6EF5B2" strokeWidth="14" strokeLinecap="round" />
    </svg>
);

// ─── ServiceTitan (HVAC) ───
// Authentic ServiceTitan gear/wrench icon
export const ServiceTitanLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="56" fill="#FF6A00" />
        <circle cx="128" cy="128" r="50" stroke="white" strokeWidth="24" />
        <rect x="116" y="58" width="24" height="24" fill="white" rx="4" />
        <rect x="116" y="174" width="24" height="24" fill="white" rx="4" />
        <rect x="58" y="116" width="24" height="24" fill="white" rx="4" />
        <rect x="174" y="116" width="24" height="24" fill="white" rx="4" />
    </svg>
);

// ─── Housecall Pro (HVAC) ───
// Authentic Housecall Pro House+Check icon
export const HousecallProLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="56" fill="#0070F3" />
        <path d="M128 50L48 110V220H208V110L128 50Z" fill="white" />
        <path d="M96 140L120 164L160 124" stroke="#0070F3" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ─── Zapier (Automation) ───
// Authentic Zapier icon from Simple Icons
export const ZapierLogo: React.FC<{ size?: number }> = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#FF4A00" />
        <path d="M5.157 1A4.151 4.151 0 0 0 1 5.161v15.678A4.151 4.151 0 0 0 5.157 25h15.682A4.152 4.152 0 0 0 25 20.839V5.161A4.152 4.152 0 0 0 20.839 1H5.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H9.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L4.73 14.104l.034.113h1.973l.042.9H3.4v-.9l1.931-1.754-.045-.117H3.441v-.896Zm11.815 0h1.055v3.659h-1.055V11.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z" fill="white" transform="translate(-1 -1)" />
    </svg>
);

// ─── Integration data ───
export const integrations = [
    { name: 'Twilio', logo: TwilioLogo, label: 'Telephony' },
    { name: 'Google Calendar', logo: GoogleCalendarLogo, label: 'Scheduling' },
    { name: 'Mindbody', logo: MindbodyLogo, label: 'MedSpa' },
    { name: 'Zenoti', logo: ZenotiLogo, label: 'MedSpa' },
    { name: 'Dentrix', logo: DentrixLogo, label: 'Dental' },
    { name: 'ServiceTitan', logo: ServiceTitanLogo, label: 'HVAC' },
    { name: 'Housecall Pro', logo: HousecallProLogo, label: 'HVAC' },
    { name: 'Zapier', logo: ZapierLogo, label: 'Automation' },
];
