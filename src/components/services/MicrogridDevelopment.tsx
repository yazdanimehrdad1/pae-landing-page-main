import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Shield, Network, Settings, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { ComponentType } from "react";

const features = [
  {
    icon: Settings,
    emoji: "🏗️",
    title: "Microgrid Design, Operation & Control",
    description: "Expert conceptual and detailed design of microgrid systems, integrating diverse energy resources such as PV, BESS, and traditional generators for optimal performance and reliability."
  },
  {
    icon: Network,
    emoji: "⚡",
    title: "Advanced Microgrid Functions",
    description: "Specialized engineering for critical microgrid functionalities including black start, seamless islanding, and precise auto-synchronization for enhanced resilience and operational flexibility."
  },
  {
    icon: Cpu,
    emoji: "🎮",
    title: "DER Controller Programming & Protection",
    description: "Development and programming of sophisticated DER controllers to manage dispatch and coordination of various energy resources, with advanced protection schemes for system safety and rapid fault isolation."
  },
  {
    icon: Gauge,
    emoji: "📊",
    title: "Strategic Consulting & Business Case Development",
    description: "Comprehensive consulting services including optimized modeling, conceptual design, procurement strategies, and robust business case development to justify investment and ensure long-term success."
  }
];

interface MicrogridDevelopmentProps {
  service: {
    title: string;
    description: string;
    color: string;
    icon: ComponentType<{ className?: string }>;
  };
}

const MicrogridDevelopment = ({ service }: MicrogridDevelopmentProps) => {
  const Icon = service.icon;

  return (
    <>
      {/* Service Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{service.description}</p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl">{feature.emoji}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Contact us to learn more about our {service.title.toLowerCase()} solutions.
        </p>
        <Link to="/contact">
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-6 text-lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MicrogridDevelopment; 