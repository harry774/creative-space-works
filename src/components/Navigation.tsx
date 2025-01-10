// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { path: "/", label: "Home" },
//     { path: "/services", label: "Services" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-lg shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link
//             to="/"
//             className="text-xl font-semibold tracking-tight text-gray-900 mr-auto"
//             >
//             3D Renders Studio
//           </Link>
//           <div className="flex space-x-8 ml-auto">
//             {links.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`relative text-sm font-medium transition-colors ${
//                   location.pathname === link.path
//                     ? "text-gray-900"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {link.label}
//                 {location.pathname === link.path && (
//                   <motion.div
//                     layoutId="underline"
//                     className="absolute left-0 right-0 h-0.5 bg-sage-500 bottom-[-4px]"
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>
//           <button className="md:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation;
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { path: "/", label: "Home" },
//     { path: "/services", label: "Services" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-lg shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="mr-auto">
//             <img
//               src="/images/homelogo.png"
//               alt="Brand Logo"
//               className="h-32 w-auto" // Adjust the height and width as needed
//             />
//           </Link>
//           <div className="flex space-x-8 ml-auto">
//             {links.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`relative text-sm font-medium transition-colors ${
//                   location.pathname === link.path
//                     ? "text-gray-900"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {link.label}
//                 {location.pathname === link.path && (
//                   <motion.div
//                     layoutId="underline"
//                     className="absolute left-0 right-0 h-0.5 bg-sage-500 bottom-[-4px]"
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>
//           <button className="md:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      } h-16`} // Constrain navigation bar height
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="mr-auto">
            <img
              src="/images/nav-logo.png"
              alt="Brand Logo"
              className="h-14 max-h-full w-auto object-contain" // Constrain logo height within nav bar
            />
          </Link>
          <div className="flex space-x-8 ml-auto">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-xl font-bold transition-colors ${
                  location.pathname === link.path
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-sage-500 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;