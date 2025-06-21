import { Battery, Cpu, Globe, Lightbulb, Settings, Zap, Network } from "lucide-react";
import { ComponentType } from "react";

// Helper function to truncate text to first 50 words
export const truncateToWords = (text: string, wordLimit: number = 50) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    icon: Zap,
    title: "Grid Integration Services",
    description: `Navigating the complexities of modern grid interconnection requires deep 
    technical insight and practical experience. We provide specialized engineering services 
    to ensure your generation assets, especially renewables and energy storage, are integrated 
    seamlessly, reliably, and compliantly into the broader electrical network.`,
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Battery,
    title: "Energy Storage Systems",
    description: `Battery Energy Storage Systems (BESS) are pivotal for modernizing the grid, 
    enhancing renewable energy utilization, and providing essential ancillary services. I offer 
    end-to-end engineering solutions for BESS, ensuring optimal design, intelligent control, 
    and maximum value generation for your projects.`,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Network,
    title: "Smart Grid Modernization",
    description: `The smart grid represents a transformative evolution in power system management—moving beyond traditional one-way 
    energy delivery to a dynamic, interactive, and intelligent infrastructure. By integrating advanced digital technologies, 
    the smart grid enables two-way communication between utilities and consumers, real-time system visibility, 
    distributed energy resource (DER) integration, and automated control at every level of the network. 
    We provide the engineering expertise and technical leadership to help utilities and operators modernize their grid architecture 
    into a resilient, self-healing, and data-driven ecosystem. Our solutions encompass adaptive protection schemes, 
    advanced metering infrastructure (AMI), substation automation, and distributed control strategies—ensuring your grid 
    is not only more reliable and efficient, but also prepared for the future of decarbonization, decentralization, and electrification.`,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Microgrid Development",
    description: `Microgrids are advanced, localized energy systems designed to deliver enhanced reliability, 
    energy security, and operational flexibility. They are capable of operating in parallel with the main utility grid or 
    autonomously in islanded mode during grid outages or disturbances. A well-designed microgrid integrates distributed energy 
    resources (DERs) such as solar PV, battery energy storage systems (BESS), diesel generators, and controllable loads under a 
    centralized or hierarchical control architecture. We specialize in engineering and commissioning robust microgrid solutions 
    tailored to your site-specific operational priorities—whether it’s uninterrupted power for critical infrastructure, 
    renewable integration, demand-side optimization, or grid resiliency. Our services cover end-to-end design: 
    from protection coordination, black start functionality, and seamless islanding/resynchronization 
    logic to DER controller programming, HMI development, and energy management system (EMS) scheduling.`,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Protection & Automation & Visibility",
    description: `We offer a wide range of advanced protection, automation, and control services 
    tailored for utility, industrial, and renewable energy applications. Our capabilities span 
    generator, transformer, feeder, and transmission line protection using devices such as the 
    SEL-700G, SEL-411L, SEL-487E, SEL-651R, SEL-751, SEL-351, and SEL-351S. We also implement 
    high-accuracy metering and power quality solutions with the SEL-735, deploy real-time 
    automation platforms like the SEL-3555, SEL-3350, SEL-3505/3505-3, and SEL-2240 Axion, and 
    develop operator interfaces through acSELerator® Diagram Builder SEL-5035 Software. With 
    tools like QuickSet® and acSELerator®, we ensure efficient configuration, seamless 
    integration, and long-term operational reliability across protection and control systems.`,
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Settings,
    title: "Trainings",
    description: `We offer expert-led training programs designed to equip engineers, technicians, 
    and system operators with practical knowledge and hands-on skills in power system protection, 
    automation, and SCADA integration. Whether you are implementing new protection schemes, 
    developing HMI interfaces, or configuring automation logic, our courses are structured to 
    deliver both foundational and advanced content using real-world applications and SEL-based 
    tools such as acSELerator® QuickSet®, acSELerator® RTAC, and Diagram Builder. Our training 
    emphasizes system-level understanding, from relay settings and logic design to HMI 
    visualization and automation workflows to ensure participants leave with immediately 
    applicable skills.`,
    color: "from-teal-500 to-green-500"
  }
]; 