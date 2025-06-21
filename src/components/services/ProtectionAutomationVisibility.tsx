import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Cpu, Gauge, Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ComponentType } from "react";

const features = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Protection System Design and Commissioning",
    description: `We deliver complete protection system engineering using SEL-700G, SEL-411L, 
    SEL-487E, SEL-651R, SEL-751, SEL-351, and SEL-351S. Our team ensures fast, selective fault 
    clearing and system coordination, with streamlined relay configuration via QuickSet®.`
  },
  {
    icon: Cpu,
    emoji: "🔧",
    title: "Automation, SCADA, and RTU Integration",
    description: `We deploy automation platforms such as SEL-3555, SEL-3350, SEL-3505, and 
    SEL-2240 Axion to support deterministic control, secure protocol conversion, and remote 
    monitoring. Our systems are designed for scalable SCADA integration and grid-edge control.`
  },
  {
    icon: Gauge,
    emoji: "📊",
    title: "Revenue Metering and Power Quality Monitoring",
    description: `We implement high-precision metering and continuous waveform capture at key 
    interconnection points using SEL-735 meters. These systems support regulatory compliance, 
    PQ analysis, and operational diagnostics.`
  },
  {
    icon: Monitor,
    emoji: "🖥️",
    title: "Custom HMI and Visualization Development",
    description: `We build interactive operator dashboards and process control screens using 
    acSELerator® Diagram Builder SEL-5035 Software. Our HMIs provide real-time visibility, 
    alarm handling, and secure remote control for substations and distributed assets.`
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Distributed Energy Resource (DER) Interconnection Engineering",
    description: `We support safe and standards-compliant DER integration using SEL-651R and 
    SEL-751, including advanced features like IEEE 1547-2018 compliance, islanding detection, 
    and network reconfiguration for feeder automation.`
  }
];

interface ProtectionAutomationVisibilityProps {
  service: {
    title: string;
    description: string;
    color: string;
    icon: ComponentType<{ className?: string }>;
  };
}

const ProtectionAutomationVisibility = ({ service }: ProtectionAutomationVisibilityProps) => {
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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Capabilities</h2>
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

export default ProtectionAutomationVisibility; 