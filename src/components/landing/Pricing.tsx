import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const residentialPlans = [
  {
    name: "Basic",
    price: 99,
    description: "Perfect for small homes",
    features: [
      "Up to 10 windows",
      "Exterior cleaning",
      "Screen dusting",
      "Same-day service",
    ],
  },
  {
    name: "Standard",
    price: 179,
    description: "Most popular choice",
    popular: true,
    features: [
      "Up to 20 windows",
      "Interior + Exterior",
      "Screen cleaning",
      "Track cleaning",
      "Sill wiping",
    ],
  },
  {
    name: "Premium",
    price: 299,
    description: "Complete care package",
    features: [
      "Unlimited windows",
      "Full interior + exterior",
      "Deep track cleaning",
      "Hard water stain removal",
      "Free gutter inspection",
      "Priority scheduling",
    ],
  },
];

const commercialPlans = [
  {
    name: "Small Business",
    price: 249,
    description: "For retail & small offices",
    features: [
      "Storefronts up to 500 sq ft",
      "Bi-weekly availability",
      "Interior + Exterior",
      "Early morning service",
    ],
  },
  {
    name: "Professional",
    price: 499,
    description: "Growing businesses",
    popular: true,
    features: [
      "Up to 2,000 sq ft",
      "Weekly service available",
      "Multi-floor buildings",
      "Track & frame cleaning",
      "Flexible scheduling",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions",
    features: [
      "Unlimited square footage",
      "Custom scheduling",
      "Dedicated crew",
      "High-rise capability",
      "24/7 emergency service",
      "Monthly reporting",
    ],
  },
];

export function Pricing() {
  const [isCommercial, setIsCommercial] = useState(false);
  const plans = isCommercial ? commercialPlans : residentialPlans;

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/10 text-highlight-foreground font-medium text-sm mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Simple, Fair Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            No hidden fees. Choose the package that fits your needs.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 rounded-xl bg-muted">
            <button
              onClick={() => setIsCommercial(false)}
              className={cn(
                "px-6 py-2.5 rounded-lg font-medium text-sm transition-all",
                !isCommercial
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Residential
            </button>
            <button
              onClick={() => setIsCommercial(true)}
              className={cn(
                "px-6 py-2.5 rounded-lg font-medium text-sm transition-all",
                isCommercial
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                plan.popular 
                  ? "border-primary shadow-lg scale-105 bg-card" 
                  : "border-border/50 hover:border-primary/30 hover:shadow-md bg-card"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-highlight text-highlight-foreground text-xs font-bold rounded-bl-xl flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="text-center pb-6">
                {plan.price ? (
                  <div className="mb-6">
                    <span className="text-5xl font-heading font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">/service</span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <span className="text-3xl font-heading font-bold text-foreground">
                      Custom Quote
                    </span>
                  </div>
                )}
                
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={plan.popular ? "hero" : "outline"}
                  className={cn("w-full", plan.popular && "animate-none")}
                  onClick={scrollToBooking}
                >
                  {plan.price ? "Select Plan" : "Get Quote"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
