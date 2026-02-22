export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="font-heading font-bold text-lg text-foreground">Eugen</p>
          <p className="text-muted-foreground">Worker</p>
          <a
            href="tel:07577306168"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            07577306168
          </a>
        </div>
      </div>
    </footer>
  );
}
