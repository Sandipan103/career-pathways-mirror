
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center transition-colors">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto transition-colors">
            We invite students and parents to reach out to us with any questions about college admissions, 
            career guidance, or our services. Our team is ready to assist you.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 transition-colors">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      +91 98765 43210
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      info@guidegee.com
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      @guidegee_official
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      /guidegeeeducation
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      123, Education Plaza, Main Street,<br />City, State - 123456
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.2088445!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2974264255b%3A0x6ad691115a771dc1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1650450788971!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guide GEE Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
