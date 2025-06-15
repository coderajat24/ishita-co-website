
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Elite Expertise",
      description: "Chartered Accountants with distinguished credentials and decades of industry mastery",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Bespoke Solutions",
      description: "Tailored strategies crafted exclusively for your unique business objectives",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Precision Delivery",
      description: "Unwavering commitment to excellence with meticulous attention to deadlines",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Maintaining the highest standards of integrity, confidentiality, and professional ethics",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Why Industry Leaders Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Redefining Financial
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We don't just manage your finances—we architect your success. Our comprehensive suite of services 
            combines cutting-edge expertise with personalized attention to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{feature.description}</p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
              <div className="text-slate-300 font-medium">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">10+</div>
              <div className="text-slate-300 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">₹50Cr+</div>
              <div className="text-slate-300 font-medium">Compliance Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
