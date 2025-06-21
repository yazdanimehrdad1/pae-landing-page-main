import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

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

type InputOrTextAreaEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: InputOrTextAreaEvent) => {
    const { name, value } = e.target;
    // Map the form field names to state field names
    const fieldMap: { [key: string]: string } = {
      'from_name': 'name',
      'from_email': 'email',
      'company': 'company',
      'message': 'message'
    };
    
    setFormData(prev => ({
      ...prev,
      [fieldMap[name]]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_name: "Power Automation Engineering",
      email: "info@powerautomationengineering.com",
      reply_to: formData.email
    };

    console.log('Attempting to send email with:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams: templateParams
    });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', {
        status: result.status,
        text: result.text,
        timestamp: new Date().toISOString()
      });

      if (result.status === 200) {
        console.log('Email sent successfully. If you did not receive it, please check:', [
          '1. Spam/Junk folder',
          '2. EmailJS service configuration',
          '3. Email template variables',
          '4. Email service provider settings'
        ].join('\n'));
        
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error(`Unexpected status code: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', {
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : error,
        timestamp: new Date().toISOString(),
        formData: {
          ...templateParams,
          email: '***@***.com' // Masked for privacy
        }
      });
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Start Your Project Today
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="from_name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </Label>
                    <Input 
                      id="from_name"
                      name="from_name"
                      placeholder="John Doe" 
                      className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="from_email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <Input 
                      id="from_email"
                      name="from_email"
                      type="email" 
                      placeholder="john@company.com" 
                      className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company/Organization
                  </Label>
                  <Input 
                    id="company"
                    name="company"
                    placeholder="Your Company Name" 
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Project Details
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your energy project, timeline, and requirements..."
                    rows={5}
                    className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={[
                    "w-full bg-gradient-to-r from-blue-600 to-green-600",
                    "hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg",
                    "font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  ].join(' ')}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
