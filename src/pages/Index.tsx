
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GuidanceSlider from "@/components/GuidanceSlider";
import CollegeSection from "@/components/CollegeSection";
import About from "@/components/About";
import Services from "@/components/Services";
import StudyDestinations from "@/components/StudyDestinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <GuidanceSlider />
      <CollegeSection />
      <About />
      <Services />
      <StudyDestinations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
