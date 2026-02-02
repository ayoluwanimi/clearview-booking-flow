import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@crystalclear.com",
    href: "mailto:hello@crystalclear.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Greater Seattle Area, WA",
    href: null,
  },
];

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 7:00 PM" },
  { day: "Saturday", time: "8:00 AM - 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help. Reach out anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Business Hours
              </h3>
            </div>
            <div className="space-y-3">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span className="font-medium text-foreground">{item.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              * Emergency services available 24/7 for commercial clients
            </p>
          </div>

          {/* Quick Message */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white md:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-semibold text-xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-6">
              Book your appointment online or give us a call. We'll help you 
              get the crystal clear views you deserve.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <button 
                onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
