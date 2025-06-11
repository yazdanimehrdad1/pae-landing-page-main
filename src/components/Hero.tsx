import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden py-12 mb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-4">
          <h1 className="animate-in slide-in-from-bottom duration-1000 text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-emerald-400 tracking-tight hover:scale-[1.02] transition-transform animate-once">
            Power Automation <span className="block mt-1">Engineering</span>
          </h1>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Powering the Future with
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block mt-1">
              Smart Energy Solutions
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Expert engineering services for distributed energy resources, renewable integration, 
            and next-generation power systems that drive sustainable innovation.
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-12 left-10 animate-pulse">
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-24 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-16 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
