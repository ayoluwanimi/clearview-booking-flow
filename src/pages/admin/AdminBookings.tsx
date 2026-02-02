import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Check,
  X,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  booking_number: string;
  status: string;
  preferred_date: string;
  preferred_time: string;
  num_windows: number;
  num_floors: number;
  property_type: string;
  special_instructions: string;
  admin_notes: string;
  created_at: string;
  customers: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  } | null;
  services: {
    name: string;
    base_price: number;
  } | null;
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        *,
        customers (*),
        services (name, base_price)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
      return;
    }

    setBookings(data as unknown as Booking[]);
    setFilteredBookings(data as unknown as Booking[]);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    let filtered = bookings;

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((b) => b.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.booking_number.toLowerCase().includes(query) ||
          b.customers?.name.toLowerCase().includes(query) ||
          b.customers?.email.toLowerCase().includes(query)
      );
    }

    setFilteredBookings(filtered);
  }, [bookings, statusFilter, searchQuery]);

  const updateBookingStatus = async (bookingId: string, newStatus: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled") => {
    const { error } = await supabase
      .from("bookings")
      .update({ status: newStatus })
      .eq("id", bookingId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update booking status",
      });
      return;
    }

    toast({
      title: "Status Updated",
      description: `Booking marked as ${newStatus}`,
    });

    fetchBookings();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "confirmed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "in_progress":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getTimeSlot = (time: string) => {
    switch (time) {
      case "morning":
        return "8AM - 12PM";
      case "afternoon":
        return "12PM - 5PM";
      case "evening":
        return "5PM - 8PM";
      default:
        return time;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Bookings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all booking requests
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or booking #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            All Bookings ({filteredBookings.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No bookings found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Booking #
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden md:table-cell">
                      Service
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground hidden lg:table-cell">
                      Date & Time
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <span className="font-mono text-sm">
                          {booking.booking_number}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">
                            {booking.customers?.name || "Unknown"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {booking.customers?.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell">
                        {booking.services?.name || "N/A"}
                      </td>
                      <td className="py-3 px-4 hidden lg:table-cell">
                        <div>
                          <p>
                            {format(
                              new Date(booking.preferred_date),
                              "MMM d, yyyy"
                            )}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {getTimeSlot(booking.preferred_time)}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status?.replace("_", " ")}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedBooking(booking);
                                setIsDetailsOpen(true);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            {booking.status === "pending" && (
                              <DropdownMenuItem
                                onClick={() =>
                                  updateBookingStatus(booking.id, "confirmed")
                                }
                              >
                                <Check className="h-4 w-4 mr-2" />
                                Confirm
                              </DropdownMenuItem>
                            )}
                            {booking.status === "confirmed" && (
                              <DropdownMenuItem
                                onClick={() =>
                                  updateBookingStatus(booking.id, "completed")
                                }
                              >
                                <Check className="h-4 w-4 mr-2" />
                                Mark Complete
                              </DropdownMenuItem>
                            )}
                            {booking.status !== "cancelled" &&
                              booking.status !== "completed" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    updateBookingStatus(booking.id, "cancelled")
                                  }
                                  className="text-destructive"
                                >
                                  <X className="h-4 w-4 mr-2" />
                                  Cancel
                                </DropdownMenuItem>
                              )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Booking Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Booking #{selectedBooking?.booking_number}
            </DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-6">
              {/* Status */}
              <div className="flex items-center gap-2">
                <Badge className={getStatusColor(selectedBooking.status)}>
                  {selectedBooking.status?.replace("_", " ")}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Created{" "}
                  {format(new Date(selectedBooking.created_at), "PPp")}
                </span>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Customer</h4>
                  <div className="text-sm space-y-1">
                    <p>{selectedBooking.customers?.name}</p>
                    <p className="text-muted-foreground">
                      {selectedBooking.customers?.email}
                    </p>
                    <p className="text-muted-foreground">
                      {selectedBooking.customers?.phone}
                    </p>
                    <p className="text-muted-foreground">
                      {selectedBooking.customers?.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Service</h4>
                  <div className="text-sm space-y-1">
                    <p>{selectedBooking.services?.name}</p>
                    <p className="text-muted-foreground">
                      {selectedBooking.property_type} •{" "}
                      {selectedBooking.num_windows} windows •{" "}
                      {selectedBooking.num_floors} floor(s)
                    </p>
                    <p className="text-muted-foreground">
                      {format(
                        new Date(selectedBooking.preferred_date),
                        "EEEE, MMMM d, yyyy"
                      )}
                    </p>
                    <p className="text-muted-foreground">
                      {getTimeSlot(selectedBooking.preferred_time)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              {selectedBooking.special_instructions && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Special Instructions
                  </h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    {selectedBooking.special_instructions}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                {selectedBooking.status === "pending" && (
                  <Button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "confirmed");
                      setIsDetailsOpen(false);
                    }}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </Button>
                )}
                {selectedBooking.status === "confirmed" && (
                  <Button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "completed");
                      setIsDetailsOpen(false);
                    }}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Mark Complete
                  </Button>
                )}
                {selectedBooking.status !== "cancelled" &&
                  selectedBooking.status !== "completed" && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        updateBookingStatus(selectedBooking.id, "cancelled");
                        setIsDetailsOpen(false);
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel Booking
                    </Button>
                  )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
