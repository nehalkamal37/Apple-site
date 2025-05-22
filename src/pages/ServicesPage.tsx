import { 
  PillIcon, 
  HeartPulse, 
  Truck, 
  Stethoscope, 
  ClipboardList, 
  BadgeDollarSign,
  ListChecks,
  Microscope,
  BrainCircuit
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { ServiceCard } from '../components/services/ServiceCard';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <>
      <Hero
        title="Our Specialty Services"
        subtitle="Comprehensive medication management and support for complex conditions"
        bgImage="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
      />

      {/* Service Categories */}
      <Section>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Specialty Therapy Areas
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide specialized medication management for a wide range of complex conditions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Dermatology"
            description="Specialized medications for psoriasis, eczema, and other complex skin conditions."
            icon={<Microscope className="h-6 w-6" />}
            href="/services/dermatology"
            delay={0.1}
          />
          <ServiceCard
            title="Rheumatology"
            description="Comprehensive therapy management for rheumatoid arthritis, lupus, and autoimmune disorders."
            icon={<Stethoscope className="h-6 w-6" />}
            href="/services/rheumatology"
            delay={0.2}
          />
          <ServiceCard
            title="Oncology"
            description="Supportive care medications and specialized therapies for cancer treatment."
            icon={<HeartPulse className="h-6 w-6" />}
            href="/services/oncology"
            delay={0.3}
          />
          <ServiceCard
            title="Neurology"
            description="Medications for multiple sclerosis, epilepsy, and other neurological conditions."
            icon={<BrainCircuit className="h-6 w-6" />}
            href="/services/neurology"
            delay={0.4}
          />
          <ServiceCard
            title="Gastroenterology"
            description="Specialized therapies for Crohn's disease, ulcerative colitis, and GI disorders."
            icon={<PillIcon className="h-6 w-6" />}
            href="/services/gastroenterology"
            delay={0.5}
          />
          <ServiceCard
            title="Infectious Disease"
            description="Medications for HIV/AIDS, hepatitis, and other infectious conditions."
            icon={<Microscope className="h-6 w-6" />}
            href="/services/infectious-disease"
            delay={0.6}
          />
        </div>
      </Section>

      {/* Patient Support */}
      <Section bgColor="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Patient Support</h2>
            <p className="text-gray-700 mb-6">
              At Apple Specialty Pharmacy, we go beyond simply dispensing medications. Our dedicated team provides comprehensive support services to ensure you receive the maximum benefit from your therapy.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Personalized Care Plans</h3>
                  <p className="text-gray-600">Customized medication management plans tailored to your specific needs and treatment goals.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <BadgeDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Financial Assistance</h3>
                  <p className="text-gray-600">Help navigating insurance coverage, copay assistance programs, and manufacturer patient support.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <ListChecks className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Medication Education</h3>
                  <p className="text-gray-600">Comprehensive education on your medications, potential side effects, and administration techniques.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Free Delivery</h3>
                  <p className="text-gray-600">Convenient home delivery of your medications with temperature-controlled packaging when required.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" 
              alt="Pharmacist helping a patient" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </Section>

      {/* Prescriber Services */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prescriber Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting healthcare providers with efficient, integrated pharmacy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Referral System</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure electronic referral submission</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time status updates on patient prescriptions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Electronic prior authorization assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integration with major EMR systems</span>
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
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Clinical Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Direct access to clinical pharmacists</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Medication therapy management</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Drug interaction reviews</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Patient adherence monitoring and reporting</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless experience from prescription to delivery
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <motion.div 
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:text-right mb-8 md:mb-0">
                <div className="bg-white rounded-xl shadow-card p-6 inline-block">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">1. Referral</h3>
                  <p className="text-gray-600">
                    We receive a prescription or referral from your healthcare provider through our secure electronic system or traditional methods.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold">1</span>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden md:flex justify-center order-1">
                <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <div className="mb-8 md:mb-0 md:order-2">
                <div className="bg-white rounded-xl shadow-card p-6 inline-block">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">2. Intake & Insurance Verification</h3>
                  <p className="text-gray-600">
                    Our team contacts you to complete the intake process and works with your insurance to verify coverage and determine any out-of-pocket costs.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:text-right mb-8 md:mb-0">
                <div className="bg-white rounded-xl shadow-card p-6 inline-block">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">3. Clinical Assessment</h3>
                  <p className="text-gray-600">
                    A clinical pharmacist reviews your medication profile and conducts an initial consultation to develop your personalized care plan.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold">3</span>
                </div>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden md:flex justify-center order-1">
                <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold">4</span>
                </div>
              </div>
              <div className="mb-8 md:mb-0 md:order-2">
                <div className="bg-white rounded-xl shadow-card p-6 inline-block">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">4. Medication Delivery</h3>
                  <p className="text-gray-600">
                    Your medications are prepared and delivered to your home, with any necessary supplies and educational materials included.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div 
              className="md:grid md:grid-cols-2 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:text-right">
                <div className="bg-white rounded-xl shadow-card p-6 inline-block">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">5. Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our care team follows up regularly to monitor your progress, address any concerns, and coordinate refills to ensure uninterrupted therapy.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold">5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;