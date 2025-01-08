import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    alt: "2D Interior Design Drawing"
  },
  {
    url: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop",
    alt: "3D Rendered Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070&auto=format&fit=crop",
    alt: "2D to 3D Transformation"
  }
];

export const TransitioningGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
            style={{
              backgroundImage: `url('${images[currentIndex].url}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};