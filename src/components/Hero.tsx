
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Admin Access Button */}
        <div className="absolute top-4 right-4">
          <Link to="/admin/login">
            <Button variant="outline" size="sm" className="text-blue-900 border-white hover:bg-white">
              <Shield className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional Car
                <span className="text-orange-400"> Detailing</span>
              </h1>
              <p className="text-xl text-blue-100">
                Premium car detailing services in Edinburg, TX. We bring showroom quality to your vehicle with our expert interior and exterior detailing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('tel:+19565951676')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="flex items-center gap-3 text-blue-100">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span>805 N. Kenyon Rd, Edinburg, TX 78539</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center">Why Choose Bayerenzo?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Technicians</h4>
                    <p className="text-blue-100">Trained professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Premium Products</h4>
                    <p className="text-blue-100">High-quality cleaning and protection products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Convenient Service</h4>
                    <p className="text-blue-100">In-shop or mobile service at your location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
