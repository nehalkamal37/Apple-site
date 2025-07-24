import { Award, Users, Clock, ShieldCheck, Briefcase as BriefcaseMedical, Building } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const AboutPage = () => {
  return (
    <>
      <Hero
      
          title={<h1 className="text-4xl md:text-5xl font-bold text-white">About Apple Specialty Pharmacy</h1>}
          subtitle={<span className="text-xl md:text-2xl text-primary-200">Delivering specialized care and personalized medication management since 2005</span>}
        bgImage="https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg"
      >
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
          
        </div>
      </Hero>
      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg" 
              alt="Pharmacist counseling a patient" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional pharmacy care with a focus on specialized medications, providing comprehensive support to patients with complex medical conditions while working closely with healthcare providers to optimize outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Vision</h3>
              <p className="text-gray-700">
                To be the leading specialty pharmacy that transforms patient lives through innovative medication management, personalized care, and seamless healthcare collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Values */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The principles that guide our patient care and business practices
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
            <p className="text-gray-600">
              We put patients first, tailoring our services to meet individual needs and ensuring the best possible health outcomes.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6" aria-hidden="true"/>
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from medication dispensing to patient education and support services.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6" aria-hidden="true"/>
            </div>
            <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
            <p className="text-gray-600">
              We ensure our team is accessible and responsive, providing prompt assistance and support when patients need it most.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6" aria-hidden="true"/>
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest ethical standards in all our practices, ensuring transparency, honesty, and confidentiality.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <BriefcaseMedical className="h-6 w-6" aria-hidden="true"/>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p className="text-gray-600">
              Our team maintains specialized knowledge and skills to provide expert guidance on complex medication therapies.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300" animation>
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <Building className="h-6 w-6" aria-hidden="true"/>
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">
              We are committed to supporting the communities we serve through education, outreach, and charitable initiatives.
            </p>
          </Card>
        </div>
      </Section>

      {/* Accreditations & Licenses 
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Licenses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of quality and compliance in specialty pharmacy services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Accreditations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>URAC Specialty Pharmacy Accreditation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ACHC (Accreditation Commission for Health Care)</span>
              </li>
               
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>NABP Digital Pharmacy Accreditation</span>
              </li>
               
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CPPA (Center for Pharmacy Practice Accreditation)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Licenses & Certifications</h3>
            <ul className="space-y-3">
              
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Licensure status pending confirmation</span>

              </li>
              
              
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>DEA Certification</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>HIPAA Compliance Certification</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Board of Pharmacy Certification</span>
              </li>
            </ul>
          </motion.div>
          
        </div>
      </Section>
*/}

     

    </>
  );
};

export default AboutPage;