
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  name: string;
  phone: string;
  vehicleType: string;
  date: string;
  time: string;
  locationType: string;
  status: "pending" | "confirmed" | "completed" | "canceled";
  comments: string;
  price: number;
  createdAt: string;
}

export const BookingsTable = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const { toast } = useToast();

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockBookings: Booking[] = [
      {
        id: "1",
        name: "John Smith",
        phone: "(956) 123-4567",
        vehicleType: "Truck",
        date: "2024-06-25",
        time: "10:00",
        locationType: "In-Shop",
        status: "pending",
        comments: "Please focus on interior cleaning",
        price: 125,
        createdAt: "2024-06-21T10:00:00Z",
      },
      {
        id: "2",
        name: "Maria Garcia",
        phone: "(956) 234-5678",
        vehicleType: "Sedan",
        date: "2024-06-26",
        time: "14:00",
        locationType: "Mobile",
        status: "confirmed",
        comments: "",
        price: 85,
        createdAt: "2024-06-21T11:30:00Z",
      },
    ];
    setBookings(mockBookings);
    setFilteredBookings(mockBookings);
  }, []);

  useEffect(() => {
    let filtered = bookings;

    if (searchTerm) {
      filtered = filtered.filter(
        (booking) =>
          booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.phone.includes(searchTerm)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((booking) => booking.status === statusFilter);
    }

    if (vehicleFilter !== "all") {
      filtered = filtered.filter((booking) => booking.vehicleType === vehicleFilter);
    }

    setFilteredBookings(filtered);
  }, [bookings, searchTerm, statusFilter, vehicleFilter]);

  const updateBookingStatus = (id: string, newStatus: Booking["status"]) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
    toast({
      title: "Status updated",
      description: `Booking status changed to ${newStatus}`,
    });
  };

  const exportToCSV = () => {
    const headers = ["Name", "Phone", "Vehicle", "Date", "Time", "Location", "Status", "Price", "Comments"];
    const csvContent = [
      headers.join(","),
      ...filteredBookings.map((booking) =>
        [
          booking.name,
          booking.phone,
          booking.vehicleType,
          booking.date,
          booking.time,
          booking.locationType,
          booking.status,
          booking.price,
          `"${booking.comments}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bookings.csv";
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export successful",
      description: "Bookings exported to CSV",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={vehicleFilter} onValueChange={setVehicleFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Vehicle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Vehicles</SelectItem>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="Truck">Truck</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={exportToCSV} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{booking.name}</div>
                    <div className="text-sm text-gray-600">{booking.phone}</div>
                  </div>
                </TableCell>
                <TableCell>{booking.vehicleType}</TableCell>
                <TableCell>
                  <div>
                    <div>{booking.date}</div>
                    <div className="text-sm text-gray-600">{booking.time}</div>
                  </div>
                </TableCell>
                <TableCell>{booking.locationType}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell>${booking.price}</TableCell>
                <TableCell>
                  <Select
                    value={booking.status}
                    onValueChange={(value) =>
                      updateBookingStatus(booking.id, value as Booking["status"])
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="canceled">Canceled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No bookings found matching your criteria.
        </div>
      )}
    </div>
  );
};
