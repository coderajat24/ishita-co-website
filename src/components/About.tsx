
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const statsAnimation = useScrollAnimation({ delay: 400 });
  const { containerRef: featuresRef, visibleItems: featureItems } = useStaggeredAnimation(4, 150);

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
        {/* Animated Header */}
        <div 
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            headerAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
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
        
        {/* Animated Features Grid */}
        <div 
          ref={featuresRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100 ${
                featureItems[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center transition-colors duration-300 group-hover:text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed transition-colors duration-300 group-hover:text-slate-700">{feature.description}</p>
              
              {/* Hover indicator with premium animation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                  <ArrowRight className="w-4 h-4 text-slate-400 animate-pulse" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated Stats section */}
        <div 
          ref={statsAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white transition-all duration-1000 ease-out ${
            statsAnimation.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served", gradient: "from-blue-400 to-cyan-400", delay: "0ms" },
              { number: "10+", label: "Years of Excellence", gradient: "from-emerald-400 to-teal-400", delay: "200ms" },
              { number: "₹50Cr+", label: "Compliance Value", gradient: "from-purple-400 to-pink-400", delay: "400ms" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  statsAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: statsAnimation.isVisible ? stat.delay : '0ms'
                }}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-110`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
