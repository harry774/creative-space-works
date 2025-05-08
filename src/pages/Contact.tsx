import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  // Load Calendly script
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Book an appointment virtually or at your place
            </h1>
            <p className="text-xl text-gray-600">
            Let’s discuss your project and bring your ideas to life—We can visit your location, saving you time and ensuring a seamless experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-sage-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@3drendersstudio.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sage-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (437) 982-6367</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-sage-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      7280 Darcel Ave
                      <br />
                      Mississauga, ON, L4T 3T7
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <a href="https://www.instagram.com/3drenders25/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-sage-500 mt-1" />
                  </a>
                  <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Follow us on Instagram</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Schedule a Meeting
            </h2>
            <div className="calendly-inline-widget" data-url="https://calendly.com/nirali-215becig006/30min" style={{ minWidth: '320px', height: '700px' }}></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;