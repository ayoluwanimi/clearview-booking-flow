import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface DashboardStats {
  todayBookings: number;
  pendingBookings: number;
  totalCustomers: number;
  completedThisWeek: number;
}

interface RecentBooking {
  id: string;
  booking_number: string;
  status: string;
  preferred_date: string;
  preferred_time: string;
  created_at: string;
  customers: {
    name: string;
    email: string;
  } | null;
  services: {
    name: string;
  } | null;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    todayBookings: 0,
    pendingBookings: 0,
    totalCustomers: 0,
    completedThisWeek: 0,
  });
  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const today = new Date().toISOString().split("T")[0];
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      // Fetch stats
      const [
        { count: todayCount },
        { count: pendingCount },
        { count: customerCount },
        { count: completedCount },
      ] = await Promise.all([
        supabase
          .from("bookings")
          .select("*", { count: "exact", head: true })
          .eq("preferred_date", today),
        supabase
          .from("bookings")
          .select("*", { count: "exact", head: true })
          .eq("status", "pending"),
        supabase.from("customers").select("*", { count: "exact", head: true }),
        supabase
          .from("bookings")
          .select("*", { count: "exact", head: true })
          .eq("status", "completed")
          .gte("updated_at", weekAgo),
      ]);

      setStats({
        todayBookings: todayCount || 0,
        pendingBookings: pendingCount || 0,
        totalCustomers: customerCount || 0,
        completedThisWeek: completedCount || 0,
      });

      // Fetch recent bookings
      const { data: bookings } = await supabase
        .from("bookings")
        .select(`
          id,
          booking_number,
          status,
          preferred_date,
          preferred_time,
          created_at,
          customers (name, email),
          services (name)
        `)
        .order("created_at", { ascending: false })
        .limit(5);

      if (bookings) {
        setRecentBookings(bookings as unknown as RecentBooking[]);
      }
    };

    fetchDashboardData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Bookings</p>
                <p className="text-3xl font-bold text-foreground mt-1">
                  {stats.todayBookings}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-3xl font-bold text-foreground mt-1">
                  {stats.pendingBookings}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-amber-100">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-3xl font-bold text-foreground mt-1">
                  {stats.totalCustomers}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed (7d)</p>
                <p className="text-3xl font-bold text-foreground mt-1">
                  {stats.completedThisWeek}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-green-100">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            Recent Bookings
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentBookings.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No bookings yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {booking.customers?.name || "Unknown Customer"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {booking.services?.name || "Service"} •{" "}
                        {format(new Date(booking.preferred_date), "MMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(booking.status || "pending")}>
                      {booking.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground hidden sm:block">
                      #{booking.booking_number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
