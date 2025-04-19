
import PathwayCard from "./PathwayCard";

const pathwaysData = [
  {
    title: "Technology",
    description: "Explore careers in software development, cybersecurity, and IT management",
    icon: "💻",
  },
  {
    title: "Healthcare",
    description: "Discover opportunities in medicine, nursing, and healthcare administration",
    icon: "🏥",
  },
  {
    title: "Business",
    description: "Learn about careers in management, finance, and entrepreneurship",
    icon: "📈",
  },
  {
    title: "Education",
    description: "Find your path in teaching, administration, and educational technology",
    icon: "📚",
  },
  {
    title: "Creative Arts",
    description: "Explore careers in design, media, and digital content creation",
    icon: "🎨",
  },
  {
    title: "Science",
    description: "Discover opportunities in research, laboratories, and innovation",
    icon: "🔬",
  },
];

const Pathways = () => {
  return (
    <section id="pathways" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Pathways</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore different career paths and find the one that matches your interests and skills
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathwaysData.map((pathway) => (
            <PathwayCard
              key={pathway.title}
              title={pathway.title}
              description={pathway.description}
              icon={pathway.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathways;
