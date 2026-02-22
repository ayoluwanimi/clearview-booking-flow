import { MapPin, Award, Heart } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Always Close to You",
    description: "Local and friendly. We're your neighbours, always ready to help.",
  },
  {
    icon: Award,
    title: "Decades of Skill",
    description: "Outstanding client feedback built on years of professional experience.",
  },
  {
    icon: Heart,
    title: "Treated Like Our Own",
    description: "We consistently deliver thorough work, treating each task as if it were for our own home.",
  },
];

export function Advantages() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            My Advantages
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div key={adv.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <adv.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{adv.title}</h3>
              <p className="text-background/70 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
