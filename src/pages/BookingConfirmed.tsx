
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, MapPin, CheckCircle, Mail, MessageSquare } from "lucide-react";

const BookingConfirmed = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  const generateCalendarLink = () => {
    if (!bookingData) return "";
    
    const startDate = new Date(`${bookingData.date}T${bookingData.time}`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const details = `Car Detailing Service - ${bookingData.service}%0A%0AVehicle: ${bookingData.vehicleType}%0ALocation: ${bookingData.locationType}%0APrice: $${bookingData.price}%0A%0ABayerenzo Car Detailing%0A805 N. Kenyon Rd, Edinburg, TX 78539%0A(956) 595-1676`;
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Car Detailing Appointment&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${details}&location=805 N. Kenyon Rd, Edinburg, TX 78539`;
  };

  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-destructive">No Booking Data Found</CardTitle>
            <CardDescription>
              Please return to the homepage and submit a new booking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button className="w-full">Return to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center bg-green-50 rounded-t-lg">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-800">Booking Confirmed!</CardTitle>
            <CardDescription className="text-green-700">
              Your car detailing appointment has been successfully scheduled.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Confirmation Messages */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Confirmation Messages
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-700">
                  <Mail className="h-4 w-4" />
                  <span>Email confirmation sent to your registered email</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700">
                  <MessageSquare className="h-4 w-4" />
                  <span>SMS confirmation sent to {bookingData.phone}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Date & Time</p>
                  <p className="text-blue-700">{formatDisplayDate(bookingData.date)} at {bookingData.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="h-5 w-5 bg-blue-600 rounded"></div>
                <div>
                  <p className="font-medium text-gray-900">Service Details</p>
                  <p className="text-gray-700">{bookingData.service}</p>
                  <p className="text-gray-600">{bookingData.vehicleType} - {bookingData.locationType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <span className="h-5 w-5 text-green-600 font-bold">$</span>
                <div>
                  <p className="font-medium text-green-900">Total Price</p>
                  <p className="text-2xl font-bold text-green-700">${bookingData.price}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                onClick={() => window.open(generateCalendarLink(), '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Add to Google Calendar
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Return to Homepage
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(956) 595-1676</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>805 N. Kenyon Rd, Edinburg, TX 78539</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                You will receive a confirmation email and SMS shortly. If you need to make changes, please call us.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmed;
