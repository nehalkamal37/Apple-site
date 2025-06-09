// src/pages/TriFoldPage.tsx
import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import {
  HeartPulse,
  Truck,
  BookOpen,
  DollarSign,
  Users,
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

const insurancePlans = [
  'Most major commercial PPO, EPO, HMO plans',
  'Medicare',
  'Medi-Cal and Medi-Cal Managed Care HMO plans',
];

const TriFoldPage: React.FC = () => (
  <>
    {/* === Tri-Fold Inside === */}
    <Section>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* 1. Cover Panel on Mint */}
        <Card className="p-6 bg-teal-100">
          <h2 className="text-3xl font-bold text-teal-700 mb-2">
            MODERN CARE
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            PERSONALIZED PRECISION
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <HeartPulse className="text-teal-600 mr-3" />
              <span>
                Compassionate and knowledgeable clinical support for medication
                questions and side effect management
              </span>
            </li>
            <li className="flex items-start">
              <Truck className="text-teal-600 mr-3" />
              <span>
                Free delivery to your doorstep or convenient curbside pickup
              </span>
            </li>
            <li className="flex items-start">
              <BookOpen className="text-teal-600 mr-3" />
              <span>
                Education and therapy guidance aligned with your provider’s care
                plan
              </span>
            </li>
            <li className="flex items-start">
              <DollarSign className="text-teal-600 mr-3" />
              <span>
                Assistance with financial support, including
                manufacturer-sponsored copay programs
              </span>
            </li>
            <li className="flex items-start">
              <Users className="text-teal-600 mr-3" />
              <span>
                Care coordination with your providers, labs, and insurance
              </span>
            </li>
          </ul>
        </Card>

        {/* 2. “Your Experience Matters” */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Your Experience Matters
          </h2>
          <p className="text-gray-700 mb-4">
            At Apple Specialty Pharmacy, each service we provide is a vital
            piece of the puzzle.
          </p>

          <img
            src="/images/brochure-puzzle.png"
            alt="Puzzle graphic"
            className="w-48 mx-auto mb-4"
          />

          <p className="text-gray-700">
            Together, these pieces fit seamlessly to create your unique
            patient experience designed around your specific needs and
            preferences.
          </p>
        </Card>

        {/* 3 & 4. Therapies + Insurance */}
        <div className="space-y-6">
          <Card className="p-6 bg-teal-700 text-white">
            <h3 className="text-xl font-semibold mb-3">Therapies We Manage</h3>
            <ul className="list-disc list-inside space-y-2">
              {therapies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-teal-700 text-white">
            <h3 className="text-xl font-semibold mb-3">
              Health Insurance Accepted
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {insurancePlans.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  </>
);

export default TriFoldPage;
