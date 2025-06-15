
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Award, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const formAnimation = useScrollAnimation({ delay: 400 });
  const contactInfoAnimation = useScrollAnimation({ delay: 600 });

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Animated Header */}
        <div 
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Connect With Our Experts
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Let's Build Your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Success Story</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to elevate your business? Our team of expert chartered accountants is here to provide 
            personalized solutions that drive growth and ensure compliance excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Animated Contact Form */}
          <div 
            ref={formAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              formAnimation.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Schedule Your Consultation
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">First Name</label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">Last Name</label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">Email Address</label>
                  <Input 
                    placeholder="Enter your email address" 
                    type="email" 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">Phone Number</label>
                  <Input 
                    placeholder="Enter your phone number" 
                    type="tel" 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">Subject</label>
                  <Input 
                    placeholder="What can we help you with?" 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 h-12 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-slate-700 group-focus-within:text-blue-600 transition-colors">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your requirements..." 
                    rows={4} 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none transition-all duration-300 focus:scale-105"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Send Message</span>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Animated Contact Information */}
          <div 
            ref={contactInfoAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-8 transition-all duration-1000 ease-out ${
              contactInfoAnimation.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Contact Details */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    primary: "+91 98765 43210",
                    secondary: "Available Mon-Sat, 9 AM - 7 PM",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    primary: "contact@caishitaandco.com",
                    secondary: "We'll respond within 24 hours",
                    gradient: "from-emerald-500 to-teal-500"
                  },
                  {
                    icon: MapPin,
                    title: "Office Address",
                    primary: "123 Business District",
                    secondary: "Corporate Avenue, City - 110001",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    primary: "Mon - Fri: 9:00 AM - 6:00 PM",
                    secondary: "Sat: 9:00 AM - 2:00 PM",
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-500 cursor-pointer group hover:scale-105"
                    style={{
                      transitionDelay: contactInfoAnimation.isVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <contact.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors">{contact.title}</p>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{contact.primary}</p>
                      <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">{contact.secondary}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Professional Credentials */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-900 to-blue-900 text-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Professional Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { icon: Shield, text: "ICAI Member", color: "text-emerald-400" },
                    { icon: Shield, text: "CPA Certified", color: "text-blue-400" },
                    { icon: Shield, text: "GST Practitioner", color: "text-purple-400" },
                    { icon: Shield, text: "Company Secretary", color: "text-orange-400" }
                  ].map((credential, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                      style={{
                        transitionDelay: contactInfoAnimation.isVisible ? `${(index + 4) * 100}ms` : '0ms'
                      }}
                    >
                      <credential.icon className={`w-4 h-4 ${credential.color}`} />
                      <span>{credential.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-yellow-400">10+ Years</strong> of Professional Excellence
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
