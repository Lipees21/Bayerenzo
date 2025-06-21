
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export const AdminSettings = () => {
  const [settings, setSettings] = useState({
    maxBookingsPerHour: 3,
    businessName: "Bayerenzo Car Detailing",
    businessPhone: "(956) 595-1676",
    businessAddress: "805 N. Kenyon Rd, Edinburg, TX 78539",
    sedanPrice: 85,
    truckSuvPrice: 125,
    emailNotifications: true,
    smsNotifications: true,
  });

  const { toast } = useToast();

  const handleSave = () => {
    // In a real app, this would save to the database
    console.log("Saving settings:", settings);
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully",
    });
  };

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              value={settings.businessName}
              onChange={(e) => handleInputChange("businessName", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="businessPhone">Phone Number</Label>
            <Input
              id="businessPhone"
              value={settings.businessPhone}
              onChange={(e) => handleInputChange("businessPhone", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="businessAddress">Address</Label>
            <Input
              id="businessAddress"
              value={settings.businessAddress}
              onChange={(e) => handleInputChange("businessAddress", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="sedanPrice">Sedan Price ($)</Label>
            <Input
              id="sedanPrice"
              type="number"
              value={settings.sedanPrice}
              onChange={(e) => handleInputChange("sedanPrice", parseInt(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="truckSuvPrice">Truck/SUV Price ($)</Label>
            <Input
              id="truckSuvPrice"
              type="number"
              value={settings.truckSuvPrice}
              onChange={(e) => handleInputChange("truckSuvPrice", parseInt(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Booking Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="maxBookings">Maximum Bookings Per Hour</Label>
            <Input
              id="maxBookings"
              type="number"
              min="1"
              max="10"
              value={settings.maxBookingsPerHour}
              onChange={(e) => handleInputChange("maxBookingsPerHour", parseInt(e.target.value))}
            />
            <p className="text-sm text-gray-600 mt-1">
              This prevents overbooking by limiting concurrent appointments
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="emailNotifications"
              checked={settings.emailNotifications}
              onChange={(e) => handleInputChange("emailNotifications", e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="emailNotifications">Email Notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="smsNotifications"
              checked={settings.smsNotifications}
              onChange={(e) => handleInputChange("smsNotifications", e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="smsNotifications">SMS Notifications</Label>
          </div>
          <p className="text-sm text-gray-600">
            Configure notification preferences for new bookings and status changes
          </p>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Settings
      </Button>
    </div>
  );
};
