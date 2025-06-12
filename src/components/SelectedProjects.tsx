import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Factory, Cpu, Monitor } from "lucide-react";

const projects = [
  {
    icon: Factory,
    title: "Advanced Microgrid Commissioning",
    location: "",
    description: "Designing and commissioning an advanced microgrid with seamless grid/island transitions, black start, and full protection coordination.",
    highlights: [
      "Seamless grid/island transitions",
      "Black start capability",
      "Full protection coordination"
    ]
  },
  {
    icon: Cpu,
    title: "MV Switchgear Controls Integration",
    location: "",
    description: "Engineering and integrating MV switchgear controls with custom HMI and automated protection/monitoring.",
    highlights: [
      "Custom HMI development",
      "Automated protection & monitoring",
      "MV switchgear engineering"
    ]
  },
  {
    icon: Battery,
    title: "Relay Programming & Controller Tuning",
    location: "",
    description: "Performing precision relay programming and controller tuning to optimize microgrid performance under dynamic operating modes.",
    highlights: [
      "Precision relay programming",
      "Controller tuning",
      "Dynamic mode optimization"
    ]
  },
  {
    icon: Monitor,
    title: "HMI & System Validation",
    location: "",
    description: "Developing intuitive HMI screens and performing full FAT/SAT to validate system control, alarms, and monitoring for live operation.",
    highlights: [
      "Intuitive HMI screens",
      "Full FAT/SAT execution",
      "Live system validation"
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