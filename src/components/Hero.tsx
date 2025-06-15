
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Trust indicators */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-6 text-sm text-blue-200/80">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>ICAI Certified</span>
              </div>
              <div className="w-px h-4 bg-blue-200/30"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>10+ Years Excellence</span>
              </div>
              <div className="w-px h-4 bg-blue-200/30"></div>
              <span>500+ Clients Served</span>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                CA Ishita & Co
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 text-blue-100/90 font-light tracking-wide">
              Elite Financial Advisory & Compliance Solutions
            </p>
            
            <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Transforming businesses through strategic financial guidance, regulatory excellence, 
              and innovative solutions. Your pathway to sustainable growth and compliance mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Explore Our Services 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Button>
            </div>
            
            {/* Contact info with elegant styling */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-slate-300">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-600"></div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">contact@caishitaandco.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
