import { Lock, Shield, Database, Clock } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { LoginForm } from '../components/prescriber/LoginForm';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

const PrescriberPortalPage = () => {
  return (
    <>
      <Hero
        title="Prescriber Portal"
        subtitle="Secure access to patient information and referral management"
        bgImage="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
      />
{/*
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8" shadow="lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Prescriber Login</h2>
              <LoginForm />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portal Benefits</h2>
            <p className="text-gray-700 mb-6">
              Our secure prescriber portal provides healthcare professionals with efficient access to patient information and streamlined prescription management.
            </p>
            
            <ul className="space-y-6 mb-8">
              <li className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Database className="h-5 w-5" aria-hidden="true"/>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Electronic Referrals</h3>
                  <p className="text-gray-600">Submit and track referrals electronically, reducing paperwork and improving efficiency.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true"/>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Real-Time Updates</h3>
                  <p className="text-gray-600">Receive instant notifications on prescription status, approvals, and patient adherence.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="h-5 w-5" aria-hidden="true"/>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Secure Communication</h3>
                  <p className="text-gray-600">Exchange HIPAA-compliant messages with our pharmacy team regarding patient care.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Prior Authorization Support</h3>
                  <p className="text-gray-600">Simplified process for submitting and tracking prior authorizations with insurance companies.</p>
                </div>
              </li>
            </ul>
            
          </motion.div>
        </div>
      </Section>
*/}
      {/* Portal Features */}
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portal Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to streamline workflow and enhance patient care
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
            <img 
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" 
              alt="Electronic Referrals" 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold mb-3">Electronic Referrals</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Submit referrals securely online</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Upload supporting documentation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Track referral status in real-time</span>
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
            <img 
               src="/images/patient.webp"
              // src="https://images.pexels.com/photos/4031409/pexels-photo-4031409.jpeg" 
              alt="Patient Management" 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold mb-3">Patient Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>View current medications and dosages</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access adherence reports</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Monitor patient progress</span>
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
            <img 
              src="https://images.pexels.com/photos/4047073/pexels-photo-4047073.jpeg" 
              alt="Clinical Support" 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-semibold mb-3">Clinical Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure messaging with our clinical team</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to clinical resources and guidelines</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Consultation with specialty pharmacists</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* How to Get Started */}
      <Section>
        <div className="text-center mb-12">
  {/* Insight button */}
  <a
    href="https://applerx.pbtnow.com/applerx/insight/_security.aspx"
    target="_blank" // open in new tab (optional)
    rel="noopener noreferrer"
    className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-700 transition mb-6"
  >
    ASP Portal
  </a>

  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Setting up portal access is quick and secure
  </p>
</div>

       

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10 mr-8">
                  <span className="font-bold">1</span>
                </div>
<div className="pt-1">
  <h3 className="text-xl font-semibold text-primary-700 mb-2">Request Access</h3>
  <p className="text-gray-600 mb-3">
    Send a request to our portal via{" "}
    <a
      href="mailto:Access@applespecialtypharmacy.com"
      className="text-primary-600 font-medium hover:underline"
    >
      Access@applespecialtypharmacy.com
    </a>{" "}
    or contact our Provider Specialist at{" "}
    <a href="tel:2137742775" className="text-primary-600 font-medium hover:underline">
      (213) 774-2775
    </a>.
  </p>

  
</div>

{/*
                <div className="pt-1">
                 
                  <p className="text-gray-600">
                    Complete the online access request form or contact our prescriber relations team directly at (123) 456-7890.
                  </p>
                </div>
                */}
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10 mr-8">
                  <span className="font-bold">2</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Verification</h3>
                  <p className="text-gray-600">
                    We'll verify your credentials and practice information to ensure secure access to patient data.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10 mr-8">
                  <span className="font-bold">3</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Account Setup</h3>
                  <p className="text-gray-600">
                    You'll receive account credentials via secure email with instructions to set up your personalized login.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center z-10 mr-8">
                  <span className="font-bold">4</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Training & Support</h3>
                  <p className="text-gray-600">
                    Access our online training resources or schedule a personal walkthrough with our support team to get started.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          {/*
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg">Request Portal Access Today</Button>
          </div>
          */}
        </div>
      </Section>
    </>
  );
};

export default PrescriberPortalPage;