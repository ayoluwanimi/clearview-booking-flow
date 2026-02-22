import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function SparkCTA() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto container-padding text-center">
        <Sparkles className="h-12 w-12 text-primary-foreground/80 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Let Your Windows Sparkle with Brilliance!
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Just get in touch with us, and you'll see why you won't need any other service. 
          We don't just clean windows — we create sparkling experiences.
        </p>
        <Button
          variant="heroOutline"
          size="xl"
          onClick={scrollToContact}
          className="border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
