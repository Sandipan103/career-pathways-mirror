
import { BookOpen, FileCheck, Compass, Users } from "lucide-react";

const services = [
  {
    title: "Career Counseling",
    description:
      "Professional guidance to help students identify their strengths, interests, and suitable career paths after Class 12.",
    icon: <Compass className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "College Admission Assistance",
    description:
      "Complete support in selecting and applying to colleges that align with students' career goals and academic profiles.",
    icon: <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Entrance Exam Guidance",
    description:
      "Strategic preparation advice and resources for various entrance exams required for college admissions.",
    icon: <FileCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Application Support",
    description:
      "Assistance with application forms, personal statements, interviews, and other admission requirements.",
    icon: <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
            Guide GEE offers a comprehensive range of services to help students navigate 
            their educational journey after Class 12.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
