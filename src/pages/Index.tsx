import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeaturedServices } from "@/components/landing/FeaturedServices";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Contact } from "@/components/landing/Contact";
import { Testimonials } from "@/components/landing/Testimonials";
import { AboutUs } from "@/components/landing/AboutUs";
import { BookingForm } from "@/components/landing/BookingForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <Contact />
      <Testimonials />
      <AboutUs />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
