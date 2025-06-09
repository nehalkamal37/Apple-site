import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import logo from '../../assets/logo.svg';
import { Fax } from '@mui/icons-material';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src='logo.png' alt="Apple Specialty Pharmacy" className="h-10 w-auto" />
              <div className="ml-3">
                <h3 className="text-white text-lg font-semibold">Apple Specialty</h3>
                <p className="text-gray-400 text-sm">Pharmacy</p>
              </div>
            </div>
            <p className="mb-4 text-gray-400">Modern Care • Personalized Precision</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/prescriber-portal" className="text-gray-400 hover:text-white transition-colors">Prescriber Portal</Link>
              </li>
              <li>
                <Link to="/patient-resources" className="text-gray-400 hover:text-white transition-colors">Patient Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-notice" className="text-gray-400 hover:text-white transition-colors">Privacy Notice</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/non-discrimination" className="text-gray-400 hover:text-white transition-colors">Non-Discrimination</Link>
              </li>
              <li>
                <span className="text-gray-400">License #: 12345678</span>
              </li>
              <li>
                <span className="text-gray-400">NABP: AB-1234567</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <span>1211 N. Broadway, Ste 300
<br/>Santa Ana, CA 92701</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <span>323-999-APPL (2775)</span>
              </li>
              <li className="flex">
                <Fax className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <span>323-955-APPL (2775)</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p>Mon – Fri: 8:30 AM – 5:00 PM PST</p>
                                 </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {year} Apple Specialty Pharmacy. All rights reserved.</p>
          <p className="mt-2">
            Website design is for demonstration purposes. All information is placeholder content.
          </p>
        </div>
      </div>
    </footer>
  );
};