
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Car, Truck } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Sedan Detailing",
      price: "$85",
      description: "Complete interior and exterior detailing for sedans and compact cars",
      features: [
        "Full interior vacuum and cleaning",
        "Dashboard and console treatment",
        "Exterior wash and wax",
        "Tire cleaning and shine",
        "Window cleaning inside and out"
      ]
    },
    {
      icon: Truck,
      title: "Truck/SUV Detailing",
      price: "$125",
      description: "Comprehensive detailing service for larger vehicles",
      features: [
        "Complete interior deep clean",
        "Leather/fabric protection",
        "Full exterior wash and wax",
        "Wheel and tire detailing",
        "Chrome polishing",
        "Cargo area cleaning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional car detailing services with attention to every detail. 
            Both in-shop and mobile options available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  {service.description}
                </CardDescription>
                <div className="text-4xl font-bold text-orange-300 mt-4">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Locations</h3>
            <p className="text-gray-600">
              <strong>In-Shop:</strong> 805 N. Kenyon Rd, Edinburg, TX 78539<br />
              <strong>Mobile:</strong> We come to you! (Edinburg and surrounding areas)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
