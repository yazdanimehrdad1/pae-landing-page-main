import { Zap } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = () => {
  return (
    <div className="w-12 h-12"> {/* Adjust size as needed */}
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="background_grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007bff" /> {/* Blue */}
            <stop offset="50%" stopColor="#28a745" /> {/* Green */}
            <stop offset="100%" stopColor="#ffffff" /> {/* White */}
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="160" height="160" fill="url(#background_grad)" stroke="#ffffff" strokeWidth="3" rx="15"/>
        <g stroke="#ffffff" strokeWidth="2" fill="none">
          <line x1="60" y1="30" x2="60" y2="170"/>
          <line x1="100" y1="30" x2="100" y2="170"/>
          <line x1="140" y1="30" x2="140" y2="170"/>
          <line x1="30" y1="60" x2="170" y2="60"/>
          <line x1="30" y1="100" x2="170" y2="100"/>
          <line x1="30" y1="140" x2="170" y2="140"/>
        </g>
        <circle cx="60" cy="60" r="8" fill="#ffffff"/>
        <circle cx="140" cy="60" r="8" fill="#ffffff"/>
        <circle cx="60" cy="140" r="8" fill="#ffffff"/>
        <circle cx="140" cy="140" r="8" fill="#ffffff"/>
        {/* Central Lightning Bolt (Strike Symbol) with White Fill */}
        <g transform="translate(7.5, 5)">
          <path d="M 85 60 L 105 60 L 95 90 L 110 90 L 80 130 L 90 100 L 75 100 Z" fill="#ffffff"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
