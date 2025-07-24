import { 
  BookOpen, 
  HelpCircle, 
  HeartHandshake, 
  ClipboardList, 
  Download,
  Phone
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Faq } from '../components/common/Faq';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { DownloadNoticeModal } from '../components/ui/DownloadModal';

const PatientResourcesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero
        title="Patient Resources"
        subtitle="Information and support to help you manage your health"
        bgImage="https://images.pexels.com/photos/7579369/pexels-photo-7579369.jpeg"
      >
           <div className="flex flex-col sm:flex-row gap-4 justify-center">

           <Button 
                    variant="secondary" 
                    size="lg"
                    // If Button supports 'component' or 'asChild', use that instead. Otherwise, wrap Link or use <a>.
                    // Example using react-router-dom's Link directly:
                    // component={Link} to="/prescriber-portal"
                    // Or, fallback to a simple anchor tag:
                    // asChild
                  >
                     <a href="https://www.rxlocal.com/resources-page/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      RxLocal Resources            </a>
                  </Button>
                </div>
              </Hero>

      {/* Resource Categories */}
      <Section>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Helpful Resources
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access tools and information to support your healthcare journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 bg-primary-600 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-white" aria-hidden="true"/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Educational Materials</h3>
              <p className="text-gray-700 mb-4">
                Access detailed information about your condition and medications to better understand your treatment.
              </p>
           

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-48 bg-secondary-500 flex items-center justify-center">
              <HeartHandshake className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Financial Assistance</h3>
              <p className="text-gray-700 mb-4">
                Information on copay assistance programs, patient foundations, and manufacturer support programs.
              </p>
          

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-48 bg-accent-600 flex items-center justify-center">
              <ClipboardList className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Forms & Documents</h3>
              <p className="text-gray-700 mb-4">
                Download important forms for enrollment, consent, refills, and insurance documentation.
              </p>
               {/* <Button variant="primary" size="md" onClick={() => setModalOpen(true)}>
                 View Forms
</Button>
*/}

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Downloadable Resources 
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Access and download helpful documents and guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">New Patient Enrollment Form</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 325 KB</p>
              {/*
              <Button variant="text" size="sm" onClick={() => setModalOpen(true)}>
                  Download
</Button>

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" aria-hidden="true"/>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">Medication Refill Request</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 215 KB</p>
   

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" aria-hidden="true"/>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">Insurance Information Update</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 180 KB</p>
  

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">Medication Guide & Instructions</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 450 KB</p>
 

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">Financial Assistance Application</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 375 KB</p>
   

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-card p-6 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Download className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1">Authorization for Release of Information</h3>
              <p className="text-gray-700 text-sm mb-2">PDF document - 290 KB</p>
  

<DownloadNoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </motion.div>
        </div>
      </Section>
*/}
      {/* FAQs */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-card p-8">
          <div className="divide-y">
            {/*
            <Faq 
              question="How do I refill my prescription?"
              answer="You can request a refill by calling our pharmacy directly at (123) 456-7890, using our online refill form, or through our mobile app. We recommend requesting refills 5-7 days before you need them to ensure uninterrupted therapy."
            />
            */}
            <Faq 
              question="What should I do if I miss a dose?"
              answer="If you miss a dose, follow the specific instructions provided with your medication or contact our pharmacy for guidance. Do not double up on doses unless specifically instructed to do so by your healthcare provider."
            />
            <Faq 
              question="Does Apple Specialty Pharmacy accept my insurance?"
              answer="We work with most major insurance plans, including Medicare, Medicaid, and commercial insurance. Our team will verify your benefits and coverage before dispensing your medication and will work directly with your insurance provider to maximize your coverage."
            />
            <Faq 
              question="How are my medications delivered?"
              answer="We offer free, secure delivery to your home or preferred location. Medications requiring temperature control are shipped in specialized packaging to maintain proper conditions. We also provide tracking information so you know when to expect your delivery."
            />
            <Faq 
              question="What if I can't afford my medication?"
              answer="Our financial assistance specialists can help you explore options including manufacturer patient assistance programs, copay cards, foundation support, and other resources to help reduce your out-of-pocket costs."
            />
            <Faq 
              question="How do I safely dispose of unused medications?"
              answer="We recommend using community drug take-back programs or medication disposal kiosks. If these aren't available, follow FDA guidelines for safe disposal. We can provide specific instructions for your medication upon request."
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center text-primary-600">
              <HelpCircle className="mr-2 h-5 w-5" />
              <span className="font-medium">Have other questions?</span>
            </div>
            {/*
            <Button 
              variant="primary"
              icon={<Phone className="h-4 w-4" />}
              iconPosition="left"
            >
              Contact Our Support Team
            </Button>
*/}
            <a href="/contact">
  <Button
    variant="primary"
    icon={<Phone className="h-4 w-4" />}
    iconPosition="left"
  >
              Contact Our Support Team
  </Button>
</a>

          </div>
        </div>
      </Section>

      {/* Support Groups */}
      <Section bgColor="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Support & Resources</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Connect with organizations and communities that offer additional support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<Card className="p-6 min-h-[460px] flex flex-col justify-between" animation>
  <div>
    <h3 className="text-xl font-semibold mb-3">Condition-Specific Organizations</h3>
    <p className="text-gray-800 mb-4">
      Connect with national organizations that provide education, research, and support for specific conditions.
    </p>
    <ul className="space-y-2 text-primary-600">
  <li><a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="hover:underline">American Cancer Society</a></li>
  <li><a href="https://www.nationalmssociety.org" target="_blank" rel="noopener noreferrer" className="hover:underline">National Multiple Sclerosis Society</a></li>
  <li><a href="https://www.arthritis.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Arthritis Foundation</a></li>
  <li><a href="https://www.crohnscolitisfoundation.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Crohn's & Colitis Foundation</a></li>
  <li><a href="https://www.psoriasis.org" target="_blank" rel="noopener noreferrer" className="hover:underline">National Psoriasis Foundation</a></li>
</ul>
{/*
    <ul className="space-y-2 text-primary-600">
      <li><a href="#" className="hover:underline">American Cancer Society</a></li>
      <li><a href="#" className="hover:underline">National Multiple Sclerosis Society</a></li>
      <li><a href="#" className="hover:underline">Arthritis Foundation</a></li>
      <li><a href="#" className="hover:underline">Crohn's & Colitis Foundation</a></li>
      <li><a href="#" className="hover:underline">National Psoriasis Foundation</a></li>
    </ul>
    */}
  </div>
 
</Card>

<Card className="p-6 min-h-[460px] flex flex-col justify-between" animation>
  <div>
    <h3 className="text-xl font-semibold mb-3">Financial Resources</h3>
    <p className="text-gray-800 mb-4">
      Programs and foundations that may help with medication costs and financial assistance.
    </p>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 mb-4 rounded">
      <p className="text-sm">
        <strong>Notice:</strong> Apple Specialty Pharmacy has no financial affiliation with
          organizations listed below. These links are provided for patient convenience only.
      </p>
    </div>
    <ul className="space-y-2 text-primary-600">
  <li><a href="https://www.goodrx.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GoodRx</a></li>
</ul>

 
    {/*
        <a href="#" className="hover:underline">NeedyMeds</a></li>
      <li><a href="#" className="hover:underline">GoodRx</a></li>
      <li><a href="#" className="hover:underline">Patient Access Network Foundation</a></li>
      <li><a href="#" className="hover:underline">Partnership for Prescription Assistance</a></li>
    </ul>
    */}
  </div>
 
</Card>

<Card className="p-6 min-h-[460px] flex flex-col justify-between" animation>
  <div>
    <h3 className="text-xl font-semibold mb-3">Support Communities</h3>
    <p className="text-gray-800 mb-4">
      Connect with others who understand what you're going through and share experiences.
    </p>
    <ul className="space-y-2 text-primary-600">
  <li><a href="https://www.inspire.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Patient Community Forums (Inspire)</a></li>
  <li><a href="https://www.caregiveraction.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Caregiver Support Networks</a></li>
  <li><a href="https://www.psychologytoday.com/us/groups" target="_blank" rel="noopener noreferrer" className="hover:underline">Local Support Groups Directory</a></li>
  <li><a href="https://www.supportgroupscentral.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Virtual Support Meetings</a></li>
  <li><a href="https://www.cancer.org/treatment/support-programs-and-services/patient-navigator-program.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Peer Mentoring Programs (ACS)</a></li>
</ul>

   </div>
</Card>





{/*

          <Card className="p-6" animation>
            <h3 className="text-xl font-semibold mb-3">Condition-Specific Organizations</h3>
            <p className="text-gray-600 mb-4">
              Connect with national organizations that provide education, research, and support for specific conditions.
            </p>
            <ul className="space-y-2 text-primary-600">
              <li>
                <a href="#" className="hover:underline">American Cancer Society</a>
              </li>
              <li>
                <a href="#" className="hover:underline">National Multiple Sclerosis Society</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Arthritis Foundation</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Crohn's & Colitis Foundation</a>
              </li>
              <li>
                <a href="#" className="hover:underline">National Psoriasis Foundation</a>
              </li>
            </ul>
          </Card>
<Card className="p-6" animation>
  <h3 className="text-xl font-semibold mb-3">Financial Resources</h3>
  <p className="text-gray-600 mb-4">
    Programs and foundations that may help with medication costs and financial assistance.
  </p>

  <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 mb-4 rounded">
    <p className="text-sm">
      <strong>Notice:</strong> Relationships with the listed entities are currently under review. Final descriptions and affiliations will be updated once confirmed.
    </p>
  </div>

  <ul className="space-y-2 text-primary-600">
    <li>
      <a href="#" className="hover:underline">Patient Advocate Foundation</a>
    </li>
    <li>
      <a href="#" className="hover:underline">NeedyMeds</a>
    </li>
    <li>
      <a href="#" className="hover:underline">GoodRx</a>
    </li>
    <li>
      <a href="#" className="hover:underline">Patient Access Network Foundation</a>
    </li>
    <li>
      <a href="#" className="hover:underline">Partnership for Prescription Assistance</a>
    </li>
  </ul>
</Card>

          <Card className="p-6" animation>
            <h3 className="text-xl font-semibold mb-3">Financial Resources</h3>
            <p className="text-gray-600 mb-4">
              Programs and foundations that can help with medication costs and financial assistance.
            </p>
            <ul className="space-y-2 text-primary-600">
              <li>
                <a href="#" className="hover:underline">Patient Advocate Foundation</a>
              </li>
              <li>
                <a href="#" className="hover:underline">NeedyMeds</a>
              </li>
              <li>
                <a href="#" className="hover:underline">GoodRx</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Patient Access Network Foundation</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Partnership for Prescription Assistance</a>
              </li>
            </ul>
          </Card>

          <Card className="p-6" animation>
            <h3 className="text-xl font-semibold mb-3">Support Communities</h3>
            <p className="text-gray-600 mb-4">
              Connect with others who understand what you're going through and share experiences.
            </p>
            <ul className="space-y-2 text-primary-600">
              <li>
                <a href="#" className="hover:underline">Patient Community Forums</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Caregiver Support Networks</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Local Support Groups Directory</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Virtual Support Meetings</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Peer Mentoring Programs</a>
              </li>
            </ul>
          </Card>
*/}
        </div>
      </Section>
    </>
  );
};

export default PatientResourcesPage;