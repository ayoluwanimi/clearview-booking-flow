import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Oluwatobi Gabriel",
    rating: 5.0,
    review: "Absolutely outstanding window cleaning service. The team was punctual, professional, and paid great attention to detail. Every window was left spotless, streak-free, and looking brand new. They worked efficiently without cutting corners and were very respectful of the property.",
    avatar: "O",
  },
  {
    name: "Oluwatobi Gabriel",
    rating: 4.0,
    review: "Absolutely outstanding window cleaning service. The team was punctual, professional, and paid great attention to detail. Every window was left spotless, streak-free, and looking brand new. They worked efficiently without cutting corners and were very respectful of the property.",
    avatar: "O",
  },
  {
    name: "Oluwatobi Gabriel",
    rating: 4.5,
    review: "Absolutely outstanding window cleaning service. The team was punctual, professional, and paid great attention to detail. Every window was left spotless, streak-free, and looking brand new. They worked efficiently without cutting corners and were very respectful of the property.",
    avatar: "O",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        {/* Hero Image Area */}
        <div className="aspect-[21/9] rounded-2xl bg-muted mb-16 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            Here what our customers says about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(testimonial.rating) 
                            ? "text-highlight fill-highlight" 
                            : "text-muted"
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-5">
                  {testimonial.review}
                </p>

                <Button variant="link" className="p-0 text-primary text-sm">
                  Read More
                </Button>

                {/* Avatar */}
                <div className="mt-4">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
