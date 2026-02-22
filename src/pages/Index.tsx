import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeaturedServices } from "@/components/landing/FeaturedServices";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { AboutUs } from "@/components/landing/AboutUs";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SparkCTA } from "@/components/landing/SparkCTA";
import { Advantages } from "@/components/landing/Advantages";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { BookingForm } from "@/components/landing/BookingForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedServices />
      <ServicesGrid />
      <HowItWorks />
      <SparkCTA />
      <Advantages />
      <Testimonials />
      <Contact />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
