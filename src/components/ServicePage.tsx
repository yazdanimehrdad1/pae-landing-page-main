import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gauge, Shield, Network, Settings, Cpu } from "lucide-react";
import { services } from './Services';

const serviceFeatures = {
  "grid-integration": {
    title: "Grid Integration",
    features: [
      {
        icon: Gauge,
        emoji: "🔍",
        title: "Studies & Advisory",
        description: "Conducting in-depth system impact studies, facility studies, and feasibility analyses for grid-scale PV, BESS, and microgrid interconnections."
      },
      {
        icon: Shield,
        emoji: "🛡️",
        title: "Protection & Control",
        description: "Sophisticated protection schemes and relay settings for grid-tied DERs, including programming of state-of-the-art protection relays."
      },
      {
        icon: Network,
        emoji: "🌐",
        title: "Microgrid Operations",
        description: "Advanced microgrid interconnection modes including seamless islanding, auto-synchronization, and black start functionality."
      },
      {
        icon: Settings,
        emoji: "📜",
        title: "Compliance & Standards",
        description: "IEEE standards and NERC reliability standards compliance, with comprehensive power system analyses and validation."
      },
      {
        icon: Cpu,
        emoji: "🔗",
        title: "Communication Protocols",
        description: "Integration of critical communication protocols for robust data exchange and seamless control system interoperability."
      }
    ]
  },
  "energy-storage-systems": {
    title: "Energy Storage Systems",
    features: [
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
    ]
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);
  const serviceKey = serviceId as keyof typeof serviceFeatures;
  const features = serviceFeatures[serviceKey]?.features || [];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <Card className="w-full max-w-2xl mx-4">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button 
              variant="outline" 
              className="gap-2 text-white border-white hover:bg-white/10 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicePage; 