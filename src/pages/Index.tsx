import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AboutUs } from "@/components/landing/AboutUs";
import { FeaturedServices } from "@/components/landing/FeaturedServices";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedServices />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
