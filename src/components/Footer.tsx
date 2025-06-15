
import { Phone, Mail, MapPin, ArrowRight, Award, Shield, Users, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  CA Ishita & Co
                </h3>
                <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                  Pioneering excellence in financial advisory and compliance solutions. 
                  We transform businesses through strategic guidance, innovative solutions, 
                  and unwavering commitment to your success.
                </p>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300">ICAI Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">10+ Years</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">500+ Clients</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">+91 98765 43210</p>
                    <p className="text-sm text-slate-400">Available Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">contact@caishitaandco.com</p>
                    <p className="text-sm text-slate-400">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 hover:text-blue-400 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">123 Business District</p>
                    <p className="text-sm text-slate-400">Corporate Avenue, City - 110001</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Our Services", href: "#services" },
                  { name: "Contact Us", href: "#contact" },
                  { name: "Career Opportunities", href: "#careers" },
                  { name: "Client Portal", href: "#portal" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Core Services</h4>
              <ul className="space-y-3">
                {[
                  { name: "Taxation & Planning", href: "#tax" },
                  { name: "Audit & Assurance", href: "#audit" },
                  { name: "Corporate Compliance", href: "#compliance" },
                  { name: "Business Advisory", href: "#advisory" },
                  { name: "Virtual CFO", href: "#cfo" },
                  { name: "Startup Solutions", href: "#startup" }
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  © 2024 CA Ishita & Co. All rights reserved.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Professional Chartered Accountants & Strategic Business Advisors
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="w-px h-4 bg-slate-600"></span>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                <span className="w-px h-4 bg-slate-600"></span>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Secure & Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
