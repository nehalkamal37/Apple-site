import React, { useState } from 'react';
import { Shield, Lock, ClipboardList, User, Server, Mail, Phone } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } };

const tocItems = [
  { id: "#your-rights", text: "Your Rights", icon: Lock },
  { id: "#your-choices", text: "Your Choices", icon: User },
  { id: "#uses-disclosures", text: "Uses & Disclosures", icon: Server },
  { id: "#responsibilities", text: "Our Responsibilities", icon: Shield },
  { id: "#website-privacy", text: "Website & Online Privacy", icon: Server },
  { id: "#file-complaint", text: "File a Complaint", icon: Mail },
  { id: "#get-copy", text: "Get a Copy of This Notice", icon: ClipboardList },
  { id: "#changes", text: "Changes to This Notice", icon: ClipboardList },
  { id: "#legal-references", text: "Legal References", icon: ClipboardList }
];

const PrivacyPolicy: React.FC = () => {
  const [showTOC, setShowTOC] = useState(false);
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Hero
          title={<h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>}
          subtitle={<span className="text-xl md:text-2xl text-primary-200">Notice of Privacy Practices</span>}
          description={<span className="text-gray-200">Effective Date: July 1, 2025</span>}
          bgImage="https://www.zdnet.com/a/img/resize/91aa4849fd23eeb83bb44efa1771a6297999e0cc/2023/02/28/30dbc73f-cc0e-4d3f-9ac2-260e55f04f28/gettyimages-1350595566.jpg?auto=webp&width=1280"
          className="h-80 md:h-96"
          overlay="rgba(0, 0, 0, 0.5)"
          titleClass="text-4xl md:text-5xl font-bold text-white"
          subtitleClass="text-xl md:text-2xl text-primary-200"
          descriptionClass="text-gray-200"
        />
              <div className="absolute bottom-3 left-0 right-0 text-center">
      <p className="text-gray-200 text-sm md:text-base bg-black/30 inline-block px-4 py-2 rounded-full">
        Effective Date: July 1, 2025
      </p>
    </div>
      </motion.div>

      <Section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6">
          
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-8">

          <motion.div variants={itemVariants} className="sticky top-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 border border-gray-200 z-10">
            <button onClick={() => setShowTOC(!showTOC)} className="flex items-center text-lg font-semibold text-gray-800 hover:text-primary-600">
              <ClipboardList className="mr-2 text-primary-600" />
              {showTOC ? 'Hide Table of Contents' : 'Show Table of Contents'}
            </button>
            {showTOC && (
              <ul className="mt-4 space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.id} className="flex items-center text-gray-700 hover:text-primary-600 transition-colors">
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.article variants={itemVariants} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
         
         
            <div className="p-8 md:p-10 space-y-10">

              <SectionBlock id="your-rights" title="Your Rights" icon={Lock} content={[
                "Get a copy of your medical record.",
                "Correct your medical record.",
                "Request confidential communications.",
                "Request restrictions on how we use or share your information.",
                "Get a list of those with whom we’ve shared your information.",
                "Choose someone to act for you.",
                "File a complaint if you feel your privacy rights are violated."
              ]} />

              <SectionBlock id="your-choices" title="Your Choices" icon={User} content={[
                "Communicate with you about health topics or services.",
                "Include you in patient directories or community outreach.",
                "Share information with family and friends involved in your care.",
                "Share your information for marketing purposes (only with your written permission).",
                "We do not sell your information."
              ]} />

              <SectionBlock id="uses-disclosures" title="Uses & Disclosures" icon={Server} content={[
                "Treat you – share PHI with other health professionals treating you.",
                "Run our pharmacy – improve services and manage operations.",
                "Bill for services – share with health plans or others for payment.",
                "Comply with the law – as required by public health or law enforcement.",
                "Respond to lawsuits and legal actions.",
                "Prevent or report harm – abuse, neglect, threats to safety."
              ]} />

              <SectionBlock id="responsibilities" title="Our Responsibilities" icon={Shield} content={[
                "Maintain the privacy and security of your PHI.",
                "Provide you with this Notice of Privacy Practices.",
                "Follow the duties and privacy practices described in this notice.",
                "Notify you promptly if a breach compromises your PHI.",
                "We do not sell or use your information for marketing without your written permission."
              ]} />

              <SectionBlock id="website-privacy" title="Website & Online Privacy" icon={Server} content={[
                "We collect certain non-PHI data from visitors to our website for analytics and usability (e.g., cookies, browser type, IP address).",
                "This is disclosed under our Website Privacy Policy in compliance with CalOPPA & CCPA/CPRA."
              ]} />

              <SectionBlock id="file-complaint" title="File a Complaint" icon={Mail} content={[
                "Contact our Privacy Officer at privacy@applespecialtypharmacy.com or (323) 999-2775.",
                "Or file directly with the U.S. Department of Health and Human Services (HHS): https://www.hhs.gov/ocr/privacy/hipaa/complaints/.",
                "We will not retaliate against you for filing a complaint."
              ]} />

              <SectionBlock id="get-copy" title="Get a Copy of This Notice" icon={ClipboardList} content={[
                "You may download, print, or request a paper copy of this notice at any time.",
                <a key="pdf" href="/files/Updated ASP Notice of Privacy Practices 20250701.pdf" download className="text-primary-600 underline">Download PDF</a>,
                <a key="docx" href="/files/Updated ASP Notice of Privacy Practices 20250701.docx" download className="text-primary-600 underline">Download DOCX</a>
              ]} />



              <SectionBlock id="changes" title="Changes to This Notice" icon={ClipboardList} content={[
                "We may change this notice, and the changes will apply to all information we have about you.",
                "The revised notice will be posted on our website and available upon request."
              ]} />

              <SectionBlock id="legal-references" title="Legal References" icon={ClipboardList} content={[
                "HIPAA (Health Insurance Portability and Accountability Act of 1996), HITECH Act, FTC Act, California CMIA, CCPA/CPRA, CalOPPA, California Data Breach Law, CAN-SPAM, TCPA, ADA."
              ]} />

          <section id="contact-us" className="scroll-mt-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8 md:p-10 space-y-6">
           
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="p-2 rounded-lg bg-primary-100 mr-4">
      <Mail className="h-6 w-6 text-primary-600" />
    </div>    Contact Us
                </h2>
                <p className="text-gray-700 text-lg">To exercise your rights or for more information, contact our Privacy Officer:</p>

                <ul className="ml-6 space-y-3 text-gray-700 list-disc">
                  <li>
                    <span role="img" aria-label="email">📧</span> Email: <a href="mailto:privacy@applespecialtypharmacy.com" className="text-primary-600 underline">privacy@applespecialtypharmacy.com</a>
                  </li>
                  <li>
                    <span role="img" aria-label="phone">📞</span> Phone: <a href="tel:3239992775" className="text-primary-600 underline">323-999-2775</a>
                  </li>
                  <li>
                    <span role="img" aria-label="mail">✉️</span> Mail: Apple Specialty Pharmacy, 1211 N. Broadway, Ste 300, Santa Ana, CA 92701
                  </li>
                </ul>
              </section>

        
            </div>
       
       
       
          </motion.article>
        </motion.div>
    
            
        
      </Section>
    </>
  );
};

const SectionBlock = ({ id, title, icon: Icon, content }: { id: string, title: string, icon: React.FC<any>, content: React.ReactNode[] }) => (
  <section id={id} className="scroll-mt-20">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-primary-100 mr-4">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="ml-12 space-y-2 text-gray-700 list-disc">
      {content.map((text, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  </section>
);

export default PrivacyPolicy;
