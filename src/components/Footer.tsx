import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo textSize="lg" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the future of distributed energy resources with innovative
              engineering solutions for a sustainable tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Grid Integration</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Energy Storage</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Smart Grid Tech</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Microgrid Development</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@powerautomationeng.com</li>
              <li>+1 (662) 312-3277</li>
              <li>1970 Columbia Street</li>
              <li>San Diego, CA 92101</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Power Automation Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
