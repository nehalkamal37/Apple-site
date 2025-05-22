import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'white' | 'light' | 'primary' | 'accent';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Section = ({
  children,
  id,
  className = '',
  bgColor = 'white',
  containerWidth = 'lg',
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary-50',
    accent: 'bg-secondary-50',
  };

  const containerClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'w-full',
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-20 ${bgClasses[bgColor]} ${className}`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerClasses[containerWidth]}`}>
        {children}
      </div>
    </section>
  );
};