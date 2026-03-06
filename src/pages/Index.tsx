import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlatformsSection from "@/components/PlatformsSection";
import PortfolioSection from "@/components/PortfolioSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <PlatformsSection />
      <PortfolioSection />
      <PartnershipsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
