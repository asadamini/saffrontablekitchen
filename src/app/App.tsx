import "../styles/fonts.css";
import AnnouncementBar from "../components/AnnouncementBar";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import OrderingFormats from "../components/OrderingFormats";
import MenuSection from "../components/MenuSection";
import CateringSection from "../components/CateringSection";
import HowItWorks from "../components/HowItWorks";
import OfficeCateringCallout from "../components/OfficeCateringCallout";
import AboutSection from "../components/AboutSection";
import QuoteForm from "../components/QuoteForm";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#F0EBE0] pb-[52px] lg:pb-0"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <TrustStrip />
      <OrderingFormats />
      <MenuSection />
      <CateringSection />
      <HowItWorks />
      <OfficeCateringCallout />
      <AboutSection />
      <QuoteForm />
      <FAQSection />
      <Footer />
    </div>
  );
}
