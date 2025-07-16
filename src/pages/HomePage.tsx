"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

import {
  Heart,
  BookOpen,
  Truck,
  DollarSign,
  Users,
  Phone,
  Printer,
  Car,
  MessageCircle,
  Pill,
  Check,
  CheckCircle,
} from "lucide-react";
import { Hero } from "../components/ui/Hero";

const experienceItems = [
  { Icon: Heart, text: "Care That Puts You First" },
  { Icon: BookOpen, text: "Free Delivery to Your Door" },
  { Icon: Truck, text: "Answers That Make Sense" },
  { Icon: DollarSign, text: "Help With Costs and Coverage" },
  { Icon: Users, text: "Your Health Team, Working Together" },
];

const stayConnectedItems = [
  { Icon: MessageCircle, text: "Secure messaging with our pharmacy team" },
  { Icon: Pill, text: "Order and manage prescription refills using your mobile device" },
  { Icon: Truck, text: "Track your order status in real time" },
  { Icon: Check, text: "Review your account and make secure payments" },
];

const getStartedItems = [
  { Icon: Phone, text: "323-999-APPL (2775)" },
  { Icon: Printer, text: "323-955-APPL (2775)" },
  { Icon: Car, text: "1211 N. Broadway, Ste 300\nSanta Ana, CA 92701" },
];

const therapies = [
  "HIV/AIDS",
  "Hepatitis C",
  "Rheumatoid Arthritis",
  "Multiple Sclerosis",
  "Oncology",
  "Transplant",
  "Dermatology",
  "Gastroenterology",
  "Other Specialty Conditions",
];

const insurances = [
  "Medicare Part D",
  "Medi-Cal",
  "Covered California",
  "Private Insurance",
  "Commercial Plans",
  "Most Major PBMs",

];

export default function BrochurePage() {
  return (
    <>
      {/* Hero */}
      <Hero
  title="MODERN CARE"
  subtitle="PERSONALIZED PRECISION"
  bgImage="/images/hero.png"
  height="lg"
>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/contact"
      className="inline-flex items-center justify-center rounded-md bg-primary-700 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-primary-800 transition min-w-[44px] min-h-[44px]"
    >
      Contact Us
    </a>

    <a
      href="https://patient.rxlocal.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-primary-300 bg-white text-primary-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 px-6 py-3 text-lg font-semibold shadow transition min-w-[44px] min-h-[44px]"
    >
      Patient Portal
    </a>
  </div>
</Hero>


      <motion.main
        className="container mx-auto p-8 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Row 1 */}
        <motion.section
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Experience Panel */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-primary-900 mb-4">
              Your Experience Matters
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">

              At Apple Specialty Pharmacy, your care is a partnership — each service a vital piece of the puzzle.
            </p>
            <ul className="space-y-4">
              {experienceItems.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex items-center justify-center w-11 h-11 bg-primary-100 rounded-full mr-4">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </span>
                  <span className="text-gray-900 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stay Connected Panel */}
          <motion.div
            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            className="bg-primary-700 text-white rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Stay Connected, Anytime, Anywhere
              </h3>
              <p className="mb-6 leading-relaxed ">
                Our secure online and mobile tools help you manage your medications with ease.
              </p>
              <ul className="space-y-4">
                {stayConnectedItems.map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full mr-3">
                      <Icon className="h-4 w-4 text-primary-700" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/images/phone.jpg"
              alt="A patient using a mobile app on phone"
              className="mt-8 rounded-xl shadow-lg object-cover w-full h-48"
            />
          </motion.div>

          {/* Get Started Panel 
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-primary-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Let Apple Specialty Pharmacy take the stress out of specialty care.
            </p>
            <ul className="space-y-4">
              {getStartedItems.map(({ Icon, text }, i) => (
                <li
                  key={i}
                  className="flex items-center bg-primary-50 rounded-full px-4 py-2 hover:shadow-md transition-shadow min-h-[44px]"
                >
                  <Icon className="h-5 w-5 text-primary-700 mr-3" />
                  <span className="whitespace-pre-wrap font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
*/}
          {/* Get Started Panel */}
<motion.div
  variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
  className="bg-white p-8 rounded-2xl shadow-lg"
>
  <h2 className="text-3xl font-extrabold text-primary-900 mb-4">
    Get Started Today
  </h2>
  <p className="text-gray-800 mb-6 leading-relaxed">
    Let Apple Specialty Pharmacy take the stress out of specialty care.
  </p>
  <ul className="space-y-4">
    {getStartedItems.map(({ Icon, text }, i) => (
      <li
        key={i}
        className="flex items-center bg-primary-50 rounded-full px-4 py-2 hover:shadow-md transition-shadow min-h-[44px]"
      >
        <Icon className="h-5 w-5 text-primary-700 mr-3" />
        <span className="whitespace-pre-wrap font-medium">{text}</span>
      </li>
    ))}

    {/* New Refills Text Number Item */}
    <li
      className="flex items-center bg-primary-50 rounded-full px-4 py-2 hover:shadow-md transition-shadow min-h-[44px]"
    >
      {/* Pill Icon (you can replace it with any icon library you use) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary-700 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 3.75l9 9m-9-9a4.5 4.5 0 010 6.364m0-6.364L3.75 11.25m0 0a4.5 4.5 0 006.364 0m-6.364 0l9 9"
        />
      </svg>
      <span className="whitespace-pre-wrap font-medium">
        Refills Text Number: 657-224-7232
      </span>
    </li>
  </ul>
</motion.div>

        </motion.section>

        {/* Row 2 */}
        <section className="grid lg:grid-cols-3 gap-8 p-8 bg-white rounded-2xl shadow">
          {/* Health Insurance */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Health Insurance Accepted</h3>
            <ul className="space-y-3">
              {insurances.map((plan) => (
                <li key={plan} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-700 flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-900">{plan}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Puzzle */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-teal-900 mb-4">Your Experience Matters</h3>
            <p className="text-gray-800 mt-4 max-w-md mx-auto text-sm leading-relaxed">

              Each service is a vital piece of the puzzle.
            </p>
            <img
              src="/images/roll.jpg"
              alt="Puzzle graphic showing coordinated care"
              className="mx-auto w-160"
            />
            <p className="text-gray-800 mt-3 text-sm max-w-md mx-auto leading-relaxed">

              Together they create precise, compassionate, and personalized care.
            </p>
          </div>

          {/* Therapies */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Therapies We Manage</h3>
            <ul className="space-y-3">
              {therapies.map((t) => (
                <li key={t} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-700 flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-900">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Row 3 */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Hours */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-gradient-to-br from-teal-100 to-white p-6 rounded-2xl border border-teal-200 shadow-md"
          >
            <h3 className="text-2xl font-bold text-teal-900 mb-3">Hours of Operation</h3>
            <p className="text-teal-900">Mon – Fri: 8:30 AM – 5:00 PM PST</p>
            <p className="text-teal-700 mt-2 text-sm leading-relaxed">
              Clinical support available weekdays, weekends & holidays.
            </p>
          </motion.div>

          {/* Visit Online 
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-2xl border border-primary-200 shadow-md flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-3">Visit Us Online</h3>
            <a
              href="https://www.applespecialtypharmacy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 text-lg font-medium underline hover:text-primary-900 transition min-w-[44px] min-h-[44px]"
            >
              www.applespecialtypharmacy.com
            </a>
          </motion.div>
*/}
          {/* QR */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal-200 shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-teal-900 mb-2">Open Our App</h3>
            <p className="text-teal-700 mb-4 text-sm leading-relaxed">
              Scan the QR code below using your mobile device.
            </p>
            <img
              src="/images/qr.jpg"
              alt="QR code to download the pharmacy mobile app"
              className="w-32 h-32 mx-auto rounded-md shadow"
            />
          </motion.div>
        </motion.section>
      </motion.main>
    </>
  );
}
