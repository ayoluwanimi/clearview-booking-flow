import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ email: "", name: "", message: "", mobile: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-12 text-center">
          Contacts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-foreground font-semibold text-lg">Mobile: 07577306168</p>
              <p className="text-muted-foreground">Mellon St, Newport NP20 1EP</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/447577306168?text=Hello.%20I%20want%20to%20make%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:07577306168"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/a4Pbnm1XW1e9Wx7Y6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">E-mail</label>
              <Input
                type="email"
                placeholder="hello_mail@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border bg-background"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <Input
                placeholder="Robert Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border bg-background"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <Textarea
                placeholder="Hello. I would like to order window cleaning and garden cleaning."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="border-border bg-background resize-none"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Mobile</label>
              <Input
                type="tel"
                placeholder="0 7468 111 111"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="border-border bg-background"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm"
            >
              {isSubmitting ? "Sending..." : "Application"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
