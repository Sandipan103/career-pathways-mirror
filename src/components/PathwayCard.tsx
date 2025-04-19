
interface PathwayCardProps {
  title: string;
  description: string;
  icon: string;
}

const PathwayCard = ({ title, description, icon }: PathwayCardProps) => {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className="relative">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PathwayCard;
