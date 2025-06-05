import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Logo showText={false} className="scale-150" />
          </div>
          <h1 className="animate-in slide-in-from-bottom duration-1000 text-6xl md:text-8xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-emerald-400 tracking-tight hover:scale-[1.02] transition-transform animate-once">
            Power Automation <span className="block mt-2">Engineering</span>
          </h1>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powering the Future with
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block mt-2">
              Smart Energy Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert engineering services for distributed energy resources, renewable integration, 
            and next-generation power systems that drive sustainable innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
