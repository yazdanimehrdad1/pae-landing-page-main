import { Zap } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className = "", showText = true, textSize = "md" }: LogoProps) => {
  const textSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="p-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg mr-3">
        <Zap className="h-6 w-6 text-white" />
      </div>
      {showText && (
        <span className={`${textSizeClasses[textSize]} font-bold`}>
          Power Automation Engineering
        </span>
      )}
    </div>
  );
};

export default Logo;
