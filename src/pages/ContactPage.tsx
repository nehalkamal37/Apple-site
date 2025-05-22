import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { ContactForm } from '../components/common/ContactForm';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Our team is here to help with your specialty pharmacy needs"
        bgImage="https://images.pexels.com/photos/6098034/pexels-photo-6098034.jpeg"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Whether you have questions about our services, need assistance with your medications, or want to learn more about how we can support your healthcare needs, we're here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-600">Toll-free: (800) 123-4567</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@applespecialtypharmacy.com</p>
                  <p className="text-gray-600">support@applespecialtypharmacy.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">123 Pharmacy Way</p>
                  <p className="text-gray-600">Healthville, CA 90210</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hours of Operation</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                  <p className="text-gray-600 mt-2 text-sm">24/7 Clinical Support Available</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="light" className="pb-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our specialty pharmacy location
          </p>
        </div>
        
        <div className="w-full h-96 bg-gray-200 rounded-t-xl overflow-hidden">
          {/* This would be a Google Maps embed in a real implementation */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600 font-medium">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </Section>

      {/* Department Contacts */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to specific departments for specialized assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Patient Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(123) 456-7891</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>patients@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For medication questions, refills, and delivery inquiries.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Clinical Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(123) 456-7892</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>clinical@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For medication side effects, interactions, and clinical questions.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Insurance & Billing</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(123) 456-7893</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>billing@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For insurance coverage, copay assistance, and billing questions.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Prescriber Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(123) 456-7894</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>prescribers@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For healthcare providers submitting prescriptions and referrals.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Financial Assistance</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(123) 456-7895</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>assistance@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For help with medication costs and financial support programs.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 className="text-xl font-semibold mb-4">After-Hours Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <span>(800) 123-4568</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <span>oncall@applespecialtypharmacy.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                For urgent issues outside of regular business hours.
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;