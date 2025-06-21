
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any questions or to schedule your appointment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-3">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">(956) 595-1676</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('tel:9565951676')}
                className="w-full"
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-3">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3 text-sm">
                805 N. Kenyon Rd<br />
                Edinburg, TX 78539
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://maps.google.com/?q=805+N.+Kenyon+Rd,+Edinburg,+TX+78539', '_blank')}
                className="w-full"
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Monday - Saturday</p>
                <p className="font-medium">9:00 AM - 6:00 PM</p>
                <p className="text-red-600">Closed Sundays</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-3">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Service Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Edinburg & Surrounding</p>
                <p>Mobile Service Available</p>
                <p className="text-blue-600 font-medium">We Come to You!</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Car detailing service with guaranteed satisfaction. 
              Book your appointment today and see the difference quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 px-8"
                onClick={() => {
                  const bookingSection = document.getElementById('booking-form');
                  bookingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Online
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
                onClick={() => window.open('tel:9565951676')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call (956) 595-1676
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
