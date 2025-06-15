
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Professionals",
      description: "Qualified Chartered Accountants with extensive industry experience"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Personalized solutions tailored to your business needs"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines and compliance requirements"
    },
    {
      icon: Shield,
      title: "Trusted Advisor",
      description: "Maintaining highest standards of integrity and confidentiality"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CA Ishita & Co?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial and business solutions with a commitment to excellence, 
            integrity, and long-term client relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
