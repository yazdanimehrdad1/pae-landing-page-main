import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const concepts = [
  {
    title: "Understanding Power Systems",
    description: `Power systems engineering is a complex field that requires deep understanding of electrical principles, 
    system dynamics, and advanced control theory. Modern power grids are evolving into smart, 
    interconnected networks that can adapt to changing demands and integrate renewable energy sources.`,
    keyPoints: [
      "Power flow analysis and optimization",
      "Voltage and frequency control",
      "Grid stability and protection",
      "Renewable energy integration",
      "Smart grid technologies"
    ],
    image: "/engineering-concepts/engineering-concept.jpg"
  },
  {
    title: "Grid Integration Solutions",
    description: `Grid integration is crucial for connecting renewable energy sources to existing power infrastructure. 
    This involves sophisticated control systems, protection schemes, and communication protocols to ensure 
    reliable and efficient power delivery.`,
    keyPoints: [
      "Renewable resource integration",
      "Grid stability analysis",
      "Protection coordination",
      "Power quality management",
      "SCADA systems implementation"
    ],
    image: "/engineering-concepts/engineering-concept-2.jpg"
  },
  {
    title: "Energy Storage Systems",
    description: `Energy storage systems are becoming increasingly important in modern power grids. They provide 
    flexibility, stability, and reliability while enabling greater integration of renewable energy sources.`,
    keyPoints: [
      "Battery storage solutions",
      "System sizing and optimization",
      "Charge/discharge control",
      "Thermal management",
      "Performance monitoring"
    ],
    image: "/engineering-concepts/engineering-concept-3.jpg"
  }
];

const EngineeringConcept = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + concepts.length) % concepts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % concepts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 mt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Navigation Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slides Container */}
        <div className="relative min-h-[500px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative min-h-[500px] overflow-hidden">
              {concepts.map((concept, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 absolute inset-0 h-full ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                  style={{
                    transform: index === currentSlide ? 'none' : 'translateX(100%)',
                    zIndex: index === currentSlide ? 1 : 0,
                  }}
                >
                  <div className="h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {concept.title}
                    </h2>
                    <div className="prose prose-lg prose-invert max-w-none">
                      <p className="text-blue-100 mb-4 text-base md:text-lg">{concept.description}</p>
                      <p className="text-blue-100 mb-4 text-base md:text-lg">Key aspects include:</p>
                      <ul className="text-blue-100 space-y-2 text-base md:text-lg list-disc pl-5">
                        {concept.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-blue-100">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Images */}
            <div className="relative h-[400px]">
              {concepts.map((concept, index) => (
                <div
                  key={`image-${index}`}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                  style={{
                    transform: index === currentSlide ? 'none' : 'translateX(100%)',
                    zIndex: index === currentSlide ? 1 : 0,
                  }}
                >
                  <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src={concept.image}
                      alt={concept.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {concepts.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringConcept; 