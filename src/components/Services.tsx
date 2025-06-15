
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { FloatingCard } from "./FloatingCard";

const Services = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "Comprehensive financial record management and strategic reporting solutions",
      items: [
        "Advanced books of accounts maintenance (digital-first approach)",
        "Dynamic financial statements preparation (P&L, Balance Sheet, Cash Flow)",
        "Intelligent general ledger management systems",
        "Automated accounts payable/receivable optimization"
      ],
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      title: "Audit & Assurance",
      description: "World-class audit services ensuring regulatory excellence and risk mitigation",
      items: [
        "Comprehensive statutory audit (Companies Act compliance)",
        "Strategic internal audit frameworks",
        "Specialized tax audit (Income Tax Act)",
        "Advanced stock audit and forensic due diligence",
        "AI-powered forensic audit and fraud detection"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Direct Taxation Excellence",
      description: "Strategic tax planning and optimization for maximum efficiency",
      items: [
        "Expert income tax return filing (individuals, entities, corporations)",
        "Advanced tax planning & wealth optimization strategies",
        "Seamless TDS/TCS compliance automation",
        "Elite representation before tax authorities"
      ],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "GST & Indirect Tax Mastery",
      description: "Complete GST ecosystem management and strategic advisory",
      items: [
        "Streamlined GST registration and intelligent return filing",
        "Comprehensive GST audit & reconciliation services",
        "Strategic input tax credit optimization",
        "Expert GST litigation and appeals management"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Corporate Law & Compliance",
      description: "End-to-end corporate legal solutions and regulatory compliance",
      items: [
        "Sophisticated company incorporation (Pvt Ltd, LLP, OPC)",
        "Automated ROC filings and annual compliance",
        "Executive director KYC, DIN, and MCA management",
        "Strategic capital restructuring and governance"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Strategic Business Advisory",
      description: "Executive-level consulting for sustainable growth and optimization",
      items: [
        "Advanced business structuring and transformation",
        "Predictive financial planning and forecasting",
        "Performance optimization and cost excellence",
        "Strategic business valuations and investor readiness",
        "M&A advisory and exit strategy planning"
      ],
      gradient: "from-amber-500 to-yellow-500",
      featured: true
    },
    {
      title: "Startup & Innovation Hub",
      description: "Specialized ecosystem for startups and emerging businesses",
      items: [
        "Comprehensive business registration (Startup India, MSME/Udyam)",
        "Investor-grade pitch deck and business plan development",
        "Strategic funding advisory (VC, PE, angel, institutional)",
        "Intelligent compliance automation and calendar management"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "HR & Payroll Excellence",
      description: "Complete human capital management and compliance solutions",
      items: [
        "Advanced payroll processing and compensation structuring",
        "Comprehensive PF, ESI, Gratuity, and bonus compliance",
        "Strategic labour law registration and regulatory filings",
        "Professional Tax and establishment compliance automation"
      ],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Virtual CFO Services",
      description: "C-suite financial leadership for scaling organizations",
      items: [
        "Executive virtual CFO for high-growth companies",
        "Advanced budgeting, MIS reporting, and KPI dashboards",
        "Institutional investor reporting and financial modeling",
        "Strategic fund utilization and internal control systems"
      ],
      gradient: "from-slate-600 to-slate-800",
      featured: true
    },
    {
      title: "Global Tax & FEMA",
      description: "International taxation and cross-border compliance expertise",
      items: [
        "Sophisticated transfer pricing documentation and studies",
        "Strategic DTAA advisory and optimization",
        "Comprehensive FEMA compliance (FDI, ODI, ECB, LRS)",
        "NRI taxation and global income structuring"
      ],
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Legal Representation & Advocacy",
      description: "Expert representation across regulatory authorities and tribunals",
      items: [
        "Elite representation before IT, GST, SEBI, RBI, ROC",
        "Strategic handling of notices, assessments, and scrutiny",
        "Appellate services and legal coordination excellence"
      ],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-100 to-emerald-100 rounded-full blur-3xl opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Service Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Premium Financial
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            From startups to Fortune 500 companies, we deliver sophisticated financial services 
            that drive growth, ensure compliance, and unlock unprecedented business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm ${
                service.featured ? 'lg:col-span-1 ring-2 ring-blue-200' : ''
              }`}
            >
              {/* Three.js floating animation */}
              <FloatingCard />
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {service.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    Premium
                  </Badge>
                </div>
              )}
              
              <CardHeader className="relative">
                <div className={`w-3 h-12 bg-gradient-to-b ${service.gradient} rounded-full mb-4`}></div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 group/item">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                      <span className="text-sm text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover indicator */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium text-slate-600">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our experts and discover how we can accelerate your growth.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
