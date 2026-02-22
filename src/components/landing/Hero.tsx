import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle, Users, CreditCard } from "lucide-react";

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
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            WINDOWS
            <span className="block mt-2">CLEANER</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-md mx-auto mb-4">
            Mob: 0 7577 306 168
          </p>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reliable cleaning and maintenance services for homes and businesses. 
            Delivered by a trusted local team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              Get a Free Quote
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">100% Satisfaction Guarantee</h3>
              <p className="text-white/70 text-sm">We guarantee 100% satisfaction if you are not happy we will make it right!</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Fully-Vetted Cleaning Crew</h3>
              <p className="text-white/70 text-sm">Our vetted background checked cleaners ensure quality and peace of mind</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Upfront Pricing & Easy Booking</h3>
              <p className="text-white/70 text-sm">Transparent pricing with no hidden fees and quick booking!</p>
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
