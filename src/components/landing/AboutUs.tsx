import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
            About us
          </h2>
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2 inline-block">Honest, Reliable. Local and Friendly</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
            About Us
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our company specializes in a wide range of cleaning services aimed at caring for your home, office, and all surrounding spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We offer professional window washing, roof cleaning, driveway cleaning, garden maintenance, and much more to ensure the impeccable appearance of your home or business. Our team of experts is ready to take care of all aspects of cleaning and maintenance of your exterior spaces so you can enjoy their cleanliness and orderliness without spending your precious time on it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trust us with the care of your outdoor space, and we will ensure its shine and well-maintained appearance throughout the year. Contact us today to find out how we can make your home or business even more attractive and well-kept!
            </p>
            <Button variant="link" className="p-0 text-primary font-semibold">
              Read More
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <Droplets className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
