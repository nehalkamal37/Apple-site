// src/pages/BrochurePage.tsx
import React from 'react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  HeartPulse,
  Truck,
  BookOpen,
  DollarSign,
  Users,
  Smartphone,
  AtSign,
} from 'lucide-react';

const BrochurePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Banner */}
      <Hero
        title="MODERN CARE"
        subtitle="PERSONALIZED PRECISION"
      bgImage="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg"
       // bgImage="/images/brochure-hero.png"
        height="lg"
        textColor="dark"
        overlay={false}
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
                    <a href="trifold" target="_blank">
                      See Our Tri-Fold Brochure
                    </a>
                  </Button>
                </div>
      </Hero>

      {/* 2. Your Experience Matters */}
      <Section bgColor="light">
        <h2 className="text-3xl font-bold mb-4">Your Experience Matters</h2>
        <p className="mb-8 text-gray-700 max-w-2xl">
          At Apple Specialty Pharmacy, your care is a partnership—each service a vital piece of the puzzle,
          coming together to support your unique health journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <HeartPulse />, text: 'Care That Puts You First' },
            { icon: <Truck />, text: 'Free Delivery to Your Door' },
            { icon: <BookOpen />, text: 'Answers That Make Sense' },
            { icon: <DollarSign />, text: 'Help With Costs and Coverage' },
            { icon: <Users />, text: 'Your Health Team, Working Together' },
          ].map((f, i) => (
            <Card key={i} className="flex items-center p-4" shadow="sm">
              <div className="text-primary-600 mr-3">{f.icon}</div>
              <div className="text-gray-800">{f.text}</div>
            </Card>
          ))}
        </div>

        {/* puzzle + QR */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/images/brochure-puzzle.png"
            alt="Puzzle graphic"
            className="w-48"
          />
          <div className="text-center">
            <p className="mb-2 text-gray-700">
              To download our pharmacy app, scan the QR code with your mobile device.
            </p>
            <img
              src="/images/brochure-qr.png"
              alt="Download QR code"
              className="w-32 mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* 3 & 4. Therapies + Insurance */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="font-semibold text-xl mb-3">Therapies We Manage</h3>
            <ul className="list-disc list-inside space-y-1">
              {[
                'Biologics and biosimilars',
                'Immunomodulators',
                'Immunosuppressants',
                'Injectables',
                'Anti-virals',
                'Oral medications',
                'Topical medications',
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-teal-700 text-white">
            <h3 className="font-semibold text-xl mb-3">Health Insurance Accepted</h3>
            <ul className="list-disc list-inside space-y-1">
              {[
                'Most major commercial PPO, EPO, HMO plans',
                'Medicare',
                'Medi-Cal and Medi-Cal Managed Care HMO plans',
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* 5. Get Started Today */}
      <Section bgColor="light">
        <h3 className="text-2xl font-semibold mb-3">Get Started Today</h3>
        <p className="mb-6 text-gray-700">
          Let Apple Specialty Pharmacy take the stress out of specialty care.
        </p>
        <ul className="space-y-2">
          <li> 323-999-APPL (2775)</li>
          <li> 323-955-APPL (2775)</li>
          <li> 1211 N. Broadway, Ste 300, Santa Ana, CA 92701</li>
        </ul>
      </Section>

      {/* 6. Stay Connected */}
      <Section>
        <Card className="p-6 bg-teal-700 text-white">
          <h3 className="text-xl font-semibold mb-3">Stay Connected, Anytime, Anywhere</h3>
          <p className="mb-4">Our secure online and mobile tools help you manage your medications with ease.</p>
          <ul className="space-y-2">
            {[
              'Secure messaging with our pharmacy team',
              'Order and manage prescription refills using your mobile device',
              'Track your order status in real time',
              'Review your account and make secure payments',
            ].map((s) => (
              <li key={s} className="flex items-start">
                <Smartphone className="h-5 w-5 mr-2" /> {s}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* 8. Hours */}
      <Section bgColor="light">
        <h3 className="text-2xl font-semibold">Hours of Operation</h3>
        <p className="mb-1">Mondays – Fridays 8:30 AM – 5:00 PM PST</p>
        <p className="text-gray-600">Clinical support available weekdays, weekends and holidays.</p>
      </Section>

      {/* 9. Visit Us Online */}
      <Section>
        <a
          href="https://www.applespecialtypharmacy.com"
          className="flex items-center justify-center px-4 py-2 text-primary-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign className="mr-2" /> www.applespecialtypharmacy.com
        </a>
      </Section>

      {/* 10. Footer 
      <footer className="text-center py-8 border-t">
        <img src="/images/logo.png" alt="Apple Specialty Pharmacy logo" className="mx-auto mb-4 w-24" />
        <p className="font-semibold">MODERN CARE / PERSONALIZED PRECISION</p>
      </footer>
      */}
    </>
  );
};

export default BrochurePage;
