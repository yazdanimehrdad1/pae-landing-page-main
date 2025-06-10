import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Shield, Network, Settings, Cpu } from "lucide-react";

const features = [
  {
    icon: Gauge,
    emoji: "📈",
    title: "Feasibility & Optimization",
    description: "Comprehensive techno-economic assessments for optimal BESS sizing and configuration."
  },
  {
    icon: Settings,
    emoji: "🏗️",
    title: "Design & Engineering",
    description: "Detailed electrical design for utility-scale BESS projects, including battery module and PCS integration."
  },
  {
    icon: Cpu,
    emoji: "🧠",
    title: "Intelligent Control",
    description: "Advanced Energy Management Systems configuration and battery scheduling algorithms implementation."
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Protection & Reliability",
    description: "Protection schemes for DC and AC coupled architectures, with comprehensive relay programming."
  },
  {
    icon: Network,
    emoji: "🔌",
    title: "Grid Integration",
    description: "Seamless integration with existing grid infrastructure and compliance with interconnection requirements."
  }
];

interface EnergyStorageProps {
  service: {
    title: string;
    description: string;
    color: string;
    icon: any;
  };
}

const EnergyStorage = ({ service }: EnergyStorageProps) => {
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
        <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-6 text-lg">
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default EnergyStorage; 