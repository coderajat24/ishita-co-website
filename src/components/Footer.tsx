
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CA Ishita & Co</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for comprehensive financial, taxation, and business advisory services. 
              We help businesses grow while ensuring complete regulatory compliance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@caishitaandco.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Business District, Corporate Avenue, City - 110001</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Taxation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Company Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Advisory</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 CA Ishita & Co. All rights reserved. | Professional Chartered Accountants & Business Advisors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
