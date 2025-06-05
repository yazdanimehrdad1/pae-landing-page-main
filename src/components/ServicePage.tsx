import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { services } from './Services';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <Card className="w-full max-w-2xl mx-4">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button 
              variant="outline" 
              className="gap-2 text-white border-white hover:bg-white/10 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color}`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              {/* Features Section */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                  <span>Advanced monitoring and control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                  <span>Real-time data analytics and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                  <span>Predictive maintenance capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                  <span>Scalable and modular architecture</span>
                </li>
              </ul>

              {/* Benefits Section */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Increased Efficiency</h3>
                    <p className="text-blue-700">Optimize operations and reduce waste through intelligent automation.</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Cost Savings</h3>
                    <p className="text-green-700">Reduce operational costs and improve resource utilization.</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Future-Ready</h3>
                    <p className="text-purple-700">Stay ahead with scalable and adaptable solutions.</p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">Contact us to learn more about our {service.title} solutions.</p>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicePage; 