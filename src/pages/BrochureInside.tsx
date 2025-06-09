// src/pages/BrochureInside.tsx
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import {
  Heart,
  BookOpen,
  Truck,
  DollarSign,
  Users,
  Phone,
  Printer,
  MapPin,
  Smartphone,
  Computer,
} from 'lucide-react';

const therapies = [
  'Biologics and biosimilars',
  'Immunomodulators',
  'Immunosuppressants',
  'Injectables',
  'Anti-virals',
  'Oral medications',
  'Topical medications',
];

const insurances = [
  'Most major commercial PPO, EPO, HMO plans',
  'Medicare',
  'Medi-Cal and Medi-Cal Managed Care HMO plans',
];

const stayConnected = [
  'Secure messaging with our pharmacy team',
  'Order and manage prescription refills using your mobile device',
  'Track your order status in real time',
  'Review your account and make secure payments',
];

export default function BrochureInside() {
  return (
    <Section className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ------------------------- */}
        {/* LEFT PANEL (page 2)     */}
        {/* ------------------------- */}
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-teal-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-teal-800">MODERN CARE</h2>
            <h3 className="text-xl font-semibold text-teal-700 mb-6">
              PERSONALIZED PRECISION
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Heart className="text-teal-600 mr-3 flex-shrink-0" />
                <span>
                  Compassionate and knowledgeable clinical support for medication
                  questions and side effect management
                </span>
              </li>
              <li className="flex items-start">
                <Truck className="text-teal-600 mr-3 flex-shrink-0" />
                <span>
                  Free delivery to your doorstep or convenient curbside pickup
                </span>
              </li>
              <li className="flex items-start">
                <BookOpen className="text-teal-600 mr-3 flex-shrink-0" />
                <span>
                  Education and therapy guidance aligned with your provider’s care
                  plan
                </span>
              </li>
              <li className="flex items-start">
                <DollarSign className="text-teal-600 mr-3 flex-shrink-0" />
                <span>
                  Assistance with financial support, including
                  manufacturer-sponsored copay programs
                </span>
              </li>
              <li className="flex items-start">
                <Users className="text-teal-600 mr-3 flex-shrink-0" />
                <span>
                  Care coordination with your providers, labs, and insurance
                </span>
              </li>
            </ul>
          </div>

          {/* Footer logo */}
          <div className="text-center">
            <img
              src="/images/logo.png"
              alt="Apple Specialty Pharmacy logo"
              className="mx-auto w-32"
            />
          </div>
        </div>

        {/* ------------------------- */}
        {/* RIGHT PANEL (page 1)    */}
        {/* ------------------------- */}
        <div className="space-y-8">
          {/* Experience + Puzzle + Therapies & Insurance */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Experience Matters
            </h2>
            <p className="text-gray-600 mb-6">
              At Apple Specialty Pharmacy, your care is a partnership – each
              service a vital piece of the puzzle, coming together to support
              your unique health journey.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {/* Puzzle graphic */}
              <img
                src="/images/brochure-puzzle.png"
                alt="Puzzle graphic"
                className="w-48 flex-shrink-0"
              />

              {/* Side panels */}
              <div className="space-y-6 w-full">
                {/* Therapies */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-700">
                    Therapies We Manage
                  </h3>
                  <ul className="bg-teal-100 p-4 rounded space-y-2">
                    {therapies.map((t) => (
                      <li key={t} className="list-disc list-inside text-gray-800">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insurance */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-700">
                    Health Insurance Accepted
                  </h3>
                  <ul className="bg-teal-100 p-4 rounded space-y-2">
                    {insurances.map((i) => (
                      <li key={i} className="list-disc list-inside text-gray-800">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Get Started + QR + Contact */}
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* QR & CTA */}
              <div className="text-center lg:text-left w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Get Started Today
                </h3>
                <p className="text-gray-600">
                  Let Apple Specialty Pharmacy take the stress out of specialty
                  care.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center">
                    <Phone className="text-teal-600 mr-3" /> 323-999-APPL
                    (2775)
                  </li>
                  <li className="flex items-center">
                    <Printer className="text-teal-600 mr-3" /> 323-955-APPL
                    (2775)
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-teal-600 mr-3" /> 1211 N.
                    Broadway, Ste 300, Santa Ana, CA 92701
                  </li>
                </ul>
              </div>

              {/* Stay Connected & Hours */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Stay Connected */}
                <div className="bg-teal-700 text-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Stay Connected, Anytime, Anywhere
                  </h3>
                  <p className="mb-4">
                    Our secure online and mobile tools help you manage your
                    medications with ease.
                  </p>
                  <ul className="space-y-2">
                    {stayConnected.map((s) => (
                      <li key={s} className="flex items-start">
                        <Smartphone className="mr-3 flex-shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hours & Website */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Hours of Operation
                    </h3>
                    <p>Mondays – Fridays 8:30 AM – 5:00 PM PST</p>
                    <p className="text-gray-600 mt-1">
                      Clinical support available weekdays, weekends and holidays.
                    </p>
                  </div>
                  <div className="flex items-center text-teal-700">
                    <Computer className="mr-2" />
                    <a
                      href="https://www.applespecialtypharmacy.com"
                      className="font-medium"
                    >
                      www.applespecialtypharmacy.com
                    </a>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/brochure-qr.png"
                      alt="Download our pharmacy app"
                      className="w-32 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
