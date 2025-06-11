import { ChevronDown } from 'lucide-react';

const TransitionSection = () => {
  return (
    <div className="relative h-32 bg-gradient-to-b from-green-800 to-white/0 -mt-20 -mb-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default TransitionSection; 