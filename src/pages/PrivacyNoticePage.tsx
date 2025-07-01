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
              This Privacy Notice is a placeholder pending approval of a fully HIPAA-compliant version.
              We are currently reviewing and updating our privacy practices in accordance with federal regulations.
            </p>

            <p className="text-lg mb-6">
              A finalized HIPAA-compliant Notice of Privacy Practices will be published on this page once approved
              by our legal and compliance teams.
            </p>

            <p className="text-sm text-gray-500 italic">
              (This notice is temporary and for informational purposes only.)
            </p>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Last Updated: June 30, 2025
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyNoticePage;
