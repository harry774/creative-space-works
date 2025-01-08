import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage-100 text-sage-600 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;