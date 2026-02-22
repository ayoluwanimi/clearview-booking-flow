import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-24 pb-0 bg-background overflow-hidden">
      <div className="container mx-auto container-padding">
        {/* Main Headline */}
        <div className="text-center pt-16 pb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-foreground leading-none tracking-tighter uppercase">
            WINDOWS
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-foreground leading-none tracking-tighter uppercase">
            CLEANER
          </h1>
          <p className="mt-8 text-muted-foreground text-lg">
            Mob: 0 7577 306 168
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/hero-window-cleaning.webp"
            alt="Professional window cleaning with squeegee against blue sky"
            className="w-full h-auto rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
