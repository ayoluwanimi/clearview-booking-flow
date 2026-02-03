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
          <p className="text-muted-foreground">
            Here what our customers says about us
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              At GEB Company, we don't just clean, we create the clean, calm, and cared-for space you deserve. As your local, trusted partner since 2009, we combine vetted professionals with a meticulous approach for consistently spotless results. We tailor our service to your unique life and priorities, ensuring a sanctuary at home and a polished, professional business. Let us handle the cleaning, so you can focus on what truly matters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For us, cleaning is an act of care. We don't just see dirt we see the potential for peace, comfort, and pride in your environment. Every detail we handle is part of creating a sanctuary for your family or a professional catalyst for your business.
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
