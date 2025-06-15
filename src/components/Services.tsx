
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "Complete financial record management and reporting",
      items: [
        "Books of accounts maintenance (manual/software-based)",
        "Financial statements preparation (P&L, Balance Sheet)",
        "General ledger management",
        "Accounts payable/receivable management"
      ]
    },
    {
      title: "Audit & Assurance",
      description: "Comprehensive audit services for regulatory compliance",
      items: [
        "Statutory audit (Companies Act compliance)",
        "Internal audit services",
        "Tax audit (Income Tax Act)",
        "Stock audit and due diligence",
        "Forensic audit and fraud detection"
      ]
    },
    {
      title: "Direct Taxation",
      description: "Complete income tax solutions and planning",
      items: [
        "Income tax return filing (individuals, firms, companies)",
        "Tax planning & advisory services",
        "TDS/TCS compliance management",
        "Representation before tax authorities"
      ]
    },
    {
      title: "Indirect Taxation (GST)",
      description: "GST compliance and advisory services",
      items: [
        "GST registration and return filing",
        "GST audit & reconciliation",
        "Input tax credit advisory",
        "GST litigation and appeals"
      ]
    },
    {
      title: "Company Law & Compliance",
      description: "Corporate legal compliance and MCA services",
      items: [
        "Company incorporation (Pvt Ltd, LLP, OPC)",
        "ROC filings and annual returns",
        "Director KYC, DIN, and MCA compliance",
        "Capital structure and management changes"
      ]
    },
    {
      title: "Business Advisory & Consulting",
      description: "Strategic business guidance and consulting",
      items: [
        "Business structuring and restructuring",
        "Financial planning and forecasting",
        "Cost control and management consulting",
        "Business valuations and investor presentations",
        "Exit strategy and M&A advisory"
      ]
    },
    {
      title: "Startup & MSME Services",
      description: "Specialized services for startups and small businesses",
      items: [
        "Business registration (Startup India, MSME/Udyam)",
        "Pitch deck and business plan preparation",
        "Funding advisory (VC, angel, bank loans)",
        "Compliance calendar setup and automation"
      ]
    },
    {
      title: "Payroll & HR Compliance",
      description: "Complete payroll and HR compliance solutions",
      items: [
        "Payroll processing and salary structuring",
        "PF, ESI, Gratuity, Bonus compliance",
        "Labour law registration and filings",
        "Professional Tax and Shops & Establishment compliance"
      ]
    },
    {
      title: "Virtual CFO Services",
      description: "Outsourced CFO services for growing businesses",
      items: [
        "Virtual CFO for growing startups",
        "Budgeting, MIS reports, KPI dashboards",
        "Investor reporting and financial modeling",
        "Fund utilization and internal controls"
      ]
    },
    {
      title: "International Taxation & FEMA",
      description: "Cross-border taxation and FEMA compliance",
      items: [
        "Transfer pricing study & documentation",
        "DTAA advisory services",
        "FEMA compliance and RBI filings (FDI, ODI, ECB)",
        "NRI taxation and global income planning"
      ]
    },
    {
      title: "Litigation & Representation",
      description: "Legal representation and dispute resolution",
      items: [
        "Representation before IT, GST, SEBI, RBI, ROC",
        "Handling notices, scrutiny, and assessments",
        "Filing appeals and legal coordination"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of financial, taxation, and business advisory services 
            to help your business thrive and remain compliant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
