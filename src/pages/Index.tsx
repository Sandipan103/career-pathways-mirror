
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pathways from "@/components/Pathways";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Pathways />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
