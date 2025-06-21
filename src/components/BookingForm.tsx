
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    vehicleType: "",
    service: "",
    date: undefined as Date | undefined,
    time: "",
    locationType: "",
    comments: ""
  });

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const getPrice = () => {
    if (!formData.vehicleType || !formData.service) return 0;
    
    if (formData.vehicleType === "Truck") {
      if (formData.service === "Interior + Exterior Detailing") {
        return 125; // Truck: both services
      } else {
        return 100; // Truck: single service (interior or exterior)
      }
    } else if (formData.vehicleType === "Sedan" || formData.vehicleType === "SUV") {
      if (formData.service === "Interior + Exterior Detailing") {
        return 100; // Sedan/SUV: both services
      } else {
        return 85; // Sedan/SUV: single service (interior or exterior)
      }
    }
    return 0;
  };

  const validateForm = () => {
    const requiredFields = ['fullName', 'phone', 'vehicleType', 'service', 'date', 'time', 'locationType'];
    
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in all required fields.`,
          variant: "destructive",
        });
        return false;
      }
    }

    // Phone validation (basic 10-digit check)
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return false;
    }

    // Date validation
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        toast({
          title: "Invalid Date",
          description: "Please select a future date.",
          variant: "destructive",
        });
        return false;
      }

      if (selectedDate.getDay() === 0) { // Sunday
        toast({
          title: "Closed on Sundays",
          description: "We're closed on Sundays. Please select Monday through Saturday.",
          variant: "destructive",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const bookingData = {
      ...formData,
      price: getPrice(),
      status: "pending",
      createdAt: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Store booking in localStorage for admin dashboard
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    console.log("Booking submitted:", bookingData);
    
    toast({
      title: "Booking Submitted!",
      description: "Your appointment has been scheduled. You'll receive confirmation shortly.",
    });

    // Navigate to confirmation page with booking data
    navigate("/booking-confirmed", { state: { bookingData } });
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // Exclude Sunday
  };

  return (
    <section id="booking-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h2>
            <p className="text-xl text-gray-600">
              Schedule your car detailing service today. Quick and easy online booking.
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Schedule Service</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below to book your appointment
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(956) 555-0123"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Vehicle Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sedan">Sedan</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Truck">Truck</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Service Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Interior Detailing">Interior Detailing</SelectItem>
                        <SelectItem value="Exterior Detailing">Exterior Detailing</SelectItem>
                        <SelectItem value="Interior + Exterior Detailing">Interior + Exterior Detailing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => setFormData({...formData, date})}
                          disabled={(date) => !isWeekday(date) || date < new Date()}
                          className="pointer-events-auto"
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Time *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location Type *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, locationType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In-Shop">In-Shop (805 N. Kenyon Rd, Edinburg)</SelectItem>
                      <SelectItem value="Mobile">Mobile (We come to you)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => setFormData({...formData, comments: e.target.value})}
                    placeholder="Any special requests or additional information..."
                    rows={3}
                  />
                </div>

                {formData.vehicleType && formData.service && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 text-green-800">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold">Total Price: ${getPrice()}</span>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
