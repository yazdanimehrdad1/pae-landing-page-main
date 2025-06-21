import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const concepts = [
  {
    title: "Understanding Power Systems",
    description: `Power systems engineering is a complex field that requires deep 
    understanding of electrical principles, system dynamics, and advanced control 
    theory. Modern power grids are evolving into smart, interconnected networks 
    that can adapt to changing demands and integrate renewable energy sources.`,
    keyPoints: [
      "Power flow analysis and optimization",
      "Voltage and frequency control",
      "Grid stability and protection",
      "Renewable energy integration",
      "Smart grid technologies"
    ],
    image: "/engineering-concepts/engineering-concept-1.jpg"
  },
  {
    title: "Grid Integration Solutions",
    description: `Grid integration is crucial for connecting renewable energy 
    sources to existing power infrastructure. This involves sophisticated control 
    systems, protection schemes, and communication protocols to ensure reliable 
    and efficient power delivery.`,
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
    description: `Energy storage systems are becoming increasingly important in 
    modern power grids. They provide flexibility, stability, and reliability 
    while enabling greater integration of renewable energy sources.`,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % concepts.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % concepts.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + concepts.length) % concepts.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Engineering
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Concepts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fundamental concepts that drive our innovative 
            solutions in power automation and energy systems.
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content */}
            <div className="relative p-8 md:p-12">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {concepts[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  {
                    concepts[currentSlide]
                      .description
                  }
                </p>
                <div className="space-y-2">
                  {concepts[currentSlide].keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400" />
                      <span className="text-gray-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div 
              className="relative h-full min-h-[400px] lg:min-h-full"
              style={{
                backgroundImage: `url(${concepts[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:bg-gradient-to-l"></div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {concepts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringConcept; 