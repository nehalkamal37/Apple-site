import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  delay?: number;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon,
  href,
  delay = 0 
}: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-6">
        <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/*
        <Link 
          to={href} 
          className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        */}
      </div>
    </motion.div>
  );
};