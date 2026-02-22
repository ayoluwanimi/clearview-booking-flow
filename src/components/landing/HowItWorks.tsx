import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Award } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    text: "Always close to you. Local and friendly.",
  },
  {
    icon: Award,
    text: "Decades of Skill with Outstanding Client Feedback.",
  },
  {
    icon: Sparkles,
    text: "I consistently deliver thorough work, treating each task as if it were for my own home.",
  },
];

export function HowItWorks() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Let Your Windows Sparkle with Brilliance!
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Just get in touch with me, and you'll see why you won't need any other service. We don't just clean windows, we create sparkling experiences.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3"
          >
            Contact
          </Button>
        </div>

        {/* Advantages */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8 text-center">
            My Advantages
          </h3>
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <advantage.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">
                  {advantage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
