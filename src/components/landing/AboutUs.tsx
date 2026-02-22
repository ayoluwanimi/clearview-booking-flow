export function AboutUs() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
            Honest, Reliable.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-primary mb-8">
            Local and Friendly
          </h3>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Our company specializes in a wide range of cleaning services aimed at caring for your home, office, and all surrounding spaces.
            </p>
            <p>
              We offer professional window washing, roof cleaning, driveway cleaning, garden maintenance, and much more to ensure the impeccable appearance of your home or business. Our team of experts is ready to take care of all aspects of cleaning and maintenance of your exterior spaces so you can enjoy their cleanliness and orderliness without spending your precious time on it.
            </p>
            <p>
              Trust us with the care of your outdoor space, and we will ensure its shine and well-maintained appearance throughout the year. Contact us today to find out how we can make your home or business even more attractive and well-kept!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
