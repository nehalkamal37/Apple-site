import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: 'About Us', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Prescriber Portal', href: '/prescriber-portal', current: location.pathname === '/prescriber-portal' },

    { name: 'Patient Resources', href: 'patient-resources', current: location.pathname === '/patient-resources' },
    { name: 'Contact Us', href: '/contact', current: location.pathname === '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy', current: location.pathname === '/privacy-policy' },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-subtle' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={location.pathname.startsWith('/es') ? '/es' : '/'} className="flex items-center">

         {/* <Link to="/" className="flex items-center"> */}
          {/* <img src="logo.png" alt="Apple Specialty Pharmacy" className="h-12 w-auto " /> */}
<img
  src="logo.png"
  alt="Apple Specialty Pharmacy"
  style={{ width: '70px', height: 'auto' }}
/>

            <div className="ml-3 flex flex-col">
              <span className="text-lg font-semibold text-primary-700">Apple Specialty</span>
              <span className="text-sm text-primary-600">Pharmacy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-primary-600 px-1 py-2 text-sm font-medium transition-colors">
                Home
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">English</Link>
                <Link to="/es" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Español</Link>
              </div>
            </div>
           
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'text-primary-700 border-b-2 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600'
                } px-1 py-2 text-sm font-medium transition-colors`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
               <div className="container-custom py-4 space-y-1">
              <div className="border-b border-gray-100 pb-2 mb-2">
                <span className="block text-xs font-semibold text-gray-500 mb-1 px-3">Home</span>
                <Link to="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 rounded-md">English</Link>
                <Link to="/es" className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 rounded-md">Español</Link>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};