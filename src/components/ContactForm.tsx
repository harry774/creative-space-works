import { useState } from "react";
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
      {/* <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2> */}
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