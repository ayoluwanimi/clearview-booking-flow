import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Shield, Award } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Water droplets */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="droplet"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
        
        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glass effect shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Professional Window Cleaning Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Let The Light
            <span className="block mt-2">
              <span className="text-highlight">Shine</span> In
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional window cleaning services that make your world sparkle. 
            Crystal clear views, every single time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              Book Now
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToServices}
            >
              View Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <div className="p-2 rounded-lg bg-white/10">
                <Star className="h-5 w-5 text-highlight fill-highlight" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">5-Star Rated</div>
                <div className="text-xs text-white/60">500+ Reviews</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-white/90">
              <div className="p-2 rounded-lg bg-white/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Fully Insured</div>
                <div className="text-xs text-white/60">& Bonded</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-white/90">
              <div className="p-2 rounded-lg bg-white/10">
                <Award className="h-5 w-5 text-highlight" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">10+ Years</div>
                <div className="text-xs text-white/60">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 animate-bounce-subtle" />
      </button>
    </section>
  );
}
