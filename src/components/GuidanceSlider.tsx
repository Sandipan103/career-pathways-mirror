
import ImageSlider from "./ImageSlider";

// The guidance images will come from the Google Drive folder
// Replace these with the actual URLs when available
const guidanceImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];

const guidanceTitles = [
  "One-on-One Counseling",
  "Group Workshops",
  "College Fairs",
  "Admission Support",
];

const GuidanceSlider = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors">
            Our Guidance Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
            At Guide GEE, we provide personalized guidance through various interactive sessions
            and programs designed to help students discover their perfect path.
          </p>
        </div>

        <ImageSlider images={guidanceImages} direction="rtl" titles={guidanceTitles} />
      </div>
    </section>
  );
};

export default GuidanceSlider;
