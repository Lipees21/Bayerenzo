
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bayerenzo
            <span className="block text-blue-300">Car Detailing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Professional interior and exterior detailing services in Edinburg, TX. 
            Premium quality, competitive prices, and exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('tel:9565951676')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (956) 595-1676
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span className="text-sm md:text-base">In-Shop & Mobile Service</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Clock className="h-5 w-5 text-orange-400" />
              <span className="text-sm md:text-base">Mon-Sat: 9AM - 6PM</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <span className="h-5 w-5 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs">$</span>
              <span className="text-sm md:text-base">Starting at $85</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
