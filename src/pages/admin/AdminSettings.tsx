import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Info } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your admin preferences
        </p>
      </div>

      {/* Settings Cards */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Info className="h-5 w-5 text-muted-foreground" />
              <p className="text-muted-foreground">
                Settings functionality coming soon. You'll be able to manage services, 
                email notifications, and more from here.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
