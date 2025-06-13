import React, { useEffect, useRef } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className = "", showText = false, textSize = "md" }: LogoProps) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add("animate-logo-fade-in");
    }
  }, []);

  return (
    <div
      ref={logoRef}
      className={`flex items-center opacity-0 translate-y-4 ${className}`}
    >
      <img src="/favicon.png" alt="Power Automation Engineering Logo" className="w-12 h-12" />
      {showText && (
        <span className={`ml-2 font-bold text-gray-900 text-${textSize}`}>Power Automation Engineering</span>
      )}
    </div>
  );
};

export default Logo;
