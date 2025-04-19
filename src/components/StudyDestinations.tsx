
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Globe, MapPin, Flag } from "lucide-react";

const destinations = [
  {
    name: "India",
    description: "Top institutions across major Indian cities with diverse programs",
    icon: <Flag className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "IITs, NITs, AIIMS, and other premier institutions"
  },
  {
    name: "United States",
    description: "World-renowned universities with cutting-edge research facilities",
    icon: <Globe className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "Ivy League and other top-tier universities"
  },
  {
    name: "United Kingdom",
    description: "Historic universities with excellent academic reputation",
    icon: <Globe className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "Oxford, Cambridge, and Russell Group universities"
  },
  {
    name: "Canada",
    description: "Quality education with affordable tuition and immigration opportunities",
    icon: <MapPin className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "Toronto, Vancouver, and Montreal universities"
  },
  {
    name: "Australia",
    description: "Innovative programs with strong industry connections",
    icon: <Globe className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "Group of Eight universities"
  },
  {
    name: "Singapore",
    description: "Tech-focused education in a global business hub",
    icon: <MapPin className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />,
    highlight: "NUS, NTU, and other prestigious institutions"
  },
];

const StudyDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            Study Destinations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            Guide GEE helps students access quality education across various destinations 
            worldwide. Explore the regions where our students have successfully gained admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  <div className="flex justify-center">{destination.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">
                    {destination.description}
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{destination.name}</h4>
                  <p className="text-sm">{destination.highlight}</p>
                  <p className="text-sm text-muted-foreground">
                    Contact us for more information about studying in {destination.name}.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
