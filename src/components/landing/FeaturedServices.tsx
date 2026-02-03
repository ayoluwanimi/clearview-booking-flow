import { Play, Droplets, Leaf, Home } from "lucide-react";

const serviceCategories = [
  {
    icon: Droplets,
    title: "Windows & Glass",
    color: "text-primary",
    services: [
      "Window Washing (Interior/Exterior)",
      "Glass & Mirror Cleaning",
      "Skylight Cleaning",
    ],
  },
  {
    icon: Home,
    title: "Exterior Surfaces",
    color: "text-accent",
    services: [
      "Pressure Washing",
      "Driveway Cleaning & Sealing",
      "Patio Cleaning",
    ],
  },
  {
    icon: Leaf,
    title: "Garden & Maintenance",
    color: "text-green-600",
    services: [
      "Garden Cleaning & Tidying",
      "Ongoing Garden Maintenance",
      "Doors & Windows Painting",
    ],
  },
  {
    icon: Home,
    title: "Gutters & Roof",
    color: "text-highlight",
    services: [
      "Gutter Cleaning",
      "Gutter Repair & Maintenance",
      "Roof Cleaning",
      "Solar Panel Cleaning",
    ],
  },
];

export function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Featured Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the services we provide to keep your property clean and well-maintained.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                  <Droplets className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <Play className={`h-5 w-5 ${category.color} fill-current`} />
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Services List */}
                <ul className="space-y-2 pl-8">
                  {category.services.map((service) => (
                    <li 
                      key={service} 
                      className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <span className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded">
            1 / 2
          </span>
          <button className="w-8 h-8 rounded bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <span className="sr-only">Next</span>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
