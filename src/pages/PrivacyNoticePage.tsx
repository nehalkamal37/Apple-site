import { Shield, Lock, ClipboardList, UserCheck } from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';

const PrivacyNoticePage = () => {
  return (
    <>
      <Hero
        title="Privacy Notice"
        subtitle="How we protect and use your health information"
        bgImage="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
      />

      <Section>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              At Apple Specialty Pharmacy, we are committed to protecting your health information. This Privacy Notice describes how medical information about you may be used and disclosed and how you can get access to this information.
            </p>

            <div className="my-12">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal information (name, address, date of birth, contact details)</li>
                <li>Insurance and payment information</li>
                <li>Health information provided by you, your physician, or healthcare provider</li>
                <li>Prescription and medication history</li>
                <li>Information about your healthcare providers</li>
              </ul>
            </div>

            <div className="my-12">
              <div className="flex items-center mb-4">
                <ClipboardList className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold m-0">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We use your information to provide medication services, communicate with your providers, and meet legal and regulatory requirements. Specifically, we may use your information for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dispensing and delivering your medications</li>
                <li>Processing insurance claims and billing</li>
                <li>Coordinating your care with healthcare providers</li>
                <li>Providing medication counseling and education</li>
                <li>Conducting quality improvement activities</li>
                <li>Contacting you about refill reminders and health-related benefits or services</li>
                <li>Complying with laws and regulations</li>
              </ul>
            </div>

            <div className="my-12">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold m-0">How We Protect Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We maintain physical, electronic, and procedural safeguards to protect your personal and health information. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Secure facilities with controlled access</li>
                <li>Encryption technology for electronic information</li>
                <li>Staff training on privacy and security procedures</li>
                <li>Business Associate Agreements with service providers</li>
                <li>Regular security assessments and updates</li>
              </ul>
            </div>

            <div className="my-12">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold m-0">Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Regarding your health information, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Request to see and copy your records</li>
                <li>Request corrections to your information</li>
                <li>Request restrictions on certain uses and disclosures</li>
                <li>Request confidential communications</li>
                <li>Receive a list of disclosures we have made</li>
                <li>Receive a copy of this notice</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </div>

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-4">Changes to This Notice</h2>
              <p className="text-gray-700">
                We reserve the right to change this notice and make the new notice provisions effective for all protected health information we maintain. If we make significant changes, we will post the revised notice on our website and make copies available at our pharmacy.
              </p>
            </div>

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-4">How to Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this notice or our privacy practices, contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-lg">Apple Specialty Pharmacy</p>
                          <span>1211 N. Broadway, Ste 300
<br/>Santa Ana, CA 92701</span>

                <p>Phone: <span>323-999-APPL (2775)</span> </p>
                <p>Email: privacy@applespecialtypharmacy.com</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Effective Date: April 1, 2025
              </p>
              <p className="text-sm text-gray-600">
                Last Updated: April 1, 2025
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyNoticePage;