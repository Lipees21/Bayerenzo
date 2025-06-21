
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { MapSection } from "@/components/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <BookingForm />
      <Contact />
      <MapSection />
    </div>
  );
};

export default Index;
