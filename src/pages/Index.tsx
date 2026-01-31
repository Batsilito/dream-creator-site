import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudentProjectsSection from "@/components/StudentProjectsSection";
import FooterSection from "@/components/FooterSection";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferBanner from "@/components/OfferBanner";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-12">
      <OfferBanner />
      <Navbar />
      <HeroSection onBookingClick={() => setIsBookingOpen(true)} />
      {/* Mobile: Same order as desktop - Features, Target Audience, then Pricing */}
      <div className="lg:hidden">
        <FeaturesSection />
        <TargetAudienceSection />
        <PricingSection onBookingClick={() => setIsBookingOpen(true)} sectionId="courses-mobile" />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <FeaturesSection />
        <TargetAudienceSection />
        <PricingSection onBookingClick={() => setIsBookingOpen(true)} sectionId="courses-desktop" />
      </div>
      <StudentProjectsSection />
      <TestimonialsSection />
      <FooterSection />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;