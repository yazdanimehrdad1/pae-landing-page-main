import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { services } from './Services';
import GridIntegration from './services/GridIntegration';
import EnergyStorage from './services/EnergyStorage';
import SmartGridModernization from './services/SmartGridModernization';
import MicrogridDevelopment from './services/MicrogridDevelopment';

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
                Back to Services
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            {serviceId === 'grid-integration-services' && <GridIntegration service={service} />}
            {serviceId === 'energy-storage-systems' && <EnergyStorage service={service} />}
            {serviceId === 'smart-grid-modernization' && <SmartGridModernization service={service} />}
            {serviceId === 'microgrid-development' && <MicrogridDevelopment service={service} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicePage; 