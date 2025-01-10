// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   {
//     image: "/images/transition-1.jpeg",
//     alt: "2D Interior Design Drawing"
//   },
//   {
//    image: "/images/image1.jpeg",
//     alt: "3D Rendered Interior"
//   },
//   {
//     image: "/images/image1.jpeg",
//     alt: "2D to 3D Transformation"
//   }
// ];

// export const TransitioningGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="absolute inset-0">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url('${images[currentIndex].url}')`,
//             }}
//           />
//           <div className="absolute inset-0 bg-black/30" /> {/* Lighter overlay */}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Import images from the images folder
// import image1 from "../../public/images/transition-1.jpeg";
// import image2 from "../../public/images/transition-2.jpeg";
// import image3 from "../../public/images/transition-3.jpeg";

const images = [
  {
    image: "/images/transition-1.jpeg",
    alt: "2D Interior Design Drawing",
  },
  {
    image: "/images/transition-2.jpeg",
    alt: "3D Rendered Interior",
  },
  {
    image: "/images/transition-3.jpeg",
    alt: "2D to 3D Transformation",
  },
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
    <div className="absolute inset-0">
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${images[currentIndex].image}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Lighter overlay */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};