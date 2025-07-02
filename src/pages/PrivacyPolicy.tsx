import React from 'react';
import { Shield, Lock, ClipboardList, User, Server, Mail, Phone } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Hero Banner with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero
          title="Privacy Policy"
          subtitle="Your data security is our top priority"
          description="Last Updated: 07/01/2025"
          bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="h-80 md:h-96"
          overlay="rgba(0, 0, 0, 0.5)"
          titleClass="text-4xl md:text-5xl font-bold text-white"
          subtitleClass="text-xl md:text-2xl text-primary-200"
          descriptionClass="text-gray-200"
        />
               <div className="absolute bottom-3 left-0 right-0 text-center">
      <p className="text-gray-200 text-sm md:text-base bg-black/30 inline-block px-4 py-2 rounded-full">
        Last Updated: July 1, 2025
      </p>
    </div>
      </motion.div>

      {/* Main content with glassmorphism effect */}
      <Section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Intro Card with gradient border */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-blue-50 opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary-100 mr-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Apple Specialty Pharmacy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Apple Specialty Pharmacy ("we," "us," or "our") is committed to protecting your privacy and safeguarding your health information. This Privacy Policy explains how we collect, use, disclose, and protect your information, including PHI under HIPAA, and your rights under federal and California law.
              </p>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <p className="text-primary-700 font-medium">
                  By using our website <a href="https://applespecialtypharmacy.com" className="underline hover:text-primary-800 transition-colors" target="_blank" rel="noopener noreferrer">applespecialtypharmacy.com</a> or our services, you agree to this Privacy Policy.
                </p>
              </div>
              </div>
        
            
          </motion.div>
          

          {/* Table of Contents floating card */}
          <motion.div 
            variants={itemVariants}
            className="sticky top-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 border border-gray-200 z-10"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <ClipboardList className="mr-2 text-primary-600" />
              Table of Contents
            </h3>
            <ul className="space-y-2">
              {[
                { id: "#info-collect", text: "1. Information We Collect", icon: User },
                { id: "#use-info", text: "2. How We Use Your Information", icon: Server },
                { id: "#share-info", text: "3. How We Share Information", icon: Shield },
                { id: "#rights", text: "4. Your Privacy Rights", icon: Lock },
                { id: "#security", text: "5. Data Security", icon: Lock },
                { id: "#contact", text: "8. Contact Us", icon: Mail }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.id} 
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Detailed Article with modern styling */}
          <motion.article
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              {/* Section 1 */}
              <section id="info-collect" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-blue-100 mr-4">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">1. Information We Collect</h3>
                </div>
                
                <div className="ml-12 space-y-6">
                  <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">a. Protected Health Information (PHI)</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Medical history, diagnoses, medications, treatment, and health conditions</li>
                      <li>Insurance and billing information</li>
                      <li>Other data used to identify you or provide pharmacy services</li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">b. Personal Information</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Name, address, phone number, email</li>
                      <li>Payment details</li>
                      <li>Communications with us</li>
                      <li>Information you provide via forms</li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">c. Usage Data & Cookies</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>IP addresses</li>
                      <li>Browser and device information</li>
                      <li>Pages visited and time spent</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                    <p className="mt-3 text-gray-600 italic">You can control cookie preferences via your browser settings.</p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="use-info" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-green-100 mr-4">
                    <Server className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h3>
                </div>
                
                <div className="ml-12">
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Processing and fulfilling prescriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Communicating about medications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Billing and payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Meeting legal requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Improving our services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-primary-100 text-primary-800 p-1 rounded mr-2 mt-1">•</span>
                      <span>Responding to inquiries</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="share-info" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-purple-100 mr-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">3. How We Share Your Information</h3>
                </div>
                
                <div className="ml-12 space-y-6">
                  <div className="p-5 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">HIPAA-Compliant Disclosures</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700 list-disc pl-5">
                        <li>To healthcare providers</li>
                        <li>For payment operations</li>
                        <li>To health plans</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700 list-disc pl-5">
                        <li>To comply with legal requirements</li>
                        <li>To public health authorities</li>
                        <li>To law enforcement as required</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Other Disclosures</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Service providers on our behalf</li>
                      <li>Government authorities</li>
                      <li>Affiliates and business partners</li>
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p className="text-yellow-800 font-medium">We do not sell PHI or personal information.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="rights" className="mb-12 scroll-mt-20">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-red-100 mr-4">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">4. Your Privacy Rights</h3>
                </div>
                
                <div className="ml-12 grid md:grid-cols-2 gap-8">
                  <div className="p-5 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Under HIPAA</h4>
                    <ul className="space-y-3">
                      {[
                        "Right to Access",
                        "Right to Amend",
                        "Right to Accounting of Disclosures",
                        "Right to Request Restrictions",
                        "Right to Confidential Communications"
                      ].map((right, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 mr-3 text-sm font-medium">{index + 1}</span>
                          <span className="text-gray-700">{right}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">California Residents' Rights (CCPA/CPRA)</h4>
                    <ul className="space-y-3">
                      {[
                        "Know what personal information is collected",
                        "Access specific personal information",
                        "Request deletion or correction",
                        "Limit use of sensitive information",
                        "Opt out of sale/sharing"
                      ].map((right, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 text-sm font-medium">{index + 1}</span>
                          <span className="text-gray-700">{right}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sections 5-7 */}
              {[
                {
                  id: "security",
                  title: "5. Data Security",
                  icon: Lock,
                  content: "We use administrative, technical, and physical safeguards to protect your data. No system is completely secure; notify us if you suspect a breach.",
                  color: "green"
                },
                {
                  id: "children",
                  title: "6. Children's Privacy",
                  content: "Our services are not directed to children under 13. We do not knowingly collect data from children under 13.",
                  color: "purple"
                },
                {
                  id: "changes",
                  title: "7. Changes to This Policy",
                  content: "We may update this policy periodically. Changes will be posted with a new 'Last Updated' date.",
                  color: "blue"
                }
              ].map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-6">
                    <div className={`p-2 rounded-lg bg-${section.color}-100 mr-4`}>
                      <Lock className={`h-6 w-6 text-${section.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <div className="ml-12">
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                </section>
              ))}

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-20">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-primary-100 mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">8. Contact Us</h3>
                </div>
                
                <div className="ml-12">
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                    <address className="not-italic space-y-3">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 text-primary-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-lg text-gray-800">Apple Specialty Pharmacy</strong>
                          <span className="text-gray-700">1211 N. Broadway, Ste 300<br />Santa Ana, CA 92701</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary-600 mr-3" />
                        <a href="mailto:requests@applespecialtypharmacy.com" className="text-primary-600 hover:text-primary-800 transition-colors underline">requests@applespecialtypharmacy.com</a>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary-600 mr-3" />
                        <a href="tel:3239992775" className="text-primary-600 hover:text-primary-800 transition-colors underline">(323) 999-2775</a>
                      </div>
                      
                      <div className="pt-2 mt-2 border-t border-gray-200">
                        <span className="text-gray-600">Attn: Privacy Officer</span>
                      </div>
                    </address>
                  </div>
                </div>
              </section>
            </div>
          </motion.article>
        </motion.div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;