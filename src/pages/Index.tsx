import HeroSection from "@/components/HeroSection";
import MagicDialogSection from "@/components/MagicDialogSection";
import SalonSection from "@/components/SalonSection";
import CreateHeroSection from "@/components/CreateHeroSection";
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
      <header>
        <Navigation />
      </header>

      <main className="min-h-screen bg-background overflow-x-hidden">
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

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;