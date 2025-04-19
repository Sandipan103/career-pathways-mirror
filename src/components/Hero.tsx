
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="text-blue-600"> Career Path</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore various career pathways and find the perfect direction for your professional journey
          </p>
          <a
            href="#pathways"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Pathways
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
