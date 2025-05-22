import { Link } from 'react-router-dom';
import { 
  PillIcon, 
  Truck, 
  HeartPulse, 
  ShieldCheck, 
  Users, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { FeatureCard } from '../components/home/FeatureCard';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <Hero
        title="Modern Care, Personalized Precision"
        subtitle="Apple Specialty Pharmacy delivers specialized medications with exceptional care and support for patients with complex conditions."
        bgImage="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg"
        height="lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg" 
            as={Link} 
            to="/contact"
          >
            Contact Us
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            as={Link} 
            to="/prescriber-portal"
          >
            Prescriber Portal
          </Button>
        </div>
      </Hero>

      {/* Services Preview */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Specialized Care for Complex Conditions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comprehensive pharmacy services tailored to your unique healthcare needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<PillIcon className="h-6 w-6" />}
            title="Specialty Medications"
            description="Access to specialized medications for complex and chronic conditions with expert guidance."
            delay={0.1}
          />
          <FeatureCard
            icon={<Truck className="h-6 w-6" />}
            title="Free Delivery"
            description="Convenient and reliable medication delivery directly to your doorstep at no additional cost."
            delay={0.2}
          />
          <FeatureCard
            icon={<HeartPulse className="h-6 w-6" />}
            title="Patient Support"
            description="Comprehensive support programs including financial assistance and educational resources."
            delay={0.3}
          />
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="primary" 
            as={Link} 
            to="/services"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
          >
            View All Services
          </Button>
        </div>
      </Section>

      {/* About Preview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Apple Specialty Pharmacy?</h2>
            <p className="text-gray-600 mb-6">
              At Apple Specialty Pharmacy, we combine modern healthcare technology with personalized service to provide an exceptional experience for our patients and healthcare partners.
            </p>
            
            <ul className="space-y-4">
              <li className="flex">
                <ShieldCheck className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">URAC Accredited</h3>
                  <p className="text-gray-600">Meeting the highest standards for healthcare quality and safety.</p>
                </div>
              </li>
              <li className="flex">
                <Users className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Dedicated Care Team</h3>
                  <p className="text-gray-600">Personalized support from experienced healthcare professionals.</p>
                </div>
              </li>
              <li className="flex">
                <Phone className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">24/7 Clinical Support</h3>
                  <p className="text-gray-600">Around-the-clock access to pharmacists and care coordinators.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button 
                variant="primary" 
                as={Link} 
                to="/about"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg" 
              alt="Pharmacist helping a patient" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients who rely on our specialized care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6" animation>
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4 flex-grow">
                "Apple Specialty Pharmacy has made managing my medication so much easier. Their team is incredibly knowledgeable and always takes the time to answer my questions."
              </blockquote>
              <footer>
                <p className="font-medium text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-500">Patient since 2023</p>
              </footer>
            </div>
          </Card>

          <Card className="p-6" animation>
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4 flex-grow">
                "Their delivery service is always on time, and the care team checks in regularly. It's the personal touch that sets them apart from other pharmacies I've used."
              </blockquote>
              <footer>
                <p className="font-medium text-gray-900">James T.</p>
                <p className="text-sm text-gray-500">Patient since 2022</p>
              </footer>
            </div>
          </Card>

          <Card className="p-6" animation>
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4 flex-grow">
                "The financial assistance program they helped me find has been life-changing. I can now afford my medications without worrying about the cost."
              </blockquote>
              <footer>
                <p className="font-medium text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-500">Patient since 2024</p>
              </footer>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="white" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience better pharmacy care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can support your healthcare journey with personalized service and specialized medications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="lg" 
              as={Link} 
              to="/contact"
            >
              Contact Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              as={Link} 
              to="/services"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;