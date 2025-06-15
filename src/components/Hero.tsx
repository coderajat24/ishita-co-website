
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            CA Ishita & Co
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Chartered Accountants & Business Advisors
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for comprehensive financial, taxation, and business advisory services. 
            Empowering businesses with expert guidance and seamless compliance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Get Consultation
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contact@caishitaandco.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
