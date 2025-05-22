import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  animation?: boolean;
}

export const Card = ({ 
  children, 
  className = '', 
  shadow = 'md',
  hover = false,
  animation = false,
}: CardProps) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-card',
    lg: 'shadow-lg',
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

  const cardContent = (
    <div className={`
      bg-white rounded-xl overflow-hidden
      ${shadowClasses[shadow]}
      ${hoverClasses}
      ${hover ? 'transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );

  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};