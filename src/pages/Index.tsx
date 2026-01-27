import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onBookingClick={() => setIsBookingOpen(true)} />
      <PricingSection onBookingClick={() => setIsBookingOpen(true)} />
      {/* Features and Target Audience hidden on mobile */}
      <div className="hidden lg:block">
        <FeaturesSection />
        <TargetAudienceSection />
      </div>
      <TestimonialsSection />
      <FooterSection />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;