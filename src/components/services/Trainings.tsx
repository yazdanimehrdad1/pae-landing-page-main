import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Monitor, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { ComponentType } from "react";

const deliveryMethods = [
  {
    icon: Users,
    emoji: "🧑‍🏫",
    title: "In-Person Workshops",
    description: "We offer on-site or hosted classroom-style sessions designed to provide immersive, hands-on experience. These workshops are led by senior engineers with deep field and design experience in protection and automation. Participants gain practical skills through real lab simulations, group exercises, and equipment-based learning using SEL relays, RTACs, and HMI development tools. Whether you're commissioning substations, setting relays with acSELerator® QuickSet®, or building logic with acSELerator® RTAC, our workshops are tailored to real project applications. This format is ideal for utility protection crews, EPC engineering teams, operations staff, or grid modernization projects where collaborative learning and direct access to hardware and trainers are critical."
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "Fully Online (Live)",
    description: "Our live online training format delivers real-time, instructor-led sessions through secure platforms like Zoom or Microsoft Teams. These sessions include live software demonstrations, remote access to lab environments, and guided walkthroughs of key topics such as protection element settings, RTAC programming, and HMI development. Attendees can ask questions, interact with trainers, and receive real-time feedback—mirroring the benefits of an in-person class without the need for travel. Online live training is ideal for distributed engineering teams, remote facilities, or organizations that require flexible access to expert instruction with minimal disruption to daily operations."
  },
  {
    icon: Play,
    emoji: "🎥",
    title: "On-Demand Recordings (Specialized Topics)",
    description: "For ultimate flexibility, we offer a growing library of pre-recorded, self-paced modules focused on highly relevant, technical subjects. These include topics such as SEL relay configuration using QuickSet®, RTAC automation logic with acSELerator®, HMI screen creation and navigation, protection coordination and logic diagram design, communication protocols, and DER integration best practices. Each course is segmented for easy consumption and can be revisited anytime—making it a powerful tool for continuous learning, onboarding new engineers, or refreshing knowledge before field deployments. This format is ideal for individuals or teams who need to learn on their own schedule or revisit content as needed."
  }
];

interface TrainingsProps {
  service: {
    title: string;
    description: string;
    color: string;
    icon: ComponentType<{ className?: string }>;
  };
}

const Trainings = ({ service }: TrainingsProps) => {
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

      {/* Delivery Methods */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Training Delivery Methods</h2>
        <div className="grid grid-cols-1 gap-6">
          {deliveryMethods.map((method, index) => (
            <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl">{method.emoji}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
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

export default Trainings; 