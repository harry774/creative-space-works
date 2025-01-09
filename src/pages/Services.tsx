import { motion } from "framer-motion";
import { Box, PenTool, Home, Building2, Layout, Image } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive design solutions for your creative needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's bring your vision to life together
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Contact"
              className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-md hover:bg-sage-600 transition-colors duration-200"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "3D Modeling",
    description:
      "High-quality 3D models for products, architecture, and visualization",
    icon: <Box className="w-6 h-6" />,
  },
  {
    title: "Rendering",
    description:
      "Photorealistic rendering services bringing your designs to life",
    icon: <Image className="w-6 h-6" />,
  },
  {
    title: "Graphic Design",
    description:
      "Creative design solutions for branding, marketing, and digital media",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Architecture",
    description:
      "Innovative architectural design for residential and commercial projects",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: "Interior Design",
    description:
      "Beautiful and functional interior spaces that inspire and delight",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions for digital products and experiences",
    icon: <Layout className="w-6 h-6" />,
  },
];

export default Services;