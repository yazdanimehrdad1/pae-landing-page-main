import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Factory, Building2, Lightbulb } from "lucide-react";

const projects = [
  {
    icon: Battery,
    title: "Utility-Scale BESS Integration",
    location: "California, USA",
    description: "Successfully integrated a 100MW/400MWh Battery Energy Storage System into the California grid, providing frequency regulation and peak shaving capabilities.",
    highlights: [
      "Advanced control system implementation",
      "NERC compliance verification",
      "Grid interconnection studies"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Microgrid Development",
    location: "Texas, USA",
    description: "Designed and implemented a resilient microgrid system for a manufacturing facility, enabling seamless islanding and reducing energy costs by 30%.",
    highlights: [
      "Renewable integration",
      "Load management system",
      "Black start capability"
    ]
  },
  {
    icon: Building2,
    title: "Campus Energy Management",
    location: "Massachusetts, USA",
    description: "Developed a comprehensive energy management system for a university campus, integrating renewable sources and optimizing energy distribution.",
    highlights: [
      "Smart grid implementation",
      "Energy monitoring system",
      "Demand response integration"
    ]
  },
  {
    icon: Lightbulb,
    title: "Smart City Grid Modernization",
    location: "Florida, USA",
    description: "Led the grid modernization initiative for a smart city project, implementing advanced metering infrastructure and automated distribution systems.",
    highlights: [
      "Distribution automation",
      "Advanced metering infrastructure",
      "Renewable integration"
    ]
  }
];

const SelectedProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Selected
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful implementations that showcase our expertise 
            in power automation and energy management solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-green-100">
                    <project.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-green-600" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects; 