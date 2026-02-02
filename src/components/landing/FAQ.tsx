import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does window cleaning take?",
    answer: "The duration depends on the number of windows and their condition. A typical residential home (15-20 windows) takes about 1-2 hours. Commercial properties vary based on size, and we'll provide a time estimate during booking confirmation.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "For exterior-only cleaning, you don't need to be home as long as we have access to your property. For interior cleaning, we recommend having someone present, or you can provide secure entry instructions.",
  },
  {
    question: "What if it rains on my scheduled day?",
    answer: "Light rain doesn't affect our cleaning quality—in fact, rain on clean windows runs off smoothly! However, for heavy rain or storms, we'll contact you to reschedule at no extra charge.",
  },
  {
    question: "Are you insured and bonded?",
    answer: "Yes! Crystal Clear Window Cleaning is fully licensed, insured, and bonded. We carry comprehensive general liability insurance and workers' compensation coverage for your peace of mind.",
  },
  {
    question: "How do you clean high or hard-to-reach windows?",
    answer: "We use professional-grade water-fed poles that can safely reach up to 4 stories from the ground. For taller buildings, we have trained technicians with proper harness systems and equipment.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, cash, and checks. Payment is due upon completion of service. For recurring commercial clients, we offer monthly invoicing options.",
  },
  {
    question: "Do you offer recurring cleaning services?",
    answer: "Absolutely! We offer weekly, bi-weekly, monthly, and quarterly cleaning schedules. Recurring customers receive priority scheduling and discounted rates.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "We understand plans change. You can cancel or reschedule with at least 24 hours notice at no charge. Cancellations with less than 24 hours notice may incur a small fee.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our window cleaning services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
