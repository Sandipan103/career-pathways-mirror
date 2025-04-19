
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            About Guide GEE
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            With over a decade of experience, Guide GEE has been helping students discover their 
            ideal career paths through comprehensive guidance and resources. Our program is designed 
            to provide clear insights into various industries and help you make informed decisions 
            about your future after Class 12.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    To guide students toward academic and career success through personalized assistance
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Our Mission</h4>
                  <p className="text-sm">
                    We aim to transform educational guidance by providing personalized support to every student.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                    Our Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    Over 10 years of expertise in educational counseling and college admissions
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Our Experience</h4>
                  <p className="text-sm">
                    With a decade of experience, we've helped thousands of students find their perfect college match.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                    Our Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    A student-centered approach focusing on individual goals and aspirations
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Our Approach</h4>
                  <p className="text-sm">
                    We believe in understanding each student's unique needs and creating personalized pathways to success.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
