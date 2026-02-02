import { Calendar, CheckCircle, Sparkles, Eye } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Choose your service and preferred date in just a few clicks.",
    color: "from-primary to-primary/80",
  },
  {
    icon: CheckCircle,
    title: "Get Confirmation",
    description: "Receive instant booking confirmation via email.",
    color: "from-accent to-accent/80",
  },
  {
    icon: Sparkles,
    title: "We Clean",
    description: "Our professionals arrive and work their magic.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Eye,
    title: "Enjoy the View",
    description: "Love your sparkling clean windows!",
    color: "from-highlight to-amber-400",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Getting your windows cleaned has never been easier. 
            Four simple steps to crystal clear views.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-highlight" />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-highlight text-highlight-foreground font-bold text-sm flex items-center justify-center shadow-gold z-10">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="h-14 w-14 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
