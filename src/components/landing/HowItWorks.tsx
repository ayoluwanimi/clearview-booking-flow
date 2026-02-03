import { FileText, Clock, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: 1,
    title: "Request a free quote",
    color: "from-primary to-primary/80",
  },
  {
    icon: Clock,
    number: 2,
    title: "Choose a convenient time",
    color: "from-accent to-accent/80",
  },
  {
    icon: Sparkles,
    number: 3,
    title: "We clean your windows",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: ThumbsUp,
    number: 4,
    title: "Enjoy spotless results",
    color: "from-highlight to-amber-400",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How it Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our process is simple, efficient, and designed to make your property look its best 
            with minimal effort on your part.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-highlight" />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step) => (
              <div 
                key={step.title}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Step Label */}
                <p className="text-sm text-muted-foreground mb-2">Step {step.number}</p>
                
                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
