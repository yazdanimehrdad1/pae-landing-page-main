import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className = "", showText = false, textSize = "md" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/favicon.png" alt="Power Automation Engineering Logo" className="w-12 h-12" />
      {showText && (
        <span className={`ml-2 font-bold text-gray-900 text-${textSize}`}>Power Automation Engineering</span>
      )}
    </div>
  );
};

export default Logo;
