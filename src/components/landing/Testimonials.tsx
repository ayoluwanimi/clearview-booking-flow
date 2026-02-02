import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Downtown Seattle",
    rating: 5,
    text: "Absolutely incredible service! My windows have never looked this clean. The team was professional, on time, and the results speak for themselves. Highly recommend Crystal Clear!",
    image: "SM",
  },
  {
    name: "Michael Chen",
    location: "Bellevue, WA",
    rating: 5,
    text: "I've tried several window cleaning services, but Crystal Clear is by far the best. They got rid of hard water stains that other companies couldn't touch. Worth every penny!",
    image: "MC",
  },
  {
    name: "Jennifer Adams",
    location: "Kirkland, WA",
    rating: 5,
    text: "The booking process was so easy, and the cleaning crew was fantastic. They even cleaned the window tracks without being asked. Now I can finally enjoy my view again!",
    image: "JA",
  },
  {
    name: "Robert Thompson",
    location: "Redmond, WA",
    rating: 5,
    text: "Our commercial building looks brand new thanks to Crystal Clear. They work around our business hours and never disrupt our operations. A+ service!",
    image: "RT",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Customer Love
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Quote className="h-6 w-6 text-primary-foreground" />
            </div>

            {/* Testimonial Card */}
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 pt-12 border border-border/50">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-highlight fill-highlight" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mb-3">
                    {testimonials[currentIndex].image}
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
