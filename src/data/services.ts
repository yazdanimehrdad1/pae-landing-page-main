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
    description: `The smart grid represents a fundamental paradigm shift in power system 
    management, leveraging digital technologies for two-way communication, real-time monitoring, 
    and automated control. I provide the expertise to transform your grid into a proactive, 
    self-healing, and intelligent network.`,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Microgrid Development",
    description: `Microgrids are sophisticated, localized power systems designed for enhanced 
    resilience and energy independence, capable of operating connected to the main grid or 
    autonomously during disturbances. I engineer robust microgrid solutions tailored to your 
    critical needs.`,
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