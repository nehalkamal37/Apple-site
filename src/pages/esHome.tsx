// src/pages/BrochurePage.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button';

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
  Computer,
  CheckCircle,
} from 'lucide-react'
import { Hero } from '../components/ui/Hero'

const experienceItems = [
  { Icon: Heart, text: 'Atención que te pone primero' },
  { Icon: Truck, text: 'Entrega gratuita a tu puerta' },
  { Icon: BookOpen, text: 'Respuestas que tienen sentido' },
  { Icon: DollarSign, text: 'Ayuda con los costos y la cobertura' },
  { Icon: Users, text: 'Tu equipo de salud, trabajando juntos' },
]

const stayConnectedItems = [
  { Icon: MessageCircle, text: 'Mensajería segura con nuestro equipo de farmacia' },
  { Icon: Pill, text: 'Pide y gestiona tus recargas desde tu dispositivo móvil' },
  { Icon: Truck, text: 'Sigue el estado de tu pedido en tiempo real' },
  { Icon: Check, text: 'Revisa tu cuenta y haz pagos seguros' },
]

const getStartedItems = [
  { Icon: Phone, text: '323-999-APPL (2775)' },
  { Icon: Printer, text: '323-955-APPL (2775)' },
    { Icon: Pill, text: "Refills Text Number: 657-224-7232" }, // added refill here
  
  {
    Icon: Car,
    text: '1211 N. Broadway, Ste 300\nSanta Ana, CA 92701',
  },
]

const therapies = [
  "VIH/SIDA",
  "Hepatitis C",
  "Artritis Reumatoide",
  "Esclerosis Múltiple",
  "Oncología",
  "Trasplante",
  "Dermatología",
  "Gastroenterología",
  "Otras condiciones especiales"
];

const insurances = [
  "Medicare Parte D",
  "Medi-Cal",
  "Covered California",
  "Seguro Privado",
  "Planes Comerciales",
  "La mayoría de los PBMs",
 
];

export default function BrochurePage() {
  return (
    <>
      <Hero
        title="CUIDADO MODERNO"
        subtitle="PRECISIÓN PERSONALIZADA"
        bgImage="/images/hero.png"
        height="lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        

              {/*
          <Button variant="primary" size="lg">
            <a href="/contact" target="_blank">Contáctanos</a>
          </Button>
              
              
          <Button variant="secondary" size="lg">
            <a href="https://patient.rxlocal.com" target="_blank">Portal del Paciente</a>
          </Button>
          */}
        </div>
      </Hero>

      <motion.main
        className="container mx-auto p-8 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-primary-800 mb-4">Tu experiencia importa</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En Apple Specialty Pharmacy, tu cuidado es una colaboración , cada servicio es una pieza vital del rompecabezas.
            </p>
            <ul className="space-y-4">
              {experienceItems.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full mr-4">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </span>
                  <span className="text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            className="bg-primary-600 text-white rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Conéctate en cualquier momento, en cualquier lugar</h3>
              <p className="mb-6 leading-relaxed">
                Nuestras herramientas móviles y en línea te ayudan a manejar tus medicamentos fácilmente.
              </p>
              <ul className="space-y-4">
                {stayConnectedItems.map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full mr-3">
                      <Icon className="h-4 w-14 text-primary-600" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="/images/phone.jpg"
              alt="Paciente usando móvil"
              className="mt-8 rounded-xl shadow-lg object-cover w-full h-48"
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-extrabold text-primary-800 mb-4">Comienza hoy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Deja que Apple Specialty Pharmacy elimine el estrés de tu atención especializada.
            </p>
            <ul className="space-y-4">
              {getStartedItems.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-center bg-primary-50 rounded-full px-4 py-2 hover:shadow-md transition-shadow">
                  <Icon className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="whitespace-pre-wrap font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section className="grid lg:grid-cols-3 gap-8 p-8 bg-white rounded-2xl shadow">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Seguro Médico Aceptado</h3>
            <ul className="space-y-3">
              {insurances.map((plan) => (
                <li key={plan} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">{plan}</span>
                </li>
              ))}
            </ul>
          </div>

{/* Center-inside panel (puzzle already there, so you could swap) */}
<div className="text-center">
  <h3 className="text-xl font-bold text-teal-800 mb-4">Tu Experiencia Importa</h3>
   <p className="text-gray-800 mt-4 max-w-md mx-auto text-sm">
    En Apple Specialty Pharmacy, tu atención es una colaboración: cada servicio es una pieza vital del rompecabezas.
  </p>
  <img src="/images/roll.jpg" alt="Gráfico de rompecabezas" className="mx-auto w-160" />
 
  <p className="text-gray-700 mt-3 text-sm max-w-md mx-auto">
    Juntos, construyen una experiencia de atención precisa, compasiva y personalizada a tus necesidades.
  </p>
</div>


            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Terapias que manejamos</h3>
              <ul className="space-y-3">
                {therapies.map((t) => (
                  <li key={t} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mr-3 mt-1" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          
        </motion.section>

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
    <h3 className="text-2xl font-bold text-teal-800 mb-3">Horario de atención</h3>
    <p className="text-teal-900">Lun – Vie: 8:30 AM – 5:00 PM PST</p>
    <p className="text-teal-700 mt-2 text-sm leading-relaxed">
      Soporte clínico disponible entre semana, fines de semana y días festivos.
    </p>
  </motion.div>

  {/* Spacer */}
{/* Logo in the middle */}
<motion.div
  variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
  className="bg-white flex items-center justify-center p-6 rounded-2xl border border-teal-200 shadow-md"
>
  <img
    src="/HealthcareMerchant-NABPSeal.jpg"
    alt="Healthcare Merchant Accreditation Seal"
    className="w-40 h-40 object-contain"
  />
</motion.div>

  {/* QR */}
  <motion.div
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal-200 shadow-md text-center"
  >
    <h3 className="text-2xl font-bold text-teal-800 mb-2">Descarga nuestra app</h3>
    <p className="text-teal-700 mb-4 text-sm leading-relaxed">
      Escanea el código QR a continuación usando tu dispositivo móvil.
    </p>
    <img
      src="/images/qr.jpg"
      alt="Código QR para descargar la aplicación de la farmacia"
      className="w-32 h-32 mx-auto rounded-md shadow"
    />
  </motion.div>
</motion.section>


      </motion.main>
    </>
  )
}
