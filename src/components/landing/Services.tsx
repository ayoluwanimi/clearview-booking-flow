import { useEffect, useState } from "react";
import { 
  Home, Building2, Building, Droplets, 
  ArrowDown, Sun, Grid3X3, HardHat 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Building,
  Droplets,
  ArrowDown,
  Sun,
  Grid3x3: Grid3X3,
  HardHat,
};

interface Service {
  id: string;
  name: string;
  description: string;
  base_price: number;
  icon: string | null;
}

export function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("created_at");
      
      if (data) setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            From residential windows to high-rise buildings, we deliver 
            crystal clear results every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon || "Home"] || Home;
            
            return (
              <Card 
                key={service.id} 
                className="group card-hover border-border/50 bg-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="text-2xl font-bold text-primary">${service.base_price}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
