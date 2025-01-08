// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useToast } from "@/hooks/use-toast";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message sent!",
//       description: "We'll get back to you as soon as possible.",
//     });
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       onSubmit={handleSubmit}
//       className="space-y-6 max-w-md mx-auto"
//     >
//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={formData.name}
//           onChange={(e) =>
//             setFormData({ ...formData, name: e.target.value })
//           }
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="message"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Message
//         </label>
//         <textarea
//           id="message"
//           value={formData.message}
//           onChange={(e) =>
//             setFormData({ ...formData, message: e.target.value })
//           }
//           required
//           rows={4}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-200"
//         />
//       </div>
//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         type="submit"
//         className="w-full bg-sage-500 text-white py-2 px-4 rounded-md hover:bg-sage-600 transition-colors duration-200"
//       >
//         Send Message
//       </motion.button>
//     </motion.form>
//   );
// };

// export default ContactForm;

import { useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  useEffect(() => {
    // Dynamically load the Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <div className="rounded-lg shadow-lg overflow-hidden">
        <iframe
          data-tally-src="https://tally.so/r/nPv0EB?transparentBackground=1"
          width="100%"
          height="600"
          frameBorder="0"
          title="Contact Form"
          className="w-full h-[600px] border-none"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactForm;