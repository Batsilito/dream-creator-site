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

export interface BookingInfo {
  courseName: string;
  amount: string;
}

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);

  const handleBookingClick = (info?: BookingInfo) => {
    setBookingInfo(info || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pt-12">
      <OfferBanner />
      <Navbar />
      <HeroSection onBookingClick={() => handleBookingClick()} />
      <FeaturesSection />
      {/* Mobile */}
      <div className="lg:hidden">
        <TargetAudienceSection />
        <PricingSection onBookingClick={handleBookingClick} sectionId="courses-mobile" />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <TargetAudienceSection />
        <PricingSection onBookingClick={handleBookingClick} sectionId="courses-desktop" />
      </div>
      <StudentProjectsSection />
      <TestimonialsSection />
      <FooterSection />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} bookingInfo={bookingInfo} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
