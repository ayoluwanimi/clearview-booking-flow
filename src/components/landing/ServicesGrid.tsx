import { Droplets, Home, Sun, Paintbrush, Wrench, Leaf, CloudRain, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    subtitle: "Interior and exterior",
  },
  {
    icon: Home,
    title: "Glass and Mirror Cleaning",
    subtitle: "Crystal clear finish",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    subtitle: "Prevent blockages",
  },
  {
    icon: Waves,
    title: "Driveway Cleaning",
    subtitle: "Restore your driveway",
  },
  {
    icon: CloudRain,
    title: "Power/Pressure Washing",
    subtitle: "Deep clean surfaces",
  },
  {
    icon: Sun,
    title: "Rooftop/Skylight Cleaning",
    subtitle: "Safe & thorough",
  },
  {
    icon: Leaf,
    title: "Solar Panel Cleaning",
    subtitle: "Maximize efficiency",
  },
  {
    icon: Paintbrush,
    title: "Doors & Windows Painting",
    subtitle: "Repainting & refresh",
  },
];

export function ServicesGrid() {
  return (
    <section id="all-services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything will shine with cleanliness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group card-hover border-border/50 bg-card overflow-hidden text-center"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
