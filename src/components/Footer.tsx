
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="py-8 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Guide GEE. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
