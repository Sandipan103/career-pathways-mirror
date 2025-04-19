
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Program</h2>
          <p className="text-lg text-gray-600 mb-8">
            We help students and professionals discover their ideal career paths through comprehensive
            guidance and resources. Our program is designed to provide clear insights into various
            industries and help you make informed decisions about your future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600">
                Professional advice and support to help you make informed career decisions
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-600">
                Up-to-date information about different industries and job markets
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600">
                Resources and guidance for developing essential career skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
