import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@powerautomationengineering.com",
    subContent: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (662) 312-3277",
    subContent: "Monday - Friday, 9AM - 6PM PST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Columbia Street",
    subContent: "San Diego, CA, 92101"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Your Energy Future?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how our distributed energy resource solutions 
            can help you achieve your sustainability goals and optimize your 
            energy infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-full w-fit">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.subContent}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
