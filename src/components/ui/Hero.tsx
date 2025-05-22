import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bgImage?: string;
  textColor?: 'light' | 'dark';
  height?: 'sm' | 'md' | 'lg' | 'full';
  centered?: boolean;
  overlay?: boolean;
}

export const Hero = ({
  title,
  subtitle,
  children,
  bgImage,
  textColor = 'light',
  height = 'md',
  centered = true,
  overlay = true,
}: HeroProps) => {
  const heightClasses = {
    sm: 'min-h-[300px] md:min-h-[400px]',
    md: 'min-h-[400px] md:min-h-[500px]',
    lg: 'min-h-[500px] md:min-h-[600px]',
    full: 'min-h-screen',
  };

  const textClasses = {
    light: 'text-white',
    dark: 'text-gray-900',
  };

  const bgStyles = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div 
      className={`relative ${heightClasses[height]} flex items-center`}
      style={bgStyles}
    >
      {bgImage && overlay && (
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
          <motion.h1 
            className={`${textClasses[textColor]} mb-4 font-bold`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className={`${textClasses[textColor]} text-xl md:text-2xl mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};