import HeroSection from "@/components/HeroSection";
import MagicDialogSection from "@/components/MagicDialogSection";
import SalonSection from "@/components/SalonSection";
import CreateHeroSection from "@/components/CreateHeroSection";
import DemoChat from "@/components/DemoChat";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      {/* Navigation */}
      <Navigation />

      <main className="min-h-screen bg-background overflow-x-hidden" role="main">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Hero Section */}
        <HeroSection />

        {/* Magic of Dialogue Section */}
        <MagicDialogSection />

        {/* Create Your Salon Section */}
        <SalonSection />

        {/* Bring Your Hero Section */}
        <CreateHeroSection />

        {/* Interactive Demo Chat */}
        <DemoChat />

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;