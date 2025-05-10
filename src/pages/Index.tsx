import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react"; // Import X for the close button
import { Link } from "react-router-dom";
import { TransitioningGallery } from "@/components/TransitioningGallery";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
};

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = portfolioItems.map((item) => item.image);
    preloadImages(imageUrls)
      .then(() => setIsLoaded(true))
      .catch((error) => console.error("Image preload failed:", error));
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading portfolio...</p>
      </div>
    );
  }
};

const Index = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track the selected image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open/close state

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < portfolioItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : portfolioItems.length - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Add SEO Meta Tags */}
      <Helmet>
        <title>Professional 3D Rendering Services & Architectural Design in Canada | 3D Modeling | 3D Walkthrough rendering video | 3D Renders</title>
        <meta
          name="description"
          content="Explore professional 3D rendering, 2D modeling, 3D modeling, exterior design, and interior design services in Canada. Bring your creative visions to life with expert design solutions."
        />
        <meta
          name="keywords"
          content="3D rendering, 2D modeling, 3D modeling, rendering, exterior design, interior design, GTA rendering, creative design services"
        />
        <meta property="og:title" content="3D Rendering & Design Services | Nirali Bhatt" />
        <meta
          property="og:description"
          content="Explore professional 3D rendering, 2D modeling, 3D modeling, exterior design, and interior design services. Bring your creative visions to life with expert design solutions."
        />
        <meta property="og:url" content="https://3drendersstudio.com" />
        <meta name="author" content="Nirali Bhatt" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex">
        {/* Left content */}
        <div className="w-[40%] bg-white flex items-center justify-center">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Bringing Your Vision to Life
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Expert 3D modeling, rendering, and design services for your creative projects
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Right side gallery */}
        <div className="w-[60%] relative overflow-hidden">
          <TransitioningGallery />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-sage-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl text-left mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl text-left mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-600">
              Explore our latest works and creative projects
            </p>
          </motion.div>

          <Carousel className="w-full max-w-7xl">
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white text-sm">{item.category}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              src={portfolioItems[selectedImageIndex].image}
              alt={portfolioItems[selectedImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

 const IncrementalTitle = ({ value, suffix }) => {
    return (
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        <CountUp end={value} duration={2} suffix={suffix} /> Projects Completed
      </h3>
    );
  };
const features = [
  {
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Quality First",
    description: "Uncompromising attention to detail in every project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Cutting-edge technology and creative solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: <IncrementalTitle value={50} suffix="+" />,
    description: "Proven experienced track record",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v18a1 1 0 001 1h12a1 1 0 001-1V3H5zm6 10v5m4-5v5m-7-5h10"
        />
      </svg>
    ),
  },
];

const portfolioItems = [
  {
    title: "Modern Kitchen Design in GTA",
    category: "Interior Design",
    image: "/images/image1.jpeg",
  },
  {
    title: "Commercial Office Reception",
    category: "Interior Design",
    image: "/images/image2.jpeg",
  },
  {
    title: "Modern Kitchen Design",
    category: "Interior Design",
    image: "/images/image3.jpeg",
  },
  {
    title: "Living Room Design",
    category: "Interior Design",
    image: "/images/image4.jpeg",
  },
  {
    title: "Commercial Plaza",
    category: "Exterior Design",
    image: "/images/image5.jpeg",
  },
  {
    title: "Drawing Room Aesthetic Design",
    category: "Interior Design",
    image: "/images/image6.jpeg",
  },
  {
    title: "Modern Bedroom",
    category: "Interior Design",
    image: "/images/image7.jpeg",
  }, 
  {
    title: "Modern Bedroom",
    category: "Interior Design",
    image: "/images/image8.jpeg",
  }, 
  {
    title: "Modern Kitchen Space",
    category: "Interior Design",
    image: "/images/image9.jpeg",
  }, 
  {
    title: "Modern Drawing Room",
    category: "Interior Design",
    image: "/images/image10.jpeg",
  }, 
  {
    title: "Aesthetic Beroom",
    category: "Interior Design",
    image: "/images/image11.jpeg",
  }, 
  {
    title: "Minimalist Drawing Room",
    category: "Interior Design",
    image: "/images/image12.jpeg",
  }, 
  {
    title: "Modern Bedroom",
    category: "Interior Design",
    image: "/images/image13.jpeg",
  },
  {
    title: "Bed Room Wall Design",
    category: "Interior Design",
    image: "/images/image14.jpeg",
  },
  {
    title: "Commercial Exterior Design",
    category: "Exterior Design",
    image: "/images/image15.jpeg",
  },
  {
    title: "Farmhouse Design",
    category: "Exterior Design",
    image: "/images/image16.jpeg",
  },
  {
    title: "Office Working Space",
    category: "Interior Design",
    image: "/images/image17.jpeg",
  },
  {
    title: "Office Working Space",
    category: "Interior Design",
    image: "/images/image18.jpeg",
  },
  {
    title: "Villa Design",
    category: "Exterior Design",
    image: "/images/image19.jpeg",
  },
  {
    title: "Villa Design in Canada",
    category: "Exterior Design",
    image: "/images/image20.jpeg",
  },
  {
    title: "Farm house Living Room",
    category: "Interior Design",
    image: "/images/image21.jpeg",
  },
  {
    title: "Farm House Design in Mississauga",
    category: "Exterior Design",
    image: "/images/image22.jpeg",
  },
];

export default Index;