import { Droplets, Layers, Home, Car, Zap, Sun, PaintBucket, RotateCcw } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    subtitle: "Interior and exterior",
  },
  {
    icon: Layers,
    title: "Glass and Mirror Cleaning",
    subtitle: "",
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    subtitle: "",
  },
  {
    icon: Car,
    title: "Driveway Cleaning",
    subtitle: "",
  },
  {
    icon: Zap,
    title: "Power/Pressure Washing",
    subtitle: "",
  },
  {
    icon: Home,
    title: "Rooftop/Skylight Cleaning",
    subtitle: "",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    subtitle: "",
  },
  {
    icon: PaintBucket,
    title: "Doors and Windows Painting",
    subtitle: "",
  },
  {
    icon: RotateCcw,
    title: "Repainting Driveway",
    subtitle: "",
  },
];

export function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
            Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything will shine with cleanliness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors" />
              </div>
              {service.subtitle && (
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                  {service.subtitle}
                </p>
              )}
              <h3 className="font-heading font-semibold text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
