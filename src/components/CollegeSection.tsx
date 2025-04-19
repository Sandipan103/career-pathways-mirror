
import ImageSlider from "./ImageSlider";

// The college images will come from the Google Drive folder
// Replace these with the actual URLs when available
const collegeImages = [
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1569447891824-7a1456b7739a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];

const collegeTitles = [
  "University of Excellence",
  "Tech Institute",
  "Medical College",
  "Business School",
];

const CollegeSection = () => {
  return (
    <section id="colleges" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            Our Partner Colleges
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
            Guide GEE works with reputed colleges across India and abroad to provide 
            the best educational opportunities for our students.
          </p>
        </div>

        <ImageSlider images={collegeImages} direction="ltr" titles={collegeTitles} />
      </div>
    </section>
  );
};

export default CollegeSection;
