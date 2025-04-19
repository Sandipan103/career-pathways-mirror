
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px] dark:bg-grid-slate-100/[0.04]" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            Your Career, 
            <span className="text-blue-600 dark:text-blue-400"> Our Guidance</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            Guide GEE supports students in making the right academic decisions after Class 12, 
            helping you navigate the path to your ideal college and future career.
          </p>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
