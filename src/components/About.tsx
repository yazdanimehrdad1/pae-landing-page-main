
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase, Target } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: "200+", color: "text-blue-600" },
  { icon: Users, label: "Expert Engineers", value: "25+", color: "text-green-600" },
  { icon: Award, label: "Years of Experience", value: "15+", color: "text-purple-600" },
  { icon: Target, label: "Client Success Rate", value: "98%", color: "text-orange-600" }
];

const expertise = [
  "Renewable Energy Integration",
  "Power Systems Analysis",
  "Grid Modernization",
  "Energy Storage",
  "Smart Grid Technologies",
  "Microgrid Design",
  "Load Forecasting",
  "Demand Response",
  "Power Electronics",
  "System Optimization"
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Innovation in
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                Distributed Energy
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert engineers combines decades of experience in power systems 
              with cutting-edge innovation to deliver solutions that shape the future of energy. 
              We specialize in distributed energy resources, helping organizations transition 
              to sustainable, efficient, and resilient power systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 hover:from-blue-200 hover:to-green-200 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To accelerate the global transition to sustainable energy through innovative 
                distributed energy resource solutions that are reliable, efficient, and accessible 
                to communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
