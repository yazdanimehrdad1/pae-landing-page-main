import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cpu, Globe, Lightbulb, Settings, Zap, Network } from "lucide-react";
import { Link } from "react-router-dom";

export const services = [
  {
    icon: Zap,
    title: "Grid Integration Services",
    description: "Navigating the complexities of modern grid interconnection requires deep technical insight and practical experience. We provide specialized engineering services to ensure your generation assets, especially renewables and energy storage, are integrated seamlessly, reliably, and compliantly into the broader electrical network.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Battery,
    title: "Energy Storage Systems",
    description: "Battery Energy Storage Systems (BESS) are pivotal for modernizing the grid, enhancing renewable energy utilization, and providing essential ancillary services. I offer end-to-end engineering solutions for BESS, ensuring optimal design, intelligent control, and maximum value generation for your projects.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Network,
    title: "Smart Grid Modernization",
    description: "The smart grid represents a fundamental paradigm shift in power system management, leveraging digital technologies for two-way communication, real-time monitoring, and automated control. I provide the expertise to transform your grid into a proactive, self-healing, and intelligent network.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Microgrid Development",
    description: "Microgrids are sophisticated, localized power systems designed for enhanced resilience and energy independence, capable of operating connected to the main grid or autonomously during disturbances. I engineer robust microgrid solutions tailored to your critical needs.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "System Protection & Control",
    description: "Comprehensive energy audits and optimization strategies to maximize efficiency and reduce operational costs.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Settings,
    title: "Automation & Control & Visibility",
    description: "Advanced algorithms and machine learning solutions for optimal energy dispatch and resource allocation.",
    color: "from-teal-500 to-green-500"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Engineering
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive distributed energy resource solutions designed to transform 
            how energy is generated, stored, and consumed in the modern world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block transform transition-all duration-300 hover:scale-105"
            >
              <Card 
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:shadow-blue-500/10 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-left leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
