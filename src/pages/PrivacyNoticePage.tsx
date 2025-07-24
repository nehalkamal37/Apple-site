import { Shield } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';

const PrivacyNoticePage = () => {
  return (
    <>
      <Hero
        title="Privacy Notice"
        subtitle="HIPAA-Compliant Policy Coming Soon"
        bgImage="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
      />

      <Section>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 text-gray-700">
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold m-0">Notice</h2>
            </div>

            <p className="text-lg mb-6">

             
Apple Specialty Pharmacy (“we,” “us,” or “our”) is committed to protecting your privacy and safeguarding your health information. This Privacy Policy explains how we collect, use, disclose, and protect your information, including protected health information (“PHI”) under the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”), and your rights under federal and California law.

         
            </p>

            <p className="text-lg mb-6">By using our website https://applespecialtypharmacy.com/ or our services, you agree to the following Privacy Policy.

            </p>

            <p className="text-sm text-gray-500 italic">
            </p>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Last Updated:07/01/2025
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyNoticePage;
